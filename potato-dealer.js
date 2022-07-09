function PotatoDealer(client){
	this.queries = [];
	this.client = client;
	this.bridgeSize = 0;
}
PotatoDealer.prototype.sizeBridge = function(x){this.bridgeSize = x}
PotatoDealer.prototype.benchTicket = function(p,f){
	console.log('A request for Tokens from a Potato NFT that has been benched')
	this.queries.push({type:true,p:p,f:f})
	if(this.queries.length == 1){
		this.next();
	}
};
PotatoDealer.prototype.pullTicket = function(p,f){
	console.log('A request for an NFT from a BSC Tokens deposited')
	this.queries.push({type:false,p:p,f:f})
	if(this.queries.length == 1){
		this.next();
	}
};

PotatoDealer.prototype.next = function(){
	//construct query
	let _this = this
	if(this.queries.length>0){
		let work = this.queries[0]//.shift();
		let query = '';
		if(work.type){
			query += 'INSERT INTO bridge (ID) VALUES ';
			work.p.forEach((ID,i)=>{
				query += '('+ID+')'
				if(i!==work.p.length-1){
					query += ','
				}
			})
			console.log("--------------- Running ---------------", query)
			this.client.query(query,function(err,res,fields){
				if(err) throw err;
				//run call back to send tokens for the deposited NFTs
				_this.bridgeSize += p.length
				console.log("running block tx")
				work.f(null,function(){
					_this.queries.shift();
					_this.next()	
				})
			})
		}else{//RANDOMIZATION HAPPENS AT PULL
			let count = work.p
			query += 'SELECT ID FROM ( SELECT ID, ROW_NUMBER() OVER (ORDER BY stackorder) AS rn FROM bridge ) q WHERE '+(function(){
				console.log("count", count, "bridgeSize", _this.bridgeSize)
				var arr = [];
				while(arr.length < count){
				    var r = Math.floor(Math.random() * _this.bridgeSize) + 1;
				    if(arr.indexOf(r) === -1) {
				    	arr.push(r);
				    	console.log('Randomly Selected Position: ',r)
				    }
				}
				let q = ''
				arr.forEach((ID,i)=>{
					console.log("Row Number ", ID)
					q+= "rn="+ID
					if(i!==count-1){
						q+=' OR '
					}
				})
				return q
			})()+' ORDER BY rn';
			
			this.client.query( query, function(err,res,fields){
				if(err) throw err;
				console.log("RESULTS from complex ROW_NUMBER query", res)
				let query = 'DELETE FROM bridge WHERE ';
				let pIDs= [];
				
				res.forEach((potato,i)=>{
					let pID = potato.ID;
					query += "ID = "+pID;
					if(i !== res.length-1){
						query += ' OR '
					}
					pIDs.push(pID)
				})

				_this.client.query(query,function(err,res,fields){
					if(err) throw err;
					console.log("running block tx")
					work.f(pIDs,function(){
						// subtract from tracked bridge table size.
						_this.bridgeSize -= count
						_this.queries.shift();
						_this.next()
					})
				})
			})

		}
	}
	
};

module.exports = PotatoDealer
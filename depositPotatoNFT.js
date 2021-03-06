var keys = require("./keys.js")
var env = require("./env.js")
var Web3 = require('web3');

const polygon_web3 = new Web3(env.network ? env.polyProviders[0] : env.ethProviders[0])
var machine = polygon_web3.eth.accounts.wallet.add(keys.wallet);

//Polygon Contracts
var potatoNFT_Address = env.potatoNFT
var potatoNFT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"potatoes","type":"uint256[]"}],"name":"PotatoTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newContractOwner","type":"address"}],"name":"changeContractOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"constructAttributes","outputs":[{"internalType":"string","name":"JSON","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"constructDescription","outputs":[{"internalType":"string","name":"URI","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"constructName","outputs":[{"internalType":"string","name":"URI","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"constructSVG","outputs":[{"internalType":"string","name":"SVG","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"workerAddress","type":"address"}],"name":"fireWorker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getPotatoData","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"background","type":"uint256"},{"internalType":"uint256","name":"leftArm","type":"uint256"},{"internalType":"uint256","name":"rightArm","type":"uint256"},{"internalType":"uint256","name":"hat","type":"uint256"},{"internalType":"uint256","name":"ears","type":"uint256"},{"internalType":"uint256","name":"eyes","type":"uint256"},{"internalType":"uint256","name":"nose","type":"uint256"},{"internalType":"uint256","name":"mouth","type":"uint256"},{"internalType":"uint256","name":"shoes","type":"uint256"},{"internalType":"uint256","name":"rarityrank","type":"uint256"},{"internalType":"uint256","name":"metascore","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"images","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"metapoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256[]","name":"UINTs","type":"uint256[]"}],"name":"mintPotatoHead","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256[]","name":"UINTs","type":"uint256[]"}],"name":"mintPotatoHeads","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"names","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"uint256","name":"meta","type":"uint256"}],"name":"newPiece","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"image","type":"string[]"},{"internalType":"string[]","name":"desc","type":"string[]"},{"internalType":"uint256[]","name":"meta","type":"uint256[]"}],"name":"newPieces","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pieces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"potatoTransfer","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"potatoes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"workerAddress","type":"address"}],"name":"setWorker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
var potatoNFT_Contract = new polygon_web3.eth.Contract(potatoNFT_ABI, potatoNFT_Address)

/*
	6903482
0x39046d30159e5f9defcbab55b1f57c612f266e9a96b90b5ffcee8fde49e57205	0x5cc1b270	2 hrs 19 mins ago	0x27792f8198e0685e6d1577ca8a463788d060cd8a	 IN 	0x2f712f2c2e4eee913d15caa8e4709400d61bfbac	3909363
0x18c99b2a251a2db109fbebb8cd017b950ef4af7bf08efa889cd1617c083b18d4	0x5cc1b270	2 hrs 19 mins ago	0x27792f8198e0685e6d1577ca8a463788d060cd8a	 IN 	0x2f712f2c2e4eee913d15caa8e4709400d61bfbac	7481030
0x45b049f6ee5ab69564f67c5aa0a89e807a63c61455d242192dc442720c04dca5	0x5cc1b270	2 hrs 19 mins ago	0x27792f8198e0685e6d1577ca8a463788d060cd8a	 IN 	0x2f712f2c2e4eee913d15caa8e4709400d61bfbac	
*/

insistTX(()=>{
	return potatoNFT_Contract.methods.potatoTransfer(machine.address, env.swapNFT, [ 5375709, 8631060, 1173310, 6709459, 2530043 ])
},()=>{
	console.log(machine.address,"should have an ERC20s now")
})

function insistTX(txf,donef,timeout){
	function TX(){txf().send({ from:machine.address, gasLimit: 25000000 }, function(r,hash){
		if(r) throw r;
		console.log( "Tx Hash: ", hash )
		let hashChecks = 0
		function readHash(){
			setTimeout(function(){
				polygon_web3.eth.getTransactionReceipt(hash)
				.then(function(res){
					//
					if(res === null){
						hashChecks += 1
						console.log("Nothing yet, trying again...", hashChecks)
						readHash();
					}else{
						if(res.status){
							//console.log('res',res.status)
							console.log("Tx Success", hash)
							donef()
						}else{
							//console.log('res',res.status)
							console.log("Tx Dropped. Attempting again", hash)
							TX();
							//attempt tx again
						}
					}
				}).catch(function(r){
					console.error("------ ====== = ERROR = ====== ------")
					console.error(r)
				})
			},timeout?timeout:5000)	
		}

		readHash();
			
		})
		.catch(function(err){
			console.error("====== = ------ ERROR ------ = ======")
			console.error(err)
		})
	}
	TX();
}
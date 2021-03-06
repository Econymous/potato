// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;
contract SwapToken{
    address THIS = address(this);
    address contractOwner;
    address public beneficiary;
    ERC20 POTATO = ERC20(0x0A72ffd37b8eb9cC72A9abF6B15d6Dac9d0BFA89);
    mapping(address => bool) worker;
    uint public FEE;
    uint MAX_SWAP = 1000;
    uint public collections;

    constructor(){
        contractOwner = msg.sender;
    }

    modifier onlyOwner {
      require(msg.sender == contractOwner || worker[msg.sender]);
      _;
   }

    function changeContractOwner(address newContractOwner) public onlyOwner{
        contractOwner = newContractOwner;
    }
    function changeBeneficiary(address newBeneficiary) public onlyOwner{
        beneficiary = newBeneficiary;
    }

    function setFee(uint newFee) public  onlyOwner{
        FEE = newFee;
    }

    function withdraw() public {
        require(msg.sender == beneficiary);
        (bool success, ) = msg.sender.call{value:collections}("");
        require(success, "Transfer failed.");
        collections = 0;
    }

    function setWorker(address workerAddress) public  onlyOwner{
        worker[workerAddress] = true;
    }

    function fireWorker(address workerAddress) public  onlyOwner{
        worker[workerAddress] = false;
    }

    event DepositPotatoToken(address from, address forWhom, uint amount);
    function depositPotatoToken(address forWhom, uint256 amount) external payable{
        address sender = msg.sender;
        uint cost = amount*FEE;
        require(msg.value == cost && amount<=MAX_SWAP && amount==(amount/1e18)*1e18/*only send flat amounts*/ && POTATO.transferFrom(sender, THIS, amount));
        collections += cost;
        emit DepositPotatoToken(sender, forWhom, amount);
    }
    
    event SendPotato(address to, uint amount);
    function sendPotato(address to, uint amount) public onlyOwner{
        POTATO.transfer(to, amount);
        emit SendPotato(to, amount);
    }
}


interface ERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns(bool);
    function transfer(address to, uint256 amount) external;
}
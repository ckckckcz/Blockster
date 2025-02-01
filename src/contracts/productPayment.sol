pragma solidity ^0.8.0;

contract ProductPayment {
    address public owner;
    uint256 public productPrice;

    event PaymentReceived(address buyer, uint256 amount);

    constructor(uint256 _price) {
        owner = msg.sender;
        productPrice = _price;
    }

    function buyProduct() external payable {
        require(msg.value == productPrice, "Incorrect payment amount");
        emit PaymentReceived(msg.sender, msg.value);
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
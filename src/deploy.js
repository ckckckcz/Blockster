const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const ProductPayment = await hre.ethers.getContractFactory("ProductPayment");
  const productPrice = hre.ethers.utils.parseEther("0.01"); // Harga produk (0.01 ETH)
  const productPayment = await ProductPayment.deploy(productPrice);

  await productPayment.deployed();

  console.log("ProductPayment deployed to:", productPayment.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
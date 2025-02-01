import { useState } from "react";
import { ethers } from "ethers";

const contractABI = [ /* Tempel ABI smart contract di sini */ ];
const contractAddress = "0xYourContractAddress";
const productPrice = ethers.utils.parseEther("0.01");

export default function Card() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(null);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const buyProduct = async () => {
    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return;
    }

    if (window.ethereum) {
      try {
        setIsLoading(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Kirim pembayaran ke smart contract
        const transaction = await contract.buyProduct({ value: productPrice });
        await transaction.wait();
        alert("Payment successful! Thank you for your purchase.");
      } catch (error) {
        console.error("Error buying product:", error);
        alert("Payment failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 text-left">
      <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        {walletAddress ? (
          <button
            onClick={buyProduct}
            disabled={isLoading}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? "Processing..." : "Buy Now (0.01 ETH)"}
          </button>
        ) : (
          <button
            onClick={connectWallet}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Connect Wallet to Buy
          </button>
        )}
      </div>
    </div>
  );
}
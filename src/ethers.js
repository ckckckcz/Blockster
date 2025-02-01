import { useState } from "react";
import { ethers } from "ethers";

// ABI dan alamat smart contract Anda
const contractABI = [ /* Isi dengan ABI smart contract Anda */ ];
const contractAddress = "0xYourContractAddress";

const WalletConnection = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);

        // Setup smart contract
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setContract(contractInstance);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const interactWithContract = async () => {
    if (contract) {
      try {
        // Contoh: Memanggil fungsi di smart contract
        const transaction = await contract.someFunction();
        await transaction.wait();
        console.log("Transaction successful!");
      } catch (error) {
        console.error("Error interacting with contract:", error);
      }
    }
  };

  return (
    <div>
      <button
        type="button"
        className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-md px-5 py-2 text-center dark:bg-white dark:hover:bg-gray-200 k:focus:ring-blue-800"
        onClick={connectWallet}
      >
        {walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
      </button>
      <button onClick={interactWithContract}>Interact with Contract</button>
    </div>
  );
};

export default WalletConnection;
import { useState } from "react";

const WalletConnection = () => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    async function connectWallet() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                }) as string[];
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.error("Koneksi wallet gagal", error);
            }
        } else {
            alert("Please install MetaMask");
        }
    }

    return (
        <div>
            <button type="button" className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-md px-5 py-2 text-center dark:bg-white dark:hover:bg-gray-200 k:focus:ring-blue-800" onClick={connectWallet}>
                {walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
            </button>
        </div>
    )
}

export default WalletConnection;
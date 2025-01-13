import Advantages from "../components/UI/Home/Advantages";
export default function Home() {
    return(
        <>
            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-gray-900 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-800">
                        <span className="text-xs bg-gray-600 rounded-full text-white px-4 py-1.5 me-3 font-bold">New</span> <span className="text-sm font-bold">Get Listed on Binance</span> 
                        <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Best Decentralized <br /> Exchange Experience</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Trade crypto perpetuals with up to 100x leverage, featuring <br /> low fees and the market's lowest slippage</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-4 px-7 text-base font-bold hover:border-2 hover:border-gray-500 border-2 border-black text-center text-white rounded-full bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Trade Now
                        </a>
                    </div>
                    <div className="mt-14 grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 text-left lg:gap-5 gap-2">
                        <div className="w-full p-6 bg-white border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 border-2">
                            <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                            </svg>
                            <a href="#">
                                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-500">Total Trading Volume</h5>
                            </a>
                            <p className="text-3xl font-bold text-gray-500 dark:text-white">$518,581,364,420</p>
                        </div>
                        <div className="w-full p-6 bg-white border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 border-2">
                            <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                            </svg>
                            <a href="#">
                                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-500">Open Interest</h5>
                            </a>
                            <p className="text-3xl font-bold text-gray-500 dark:text-white">$7,828,290</p>
                        </div>
                        <div className="w-full p-6 bg-white border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 border-2">
                            <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                            </svg>
                            <a href="#">
                                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-500">TVL</h5>
                            </a>
                            <p className="text-3xl font-bold text-gray-500 dark:text-white">$48,481,209</p>
                        </div>
                    </div>
                </div>
            </section>
            <Advantages />
        </>
    );
}
import Logo from "../assets/img/Blockter.png"
export default function Navbar() {
    return(
        <nav className="bg-white border-gray-200 dark:bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                <a href="javascript:void(0)" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blockster</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-md px-5 py-2 text-center dark:bg-white dark:hover:bg-gray-200 k:focus:ring-blue-800">Connect Wallet</button>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-xl md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-xl bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
                        <li className="px-5 py-2 hover:bg-gray-900 rounded-xl">
                            <a href="#" className="block md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                        </li>
                        <li className="px-5 py-2 hover:bg-gray-900 rounded-xl">
                            <a href="#" className="block md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Earn</a>
                        </li>
                        <li className="px-5 py-2 hover:bg-gray-900 rounded-xl">
                            <a href="#" className="block md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Trading</a>
                        </li>
                        <li className="px-5 py-2 hover:bg-gray-900 rounded-xl">
                            <a href="#" className="block md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
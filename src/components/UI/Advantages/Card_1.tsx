import Image from "../../../assets/img/Card_1.png";
export default function Card_1() {
    return(
        <section className="relative">
            <div className="py-8 px-8 mx-auto max-w-screen-xl text-left lg:py-16">
                <img src={Image} alt="" className="mb-6 h-auto w-full " />
                <h1 className="mb-2 text-2xl font-extrabold tracking-tight leading-none text-gray-100 md:text-2xl lg:text-3xl">
                    Freedom of Choice
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-gray-700 to-black"></div>
        </section>
    );
}
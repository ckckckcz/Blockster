import Card_1 from "../../UI/Advantages/Card_1";
import Card_2 from "../../UI/Advantages/Card_2";
import Card_3 from "../../UI/Advantages/Card_3";
export default function Advantages() {
    return(
        <>
            <section className="bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-2xl text-left lg:py-16">
                    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Advantages</h1>
                </div>
                <div className="bg-gradient-to-b from-gray-800 to-black border-t-[2px] border-gray-700">
                    <div className="mx-auto max-w-screen-2xl text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
                            <Card_1 />
                            <Card_2 />
                            <Card_3 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
import plate from '../img/plate.jpg';
import mounting from '../img/mounting.jpeg';
import lubing from '../img/lubing.jpg';

const Intermediate = () => {
    return (
        <div>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <h1 className="text-5xl font-bold tracking-tight text-center text-first">Intermediate Knowledge</h1>
                    <p className="mt-2 text-lg text-center text-gray-600">These topics will cover things you should know about and consider when building your custom mechanical keyboard</p>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/wikeeb/intermediate/plate_material" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={plate} alt="Daisy Plate" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: KPRepublic via kprepublic.com</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Plate Material</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Plates hold each switch into place and different materials can alter the sound and feel of your keyboard build. 
                                Plates are also a crucial component that connects the inside of the keyboard with its case.</p>
                                <a href="/wikeeb/intermediate/plate_material" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/wikeeb/intermediate/keyboard_mounting_styles" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={mounting} alt="Jacky Design Piggy60 Keyboard" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: Jacky Design via jackylab.com</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Keyboard Mounting Styles</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Just like a car, the mounting style of a keyboard plays a role in its technical 'performance' when it comes to feel and sound of a keyboard. Different mounting styles offer different typing feel 
                                and acoustics with how the plate assembly interacts with the case.</p>
                                <a href="/wikeeb/intermediate/keyboard_mounting_styles" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/wikeeb/intermediate/lubing" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={lubing} alt="Glorious Lubing Station" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: Glorious PC Gaming Race via pcgamingrace.com</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Lubing</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Lubing your keyboard is what makes or breaks the acoustics. Using switches and stabilizers dry will just make your custom keyboard sound like you just bought a stock board online. Lubing is crucial to achieving 
                                peak smoothness and sound, as it is one of the most important modifications that can be done to a keyboard.</p>
                                <a href="/wikeeb/intermediate/lubing" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Intermediate;
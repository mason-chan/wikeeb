import films from '../img/films.jpg';
import foam from '../img/foam.jpg';
import mod from '../img/mod.jpg';

const Advanced = () => {
    return (
        <div>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <h1 className="text-5xl font-bold tracking-tight text-center text-first">Further Modifications</h1>
                    <p className="mt-2 text-lg text-center text-gray-600">This section covers further modifications that can be done to your keyboard to enhance its characteristics and are purely optional</p>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/wikeeb/advanced/additional_switch_modifications" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={films} alt="Switch Films" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: KPRepublic via kprepublic.com</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Additional Switch Modifications</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Besides lubing your switches, you can also switch out the stock springs and also add an accessory called switch films to alter the original characteristics of a switch.</p>
                                <a href="/wikeeb/advanced/additional_switch_modifications" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/wikeeb/advanced/keyboard_foam" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={foam} alt="MGA Keyboard Foam" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: Sneakbox.Design via sneakbox.com</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Keyboard Foam</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">You either love it or hate it when you're a seasoned enthusiast in the keyboard world. There are a lot of foams you can buy to put into your keyboard which can benefit the acoustics of your keyboard.</p>
                                <a href="/wikeeb/advanced/keyboard_foam" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/wikeeb/advanced/diy_modifications" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={mod} alt="Tempest Tape Mod" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: Tech Jio via techjioblog.com</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">DIY Modifictions</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">As the keyboard scene has grown substantially over the past few years, new ideas are created everyday to allow for more customizability with how your keyboard performs.</p>
                                <a href="/wikeeb/advanced/diy_modifications" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Advanced;
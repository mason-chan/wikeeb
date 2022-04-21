import iron165 from '../img/iron165.jpg';
import tgrAlice from '../img/tgralice.jpg';
import keycaps from '../img/keycaps.jpg';
import alpaca from '../img/alpaca.jpeg';
import stabs from '../img/c3_stabs.jpg';
import meetup from '../img/meetup.jpg';

const Introduction = () => {
    return (
        <div>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <h1 className="text-5xl font-bold tracking-tight text-center text-first">Keyboard Basics</h1>
                    <p className="mt-2 text-lg text-center text-gray-600">The first steps to figuring out what a mechanical keyboard is and its main components</p>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/introduction/introduction_to_mechanical_keyboards" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={iron165} alt="Iron165 Keyboard" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: @JiFen via zFrontier</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Introduction to Mechanical Keyboards</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 lg:text-xl md:max-w-3xl pb-5">A mechanical keyboard is basically a keyboard that utilizes mechanical switches in order to register a key press.</p>
                                <a href="introduction/introduction_to_mechanical_keyboards" className="text-center text-first text-xl"><u>Read more ➜</u></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/introduction/keyboard_layouts_and_sizes" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={tgrAlice} alt="TGR Alice Keyboard" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: @taehatypes via Twitter</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Keyboard Layout and Sizes</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">You are probably familiar with the full-size keyboard or tenkey-less keyboard, but the custom mechanical keyboard world opens up a whole variety of different sizes and layouts to suit your needs. 
                                Ranging from the very popular 65% layout all the way to split ergonomic keyboards, there is definitely something out there that will fulfill your needs of functionality.</p>
                                <a href="introduction/keyboard_layouts_and_sizes" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/introduction/keycaps" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={keycaps} alt="GMK Noel and GMK Peach Blossom" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: u/coookiecurls via Reddit</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Keycaps</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Don't underestimate these little pieces of plastic. Keycaps can drastically impact the way your keyboard sounds, feels and also heavily impacts the 
                                aesthetic of your build. You'll be seeing these the most and interacting with them the most, so choosing the right keycaps for you can make or break your overall experience.</p>
                                <a href="introduction/keycaps" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/introduction/switches" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={alpaca} alt="Alpaca Switches" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: ThereminGoat via theremingoat.com</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Switches</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">A mechanical keyboard won't be 'mechanical' without these little non-edible candies. Nowadays there are so many switch options, it is easy to get lost and stuck on 
                                what to choose for your build, as switches are the essense of the mechanical keyboard hobby. Knowing the in's and out's of a switch will largely impact your typing experience and ASMR satisfaction.</p>
                                <a href="introduction/switches" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/introduction/stabilizers" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={stabs} alt="c3 Stabilizers"/>
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: Zion Studios PH via zionstudios.ph</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">Stabilizers</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">For all those extra long keys, stabilizers (commonly referred to as 'stabs' in the keyboard world) are used to help support these larger keys from wobbling. If you didn't use these for 
                                the necessary keys, your keycaps will just end up turning into a see-saw.</p>
                                <a href="introduction/stabilizers" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-5">
                            <a href="/introduction/community" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={meetup} alt="Keyboard Meetup" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm">Credits: Andrew Lekashman via Kono.Store Blog</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <span className="block xl:inline">How the Keyboard Community Works</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Although the keyboard hobby is constantly growing, it is still a relatively niche hobby, and so, it comes with its own unique 
                                quirks that every enthusiast will likely experience throughout their journey. We'll talk about these quirks that make the custom mechanical keyboard hobby what it is.</p>
                                <a href="introduction/community" className="text-center text-first text-xl"><u>Read more ➜</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Introduction;
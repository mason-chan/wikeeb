import '../index.css';
import { Link } from 'react-router-dom';
import iron165 from '../img/iron165.jpg';
import tgrAlice from '../img/tgralice.jpg';
import keycaps from '../img/keycaps.jpg';
import alpaca from '../img/alpaca.jpeg';
import stabs from '../img/c3_stabs.jpg';
import meetup from '../img/meetup.jpg';

const Home = () => {
    return (
        <div>
            <section className="py-20 bg-first">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold tracking-tight text-center text-second mb-8">Welcome to WiKeeb!</h2>
                    <p className="mt-2 text-lg text-center text-white">Here is your one-stop resource on everything you need to know before diving head first into the giant rabbit hole that is known as custom mechanical keyboards</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <h1 className="text-4xl tracking-tight text-center text-first mb-8">Keyboard Basics</h1>
                    <div className="grid grid-cols-3 gap-8 mt-10 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0 text-center">
                        <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/introduction_to_mechanical_keyboards" className="w-full h-44 relative overflow-hidden rounded-m shadow-xl sm:rounded-xl">
                                <img src={iron165} alt="Iron165 Keyboard" className="absolute -bottom-6 sm:-bottom-8 xs:-bottom-16 lg:bottom-0 xl:-bottom-6 scale-100 lg:scale-125 xl:scale-100"/>
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Introduction to Mechanical Keyboards</h4>
                            <p className="text-base text-center text-gray-500">A mechanical keyboard is basically a keyboard that utilizes mechanical switches in order to register a key press.</p>
                            <Link to="/introduction/introduction_to_mechanical_keyboards" className="text-center text-first text-xl"><u>Read more ➜</u></Link>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/keyboard_layouts_and_sizes" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={tgrAlice} alt="TGR Alice Keyboard" className="absolute bottom-0 scale-125 xl:scale-100" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Keyboard Layouts and Sizes</h4>
                            <p className="text-base text-center text-gray-500">You are probably familiar with the full-size keyboard or tenkey-less keyboard, but the custom mechanical keyboard world opens up a whole variety of different sizes and layouts to suit your needs.
                                Ranging from the very popular 65% layout all the way to split ergonomic keyboards, there is definitely something out there that will fulfill your needs of functionality.</p>
                            <Link to="/introduction/keyboard_layouts_and_sizes" className="text-center text-first text-xl"><u>Read more ➜</u></Link>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/keycaps" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={keycaps} alt="GMK Noel and GMK Peach Blossom" className="absolute bottom-0 scale-125 xl:scale-100"/>
                            </Link>
                            <h4 className="text-2xl font-medium text-first pt-3">Keycaps</h4>
                            <p className="text-base text-center text-gray-500">Don't underestimate these little pieces of plastic. Keycaps can drastically impact the way your keyboard sounds, feels and also heavily impacts the
                                aesthetic of your build. You'll be seeing these the most and interacting with them the most, so choosing the right keycaps for you can make or break your overall experience.</p>
                            <Link to="/introduction/keycaps" className="text-center text-first text-xl"><u>Read more ➜</u></Link>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/switches" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={alpaca} alt="Alpaca Switches" className="absolute bottom-0 scale-125 xl:scale-110" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Switches</h4>
                            <p className="text-base text-center text-gray-500">A mechanical keyboard won't be 'mechanical' without these little non-edible candies. Nowadays there are so many switch options, it is easy to get lost and stuck on
                                what to choose for your build, as switches are the essense of the mechanical keyboard hobby. Knowing the in's and out's of a switch will largely impact your typing experience and ASMR satisfaction.</p>
                            <Link to="/introduction/switches" className="text-center text-first text-xl"><u>Read more ➜</u></Link>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/stabilizers" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={stabs} alt="C3 Stabilizers" className="absolute -bottom-6" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Stabilizers</h4>
                            <p className="text-base text-center text-gray-500">For all those extra long keys, stabilizers (commonly referred to as 'stabs' in the keyboard world) are used to help support these larger keys from wobbling. If you didn't use these for
                                the necessary keys, your keycaps will just end up turning into a see-saw.</p>
                            <Link to="/introduction/stabilizers" className="text-center text-first text-xl"><u>Read more ➜</u></Link>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/community" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl ">
                                <img src={meetup} alt="Keyboard Meetup" className="absolute bottom-0 scale-125 xl:scale-100" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Keyboard Community</h4>
                            <p className="text-base text-center text-gray-500">Although the keyboard hobby is constantly growing, it is still a relatively niche hobby, and so, it comes with its own unique
                                quirks that every enthusiast will likely experience throughout their journey. We'll talk about these quirks that make the custom mechanical keyboard hobby what it is.</p>
                            <Link to="/introduction/community" className="text-center text-first text-xl"><u>Read more ➜</u></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
import tgrAlice from '../img/tgralice.jpg';
import tx108 from '../img/fullsize.jpg';
import hbcp from '../img/hbcp.jpg';
import iron165 from '../img/iron165.jpg';
import keycaps from '../img/keycaps.jpg';
import alpaca from '../img/alpaca.jpeg';
import stabs from '../img/c3_stabs.jpg';
import meetup from '../img/meetup.jpg';
import tgrJane from '../img/tgrjane.jpg';
import keycult from '../img/keycult.jpg';
import gok7v from '../img/7v.jpg';
import kyuu from '../img/kyuu.jpg';
import pearl40 from '../img/pearl40.jpg';
import melody96 from '../img/melody96.jpg';
import odin from '../img/odin.jpg';
import kbd75 from '../img/kbd75.jpg';
import kl90 from '../img/kl90.JPG';
import falcon from '../img/falcon.jpg';
import polaris from '../img/polaris.jpg';
import police from '../img/police.jpg';
import atlas from '../img/atlas.jpg';
import ergodox from '../img/ergodox.jpg';
import ramam6c from '../img/ramam6c.jpg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const KeyboardSize = () => {
    return (
        <div>
            <section className="px-2 py-12 bg-white text-first md:px-0">
                <div className="container flex flex-col items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <h1 className="text-5xl font-bold tracking-tight text-center pb-10">Keyboard Layout and Sizes</h1>
                </div>
            </section>
            <section className="px-2 py-12 md:px-0 bg-white text-first">
                <div className="w-full mx-auto space-y-5 sm:py-8 md:py-12 sm:pace-y-8 md:space-y-16 max-w-7xl">
                    <div className="flex flex-col items-center sm:px-5 md:flex-row">
                        <div className="w-full md:w-1/2">
                            <img src={tgrAlice} alt="TGR Alice Keyboard" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">

                                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Table of Contents</h1>
                                <p className="pt-2 text-2xl pl-5">Keyboard Layout and Sizes</p>
                                <ul className="pl-16 text-lg list-disc">
                                    <li><HashLink to="#traditional" className="underline">The Traditional Full-Size Keyboard</HashLink></li>
                                    <li><HashLink to="#sizes" className="underline">Keyboard Sizes</HashLink></li>
                                    <li><HashLink to="#layouts" className="underline">Keyboard Layouts</HashLink></li>
                                    <li><HashLink to="#unique" className="underline">Unique Layouts and Sizes</HashLink></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0 text-first">
                <div className="container items-center text-center justify-center max-w-7xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-stretch justify-center sm:-mx-3">
                        <div className="my-10">
                            <h1 className="text-3xl mb-10" id="traditional">The Traditional Full-Size Keyboard</h1>
                            <p className="indent-10 my-2.5 text-lg">Almost everyone who has ever used a computer is probably familiar with the full-sized keyboard. A full-sized keyboard consists of having
                                alpha keys, modifier keys, function keys, navigation and arrow keys, and finally a number pad. Although the full-size has all the keys you would ever need for day-to-day tasks, its
                                biggest downside is the phyiscal size. It takes up a majority of your desk space, leaving little room for your mouse to move around or offer any space for your other desk peripherals you may use.
                                But in today's world, the mechanical keyboard community has brought more to the table when it comes to keyboard layouts and sizes. In this section we will go over everything there is to know
                                about keyboard layouts and sizes.</p>
                        </div>
                        <div className="my-5">
                            <img src={tx108} alt="TX108 Keyboard" />
                            <p className="text-base italic">TX108 by TX Keyboards. One of the small handfull of full-sized custom mechanical keyboards out there.</p>
                            <p className="text-sm text-gray-600">Credits: kin25 via GeekHack</p>
                        </div>
                        <div className="my-10">
                            <h1 className="text-3xl mb-10" id="sizes">Keyboard Sizes</h1>
                            <p className="indent-10 my-2.5 text-lg">First we will talk about the general keyboard sizes. When we refer to keyboard size we are referring to the physical size that the keyboard is.
                                In the community, keyboard size is usually labelled as percentages. There can be some variation when it comes to keyboard layout, but the size can be referred to as the general form factor of the keyboard.
                            </p>
                        </div>
                        <section className="pb-10 bg-white">
                            <div className="container max-w-6xl mx-auto">
                                <div className="grid grid-cols-3 gap-8 mt-10 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0 text-center">
                                    <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <div className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={hbcp} alt="HBCP Keyboard" className="absolute scale-110 xl:scale-100" />
                                        </div>
                                        <h4 className="text-2xl font-medium text-first">100% a.k.a Full-size</h4>
                                        <p className="text-lg text-center text-gray-600">The traditional keyboard size, with everything you could ever need for day-to-day use. These are actually rather scarce as many enthusiasts prefer using smaller sizes. This keyboard shown is actually called an 1800 layout, and we will talk more about this later.</p>
                                        <p className="text-base italic text-first">Credits: TaehaTypes<br /> Keyboard: Hineybush HBCP</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <div className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={tgrJane} alt="TGR Jane v2 Keyboard" className="absolute bottom-0 scale-125" />
                                        </div>
                                        <h4 className="text-2xl font-medium text-first">80% a.k.a TKL</h4>
                                        <p className="text-lg text-center text-gray-600">The same as a full-size, minus the numpad. This is the next common size when it comes to keyboards in general, and are commonly referred to as a TKL (tenkey-less).</p>
                                        <p className="text-base italic text-first">Credits: TaehaTypes<br />Keyboard: TGR Jane v2</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <div className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={keycult} alt="Keycult 1/60 Keyboard" className="absolute -bottom-2 scale-125" />
                                        </div>
                                        <h4 className="text-2xl font-medium text-first pt-3">60% a.k.a Compact</h4>
                                        <p className="text-lg text-center text-gray-600">This size removes everything from a full-size except for the necessary alphas and modifiers. This size was popularized due to the gaming community for its balance between size and functionality.</p>
                                        <p className="text-base italic text-first">Credits: TaehaTypes<br />Keyboard: Keycult 1/60</p>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="pb-10 bg-white">
                            <p className="text-lg">These three can be considered the most common sizes that can be easily obtainable through major keyboard/electronic companies. Over time though, the keyboard community has brought to the world
                                new layouts that have exploded in popularity due to their specific form factors and targeting the needs of all keyboard users.</p>
                            <div className="container max-w-6xl mx-auto">
                                <div className="grid grid-cols-3 gap-8 mt-10 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0 text-center">
                                    <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <div className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={gok7v} alt="7V Keyboard" className="absolute scale-125 xl:scale-110" />
                                        </div>
                                        <h4 className="text-2xl font-medium text-first">75%</h4>
                                        <p className="text-lg text-center text-gray-600">The 75% is essentially a compact version of a TKL. It takes away some navigation keys but keeps the arrow keys and function row.</p>
                                        <p className="text-base italic text-first">Credits: Gok<br />Keyboard: 7v</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <div className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={kyuu} alt="Kyuu Keyboard" className="absolute bottom-0 xl:-bottom-4 scale-125" />
                                        </div>
                                        <h4 className="text-2xl font-medium text-first">65%</h4>
                                        <p className="text-lg text-center text-gray-600">The 65% is essentially a 60%, but with designated arrow keys for those who much prefer to have them. These are arguably the most common layout for custom mechanical keyboards due to the overall form factor.</p>
                                        <p className="text-base italic text-first">Credits: u/Cankr<br />Keyboard: Quantrik Kyuu</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <div className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={pearl40} alt="Pearl40 Keyboard" className="absolute bottom-0 scale-125 xl:scale-100" />
                                        </div>
                                        <h4 className="text-2xl font-medium text-first pt-3">40%</h4>
                                        <p className="text-lg text-center text-gray-600">If 60% keyboards weren't small enough, this could be something for you. 40%'s remove the number row as well as some modifiers, while mostly maintaining all the alpha keys. These require a strong use of programmed layers and are not for the faint of heart.</p>
                                        <p className="text-base italic text-first">Credits: Pearl Boards<br />Keyboard: Pearl 40%</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="mb-10">
                            <h1 className="text-3xl mb-10" id="layouts">Keyboard Layouts</h1>
                            <p className="indent-10 my-2.5 text-lg">Almost each size we talked about above can be broken down into different layouts. These layouts can be either for aesthetic purposes or functional purposes. Below we will talk about a few
                                instances where a keyboard size may have a different layout to accomodate such reasons. Some things to note is that you may have heard of the term ANSI or ISO. Depending on where you live,
                                one of these may be the standard layout that you may be more familiar with. ANSI stands for the American National Standards Institute, while ISO stands for the Internation Organization for Standardization. Each have it's own purposes but it all comes down to preference,
                                and with the customizability of mechanical keyboards, you can honestly do whatever you deem fit. You may have also come across terms such as QWERTY, AZERTY, or Colemak. These layouts refer to the different positioning of the alpha keys. This is also personal preference, and you can choose whichever you think is most efficient. The most common combination you will see is the ANSI layout with
                                QWERTY format.</p>
                            <p className="indent-10 my-2.5 text-lg">Here we will be talking about the physical layouts that relate to the aesthetics and functionality that is common within the keyboard community.</p>
                            <section className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                                <img src={odin} alt="Odin Keyboard" />
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: KBDFans<br />Keyboard: KBDFans Odin</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                    <span className="block xl:inline">1800 Layout</span>
                                                </h1>
                                                <p className="mx-auto text-base text-gray-500 lg:text-xl md:max-w-3xl pb-5">An 1800 layout can be described as slightly more compact full-sized keyboard. It gets rid of some or all of the navigation keys depending on the designer's choices. They can be thought of as a 75% keyboard with a numpad attached.
                                                    You will probably see these a lot more than an actual full-sized keyboard when it comes to customs, do to its smaller form factor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                                <img src={melody96} alt="Melody96 Keyboard" />
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: CaselxASD<br />Keyboard: YMDK Melody96</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                    <span className="block xl:inline">96%</span>
                                                </h1>
                                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Although this is still technically a size, it belongs under the full-sized category of keyboards. You can think of this as a super compact version of a full-size or 1800 layout, as there are essentially no gaps between each key.
                                                    These are not as common, but are plenty available, due to its rather cramp nature. This is definitely for those who want to save as much space as possible while retaining as many keys as possible.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                                <img src={kbd75} alt="KBD75 v2 Keyboard" />
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: KBDFans<br />Keyboard: KBDFans KBD75 V2</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                    <span className="block xl:inline">Compact Layouts</span>
                                                </h1>
                                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">This directly relates to what we've mentioned above. Different sized keyboards can be compacted so that there are no gaps between each key. You will mostly see this on specific 75%'s and 65%'s. This comes down to personal preference,
                                                    whether you want to save as much space as possible or not. Many people might find these style of boards too cramped since everything is bunched up together, or simply prefer the aesthetic of exploded layouts.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                                <img src={kl90} alt="KL-90 Keyboard" />
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: KikosLab<br />Keyboard: KikosLab KL-90</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                    <span className="block xl:inline">Exploded Layouts</span>
                                                </h1>
                                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Exploded layouts refer to keyboards that have separate keys that are not directly attached to the main portion of the key demographic. This usually consists of separate arrow keys or separate navigation keys and of course, function keys.
                                                    There can be many forms of this, and at the end of the day these slight changes are due to design choices and personal preference.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                                <img src={falcon} alt="Matrix Falcon Keyboard" />
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: 宸_-<br />Keyboard: Matrix Lab 6xv 2.0 Falcon</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                    <span className="block xl:inline">HHKB Layout</span>
                                                </h1>
                                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">HHKB stands for Happy Hacking Keyboard. It is the name of a keyboard made by PFU Limited of Japan, and has come to stand for the certain layout of the keyboard as well in the community.
                                                    The HHKB is essentially a 60% keyboard, but with slight tweaks to the overall layout. The bottom left and right keys (Ctrl keys) are removed and replaced with blockers, and the traditional HHKB will also replace the full-sized backspace for two keys in place. The
                                                    right shift is also cut to add an extra key to the far right of the board. Nowadays people associate the HHKB layout with the removal of the bottom left and right keys.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                                <img src={polaris} alt="Polaris Keyboard" />
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: ai03<br />Keyboard:ai03 Polaris</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                    <span className="block xl:inline">WKL Layout</span>
                                                </h1>
                                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">WKL stands for winkey-less. This is essentially a keyboard that has the window keys removed and replaced with blockers. The origin for this design was due to the fact that the
                                                    Windows OS didn't exist at the time these keyboards were made and so there was no keys to be placed there. Now it is simply a design choice for those who like the aesthetic of these blockers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                    <div className="mb-10">
                        <h1 className="text-3xl mb-10" id="unique">Unique Layouts and Sizes</h1>
                        <p className="indent-10 my-2.5 text-lg">Throughout your keyboard journey, you may have come across some rather unusual layouts. These layouts were created to try to offer a different typing experience, idealy aimed to making a more ergonomic experience for the end user.</p>
                        <section className="px-2 py-12 bg-white md:px-0">
                            <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                <div className="flex flex-wrap items-stretch sm:-mx-3 ">
                                    <div className="w-full md:w-1/2 md:px-5">
                                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                            <img src={police} alt="TGR Alice Keyboard" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Credits: LightningKeyboards<br />Keyboard: TGR Alice Polycarbonate</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                        <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                <span className="block xl:inline">Alice Layout</span>
                                            </h1>
                                            <p className="mx-auto text-base text-gray-500 lg:text-xl md:max-w-3xl pb-5">This non-separated split 'ergonomic' layout was made popular after the release of the TGR Alice by Yuktsi, which is originally based off of Lin's EM7 keyboard. This layout
                                                aims to give the typist a slightly more ergonomic layout, without having to make to much adjustments from those who came from the traditional staggered keyboard. The typing angles allow the user to keep their wrists straight and elbows out, and the split gives more room for your shoulders to relax.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="px-2 py-12 bg-white md:px-0">
                            <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                <div className="flex flex-wrap items-stretch sm:-mx-3">
                                    <div className="w-full md:w-1/2 md:px-5">
                                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                            <img src={atlas} alt="Atlas Keyboard" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Credits: Cannonkeys<br />Keyboard: Atlas</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                        <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                <span className="block xl:inline">Ortho Layout</span>
                                            </h1>
                                            <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">The ortho layout changes the approach of staggered keys, making each column of keys straight. The philosophy behind using an ortho style board is that your fingers naturally
                                                have an up and down motion. There are many different versions of ortho boards, but all of them rely on the keys being straight vertically. You can find this layout on normal keyboards or split keyboards.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="px-2 py-12 bg-white md:px-0">
                            <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                <div className="flex flex-wrap items-stretch sm:-mx-3">
                                    <div className="w-full md:w-1/2 md:px-5">
                                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                            <img src={ergodox} alt="Ergodox Keyboard" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Credits: Mintlodica<br />Keyboard: Ergodox EZ</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                        <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                <span className="block xl:inline">Split Keyboards</span>
                                            </h1>
                                            <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Although we mentioned that the Alice layout is a split layout, here we will be referring them to keyboards that have two physical bodies. Using a split board allows freedom to adjust the spacing and angle between both bodies.
                                                These can come in both traditional layouts or ortho layouts. There are even some out there that have 3D curves for an elevated ergonomic experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="px-2 py-12 bg-white md:px-0">
                            <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                <div className="flex flex-wrap items-stretch sm:-mx-3">
                                    <div className="w-full md:w-1/2 md:px-5">
                                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                            <img src={ramam6c} alt="Rama M6-C Macro" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Credits: RAMA WORKS<br />Keyboard: Rama M6-C</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                        <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                                                <span className="block xl:inline">Macropads</span>
                                            </h1>
                                            <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Macropads are essentially smaller keyboards that are meant as an extension to your main keyboard. These can range from full numpads to even a single-key board.
                                                These macropads can be programmed to whatever you need, and some can even be attached to the edge of your monitor or desk.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <h1 className="text-4xl tracking-tight text-center text-first mb-8">Keyboard Basic Chapters</h1>
                    <div className="grid grid-cols-3 gap-8 mt-10 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0 text-center">
                        <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/introduction_to_mechanical_keyboards" className="w-full h-44 relative overflow-hidden rounded-m shadow-xl sm:rounded-xl">
                                <img src={iron165} alt="Iron165 Keyboard" className="absolute bottom-0 xl:-bottom-6 scale-125 xl:scale-100" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Introduction to Mechanical Keyboards</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/keyboard_layouts_and_sizes" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={tgrAlice} alt="TGR Alice Keyboard" className="absolute bottom-0 scale-125 xl:scale-100" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Keyboard Layouts and Sizes</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/keycaps" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={keycaps} alt="GMK Noel and GMK Peach Blossom" className="absolute bottom-0 scale-125 xl:scale-100" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first pt-3">Keycaps</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/switches" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={alpaca} alt="Alpaca Switches" className="absolute bottom-0 scale-125 xl:scale-110" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Switches</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/stabilizers" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={stabs} alt="C3 Stabilizers" className="absolute -bottom-6" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Stabilizers</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <Link to="/introduction/community" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl ">
                                <img src={meetup} alt="Keyboard Meetup" className="absolute bottom-0 scale-125 xl:scale-100" />
                            </Link>
                            <h4 className="text-2xl font-medium text-first">Keyboard Community</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0 text-first">
                <div className="container max-w-7xl px-8 mx-auto xl:px-5 text-right flex justify-between">
                    <div>
                        <Link to="/introduction/introduction_to_mechanical_keyboards" className="inline-flex items-center w-full px-6 py-3 text-xl font-extrabold text-second bg-first md:px-3 md:w-auto rounded-xl lg:px-5 hover:bg-second hover:text-first focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-second">⇦ Introduction to Mechanical Keyboards</Link>
                    </div>
                    <div>
                        <Link to="/introduction/keycaps" className="inline-flex items-center w-full px-6 py-3 text-xl font-extrabold  text-second bg-first md:px-3 md:w-auto rounded-xl lg:px-5 hover:bg-second hover:text-first focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-second">Keycaps ⇨</Link>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default KeyboardSize;
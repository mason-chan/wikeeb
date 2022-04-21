import tgrAlice from '../img/tgralice.jpg';
import darling from '../img/darling.jpg';
import unit from '../img/unit.jpg';
import primus from '../img/primus.jpg';
import galactic from '../img/galactic.jpg';
import redSamurai from '../img/redsamurai.jpg';
import pomJelly from '../img/pomjelly.jpg';
import deadBeats from '../img/deadbeats.jpg';
import vileBloom from '../img/vilebloom.jpg';
import astrolokeys from '../img/astrology.jpg';
import milkshake from '../img/milkshake.jpg';
import littlePilot from '../img/littlepilot.jpg';
import devtty from '../img/devtty.jpg';
import ember from '../img/ember.jpg';
import dmg from '../img/dmg.jpg';
import crp from '../img/crp.jpg';
import blanks from '../img/blanks.jpg';
import base from '../img/base.jpg';
import extension from '../img/extension.jpg';
import iron165 from '../img/iron165.jpg';
import keycaps from '../img/keycaps.jpg';
import alpaca from '../img/alpaca.jpeg';
import stabs from '../img/c3_stabs.jpg';
import meetup from '../img/meetup.jpg';


const Keycaps = () => {
    return (
        <div>
            <section className="px-2 py-12 bg-white text-first md:px-0">
                <div className="container flex flex-col items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <h1 className="text-5xl font-bold tracking-tight text-center pb-10">Keycaps</h1>

                </div>
            </section>

            <section className="px-2 py-12 md:px-0 bg-white text-first">
                <div className="w-full mx-auto space-y-5 sm:py-8 md:py-12 sm:pace-y-8 md:space-y-16 max-w-7xl">
                    <div className="flex flex-col items-center sm:px-5 md:flex-row">
                        <div className="w-full md:w-1/2">
                            <img src={keycaps} alt="TGR Alice Keyboard" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">

                                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Table of Contents</h1>
                                <p className="pt-2 text-2xl pl-5">Keycaps</p>
                                <ul className="pl-16 text-lg list-disc">
                                    <li><a href="#keycaps" className="underline">What are Keycaps?</a></li>
                                    <li><a href="#keycapSizes" className="underline">Keycap Sizes</a></li>
                                    <li><a href="#profiles" className="underline">Keycap Profiles</a></li>
                                    <li><a href="#materials" className="underline">Keycap Materials</a></li>
                                    <li><a href="#methods" className="underline">Production Methods</a></li>
                                    <li><a href="#naming" className="underline">Keysets and Naming</a></li>
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
                            <h1 className="text-3xl mb-10" id="keycaps">What are Keycaps?</h1>
                            <p className="indent-10 my-2.5 text-lg">Keycaps are the little plastic pieces that cover each individual switch, and is essentially the face of the keyboard. Keycaps are the easiest way to customize the aesthetics and feel of your keyboard.
                                All you have to do is simply take off the keycaps from your switches and put on a new set of keycaps.</p>
                            <p className="indent-10 my-2.5 text-lg">There are many different styles of keycaps in today's market, as everything about them can be different from the shape and size to their material and colors.</p>
                        </div>
                        <div className="my-5">
                            <img src={darling} alt="GMK Darling Keycaps" />
                            <p className="text-base italic">GMK Darling keycaps on a Cake60 keyboard. Keycaps are cherry profile and based off the popular character Zero Two from Darling in the Franxx.</p>
                            <p className="text-sm text-gray-600">Credits: Alexotos via Instagram</p>
                        </div>
                        <div className="my-10">
                            <h1 className="text-3xl mb-10" id="keycapSizes">Keycap Sizes</h1>
                            <p className="indent-10 my-2.5 text-lg">You may have noticed that there are keycaps of different sizes on your keyboard. It is important to know how to distinguish these keycaps for when you are choosing them for your build.
                                Keycaps are measured in <strong className="text-red-600">u</strong> where 1u is a single unit size for a keycap. When measuring the larger keycaps, they are calculated based on its proportions to a 1u keycap. For example, the tab key
                                is 1.5u (1.5x the length of a 1u keycap) and your capslock key is 1.75u.</p>
                            <p className="indent-10 my-2.5 text-lg">Although most keyboards will share similar layouts, it is important to keep in mind what specific keycaps are needed as some layouts might require specifc ones. An example of this that
                                is most commonly experienced with beginners is when they are building a 65% keyboard for example. They may not be aware that the right shift is a 1.75u key compared to the normalized 2.75u right shift.</p>
                            <p className="indent-10 my-2.5 text-lg">Some minor things to consider with the keysizes are where switches are specifically placed on your keyboard. With different layouts and options, it's important to choose the right keycap to fit. For
                                example, most keyboards will have the option for either a regular capslock or a stepped capslock. With this difference, the keycap stem placement for the stepped caplocks is offset from the center. Spacebars are also something to note as different
                                length spacebars will have different stem orientations and some keyboards may have irregular stem placements that match up with the stabilizer.</p>
                        </div>
                        <div className="my-5">
                            <img src={unit} alt="Keycap units" />
                            <p className="text-base italic">Keycap units to cover a standard compact 65% keyboard. You will definitely come across similar pictures showing the possible options for a specific keyboard.</p>
                            <p className="text-sm text-gray-600">Credits: u/RatratanX via Reddit</p>
                        </div>
                        <div className="my-10">
                            <h1 className="text-3xl mb-10" id="profiles">Keycap Profiles</h1>
                            <p className="indent-10 my-2.5 text-lg">Keycap profiles refer to the overall shape and design of a specific keycap set. You may have come across keycaps that are fairly low in height or keycaps that are flat (for instance a laptop keyboard).</p>
                        </div>
                        <div className="mb-10">
                            <h1 className="text-2xl" id="layouts">Sculpted and Uniform Profiles</h1>
                            <p className="indent-10 my-2.5 text-lg">In today's keyboard community, there are a decent amount of different profiles to choose from, but we can boil all of them down into two major categories: sculpted profiles and uniform profiles.</p>
                            <section className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <a href="/introduction/introduction_to_mechanical_keyboards" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                                <img src={primus} alt="Odin Keyboard" />
                                            </a>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: Lightning Keyboards<br />Keycaps: GMK White-Blue</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-2xl font-extrabold tracking-tight">
                                                    <span className="block xl:inline">Sculpted Profile</span>
                                                </h1>
                                                <p className="mx-auto text-base text-gray-500 lg:text-xl md:max-w-3xl pb-5">Sculpted keycaps will have their own unique shape and height for each row of a keyboard. Putting on keycaps matter as each row
                                                    is designed a specific way for the end-user experience.</p>
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
                                                <img src={galactic} alt="Melody96 Keyboard" />
                                            </a>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: Lucasfilm Ltd.<br />Keycaps: DSA Galactic Empire</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-2xl font-extrabold tracking-tight">
                                                    <span className="block xl:inline">Uniform Profile</span>
                                                </h1>
                                                <p className="mx-auto text-base text-gray-500  lg:text-xl md:max-w-3xl pb-5">Uniform keycaps will have the same shape and height, where the only obvious difference will be the size of the keycaps for your larger keys. You can easily
                                                    use any keycaps for whatever row you want them on.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div>
                                <p className="text-lg my-2.5 indent-10">Knowing what profile to go for can always be a hard decision. Both of these options come down to personal preference, and the only way to really know for sure is to just try a profile out to see if you like it or not.
                                    Most of the time, the safest options are usually cherry or OEM profile keycaps, as they are abundant in the keyboard market and the sculpt offers a very comfortable typing experience for many. You may also already be familiar with them as
                                    normal keyboards will usually have a similar sculpt to them. You can go down the route of uniform keycaps if you come from typing on laptops or low profile keyboards.</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-3xl" id="sizes">Common Keycap Profiles</h1>
                        </div>
                        <section className="pb-10 bg-white">
                            <div className="container max-w-6xl mx-auto">
                                <div className="grid grid-cols-3 gap-8 mt-10 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0 text-center">
                                    <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/introduction_to_mechanical_keyboards" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={redSamurai} alt="HBCP Keyboard" className="absolute -right-3 scale-125" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first">Cherry</h4>
                                        <p className="text-lg text-center text-gray-600">Cherry profile keycaps are sculpted with a cylindrical typeface. These have originated from Cherry and was brought through their G80 and G81 series of keyboards. Cherry profile keycaps are argueably one of the most
                                            popular keycap profiles in the current market.</p>
                                        <p className="text-base italic text-first">Credits: Drop.com<br /> Keycaps: GMK Red Samurai</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/keyboard_layouts_and_sizes" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={pomJelly} alt="TGR Jane v2 Keyboard" className="absolute bottom-0 scale-125" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first">OEM</h4>
                                        <p className="text-lg text-center text-gray-600">Possibly the original keycap profile, OEM is also sculpted with a cylindrical typeface. They have a higher height than cherry and are mostly found on almost every off-the-shelf keyboard. </p>
                                        <p className="text-base italic text-first">Credits: ESC Keyboard<br />Keycaps: POM Jelly</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/keycaps" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={deadBeats} alt="Keycult 1/60 Keyboard" className="absolute bottom-0 scale-125" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first pt-3">DCS</h4>
                                        <p className="text-lg text-center text-gray-600">DCS is another profile similar to cherry and OEM, being sculpted with a cylindrical typeface. The DCS profile is made by Signature Plastics, and is closely similar to cherry profile but it does have it's slight differences.</p>
                                        <p className="text-base italic text-first">Credits: Novelkeys<br />Keycaps: DCS Deadbeats</p>
                                    </div>
                                    <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/introduction_to_mechanical_keyboards" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={vileBloom} alt="HBCP Keyboard" className="absolute bottom-0 scale-110" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first">SA</h4>
                                        <p className="text-lg text-center text-gray-600">SA profile keycaps are sculpted but with a spherical typeface. They are also originally made by Signature Plastics, and are famous for being absurdly tall in height. There are also options to buy SA kits in a uniform profile as some keycap sets are made using only the third row.</p>
                                        <p className="text-base italic text-first">Credits: Qlavier<br /> Keycaps: SA Vilebloom</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/keyboard_layouts_and_sizes" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={astrolokeys} alt="TGR Jane v2 Keyboard" className="absolute -bottom-4 scale-110" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first">DSA</h4>
                                        <p className="text-lg text-center text-gray-600">DSA profile keycaps are uniform with a spherical typeface, and also originally come from Signature Plastics. These are also argueably the most popular uniform set due to the high quality sets available for them.</p>
                                        <p className="text-base italic text-first">Credits: personalloot.com<br />Keycaps: DSA Astrolokeys</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/keycaps" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={milkshake} alt="Keycult 1/60 Keyboard" className="absolute -bottom-6 scale-110" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first pt-3">KAT</h4>
                                        <p className="text-lg text-center text-gray-600">KAT profile keycaps are sculpted with a spherical typeface. These are a relatively newer profile based on the SA profile, and manufactured by Keyreative. If SA profile and OEM profile had a baby, this would be it.</p>
                                        <p className="text-base italic text-first">Credits: Candykeys<br />Keycaps: KAT Milkshake</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/keycaps" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={littlePilot} alt="Keycult 1/60 Keyboard" className="absolute -bottom-2 scale-125" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first pt-3">KAM</h4>
                                        <p className="text-lg text-center text-gray-600">KAM profile keycaps are uniform with a spherical typeface. These are essentially the uniform version of KAT keycaps, and are also made by Keyreative.</p>
                                        <p className="text-base italic text-first">Credits: kema<br />Keycaps: KAM Little Pilot</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/keycaps" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={devtty} alt="Keycult 1/60 Keyboard" className="absolute bottom-0 scale-110" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first pt-3">MT3</h4>
                                        <p className="text-lg text-center text-gray-600">MT3 profile keycaps are sculpted with a DEEP spherical typeface. These are also a new profile based on vintage IBM beam spring keycaps, and are exclusive to Massdrop, or better known as Drop now.</p>
                                        <p className="text-base italic text-first">Credits: Drop.com<br />Keycaps: MT3 /DEV/TTY</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                                        <a href="/introduction/keycaps" className="w-full h-44 relative overflow-hidden shadow-xl">
                                            <img src={ember} alt="Keycult 1/60 Keyboard" className="absolute -bottom-4 scale-125" />
                                        </a>
                                        <h4 className="text-2xl font-medium text-first pt-3">MG</h4>
                                        <p className="text-lg text-center text-gray-600">MG profile keycaps are sculpted with a spherical typeface. MG is made by MelGeek, and is based off of Topre's Hi-pro keycaps. These are also a relatively new profile, with only a handful of colorways being released.</p>
                                        <p className="text-base italic text-first">Credits: MelGeek<br />Keycaps: MG Ember</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="mb-10">
                            <h1 className="text-3xl mb-10" id="materials">Keycap Materials</h1>
                            <p className="indent-10 my-2.5 text-lg">There are two major types of plastics used to make all these different style of keycaps: ABS (Acrylonitrile Butadien Styrene) and PBT (Polubutylene Terephthalate). You may come across POM (Polyoxymethylene) keycaps, or even metal keycaps, but these are rather niche. POM keycaps have an aesthetic of
                                soft plastic that <i>almost</i> looks good enough to eat, and metal keycaps are more of a collectors item considering how expensive they are to produce.</p>
                            <p className="indent-10 my-2.5 text-lg">ABS and PBT keycaps both have their pros and cons, but it all boils down to personal preference. As long as you purchase sets of high-quality, they are bound to last you a <i>VERY</i> long time.</p>
                            <section className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <a href="/introduction/introduction_to_mechanical_keyboards" className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                                <img src={dmg} alt="GMK DMG" />
                                            </a>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: Omnitype<br />Keycaps: GMK DMG</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                                                    <span className="block xl:inline">ABS Keycaps</span>
                                                </h1>
                                                <ul className="mx-auto pl-10 text-base text-left list-disc text-gray-500 lg:text-xl md:max-w-3xl pb-5">
                                                    <li>Have crisper legends and often utilize double-shot methods</li>
                                                    <li>Can achieve a wide range of colors</li>
                                                    <li>Due to the malleable nature of ABS, it is easier to have straighter and more consistent keycaps</li>
                                                    <li>They shine easily overtime due to the characteristics of the material</li>
                                                </ul>
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
                                                <img src={crp} alt="Melody96 Keyboard" />
                                            </a>
                                            <div>
                                                <p className="text-gray-500 text-sm">Credits: Syruplabs<br />Keycaps: CRP APL-EN</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                                                    <span className="block xl:inline">PBT Keycaps</span>
                                                </h1>
                                                <ul className="mx-auto pl-10 text-base text-left list-disc text-gray-500 lg:text-xl md:max-w-3xl pb-5">
                                                    <li>Legends are often dye-sublimated, making them not as crisp as double-shot ABS keycaps</li>
                                                    <li>It is easier to offer unique designs such as different fonts or side prints</li>
                                                    <li>PBT is not as malleable as ABS, so their is a higher chance to have warped keycaps, especially spacebars</li>
                                                    <li>Their surface texture lasts a <i>LOT</i> longer than ABS, and don't shine if they are of high-quality</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                    </div>
                    <div className="mb-10">
                        <h1 className="text-3xl mb-10" id="methods">Production Methods</h1>
                        <p className="indent-10 my-2.5 text-lg">Atop of the vast variety of keycap profiles, there are quite a few different methods used in order to produce keycaps. These different production methods can directly correlate to the keycaps
                            color choices, overall quality, texture, durability, and customization posibilities.</p>
                        <ul className="mx-auto text-base text-first text-left lg:text-lg md:max-w-3xl pb-5 list-disc">
                            <li className="py-5"><strong className="text-xl">Doubleshot/Tripleshot -</strong> combines two or more plastics depending if the keycap is double or triple shot. The legend is a separate plastic that is injected into the keycap, where tripleshot is used for sublegends of another color. A unique mold is required for each specific
                                keycap. This essentially makes the legends last indefinitely as they're part of the keycap itself.</li>
                            <li className="py-5"><strong className="text-xl">Dye-sublimation -</strong> legends are printed onto the keycap surface, but in such a way that you can think of it as a tattoo. Heat is used to sink the ink into the keycap, making it also last indefinitely.</li>
                            <li className="py-5"><strong className="text-xl">Reverse Dye-sublimation -</strong> essentially the reverse of dye-sublimation. Instead of printing out the legends themselves, reverse dye-sublimation inks the whole keycap, leaving an outline for the legend. This is mostly used for dark-based sets.</li>
                            <li className="py-5"><strong className="text-xl">Pad Printing -</strong> uses pads dipped in ink that are then transfered onto the keycap. This method is most popular on mass produced keyboards, and it looks as if a sticker was placed on each keycap.</li>
                            <li className="py-5"><strong className="text-xl">Laser Etching/Engraving -</strong> legends are physically cut into/off of the keycap surface. This can mostly be found on backlit keycaps or some POM keycaps and is easy for dirt to get into these crevasses.</li>
                            <li className="py-5"><strong className="text-xl">UV Printing -</strong> utilizes UV lights to cure the legends or whatever design onto the keycap. This can also be thought of as a sticker placed on the keycap surface.</li>
                        </ul>
                        <p className="indent-10 my-2.5 text-lg">There are definitely a few of other production methods that are not as common, and in today's keyboard world, most keycaps you will probably be considering will be made either using
                            double/tripleshot methods or dye-sublimation methods, as they are proven to last the longest and are preferred by all enthusiasts alike. Some of the other production methods have gotten better with today's technologies, and
                            may see some more action down the road. </p>
                        <div className="my-5 flex flex-wrap justify-center">
                            <img src={blanks} alt="GMK Darling Keycaps" />
                            <p className="text-base italic">There are also blank keycaps with no legends or designs whatsoever. These are usually preferred for a super minimal look or for split ergonomic keyboards that often utilize layers.</p>
                            <p className="text-sm text-gray-600">Credits: Alexotos<br />Keycaps: Keyreative Blanks</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h1 className="text-3xl mb-10" id="naming">Keysets and Naming</h1>
                        <p className="indent-10 my-2.5 text-lg">When browsing for keycaps, you may come across some questions as to what exactly are you looking for. The first important thing to consider when purchasing keysets are its <i>kits</i>. These are essentially different packages you can purchase for your specific needs regarding
                            keycap compatibility. </p>
                        <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5 py-10">
                            <div className="flex flex-wrap items-stretch sm:-mx-3">
                                <div className="w-full md:w-1/2 md:px-5">
                                    <div>
                                        <img src={base} alt="Ikki68 Keyboard" />
                                    </div>
                                    <div>
                                        <p className="text-lg">Base: the main keyset, meant to cover most conventional boards out there. Custom keysets will usually offer great coverage for whatever modern layout there is.</p>
                                        <p className="text-gray-500 text-sm">Credits: Omnitype<br />Keycaps: GMK Botanical R2</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 md:px-5">
                                    <div>
                                        <img src={extension} alt="Ikki68 Keyboard" />
                                    </div>
                                    <div>
                                        <p className="text-lg">Extension: the child kits, meant for additional coverage for more unique layouts or further customization. Depending on the designer, different kits may be offered to suit different needs.</p>
                                        <p className="text-gray-500 text-sm">Credits: Omnitype<br />Keycaps: GMK Botanical R2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="indent-10 my-2.5 mb-10 text-lg">You may also come across all-in-one kits. These are becoming more popular with in-stock keysets as the keyboard world grows larger by the day. As these keysets aren't being offered in a group-buy, these companies will 
                        try to offer as much layout-compatiblity as possible with the most popular keyboard layouts to offer a high-quality, cost-effective solution.</p>
                        <p className="indent-10 my-2.5 mb-10 text-lg">When it comes to how keycaps are named, they usually start out with either the manufacturer's name or the profile's name, followed by the name of the set itself. When a manufacturer's name is used, they often exclusively offer one keycap profile and so you will be able to know which profile that is.<br/>Some examples include:</p>
                        <ul className="mx-auto text-base text-first text-left lg:text-lg md:max-w-3xl pb-5 list-disc">
                            <li className="py-2"><strong className="text-xl">SA Bliss -</strong> SA profile, with Bliss being the name of the keyset/theme.</li>
                            <li className="py-2"><strong className="text-xl">KAT Milkshake -</strong> KAT profile, with Milkshake being the name of the keyset/theme.</li>
                            <li className="py-2"><strong className="text-xl">GMK Laser-</strong> GMK is the keycap manufacturer, and they exclusively make cherry profile keycaps. Laser is the name of the keyset/theme.</li>
                            <li className="py-5"><strong className="text-xl">ePBT Dreamscape -</strong> ePBT is the keycap manufactuerer, and they exclusively make cherry profile keycaps. Dreamscape is the name of the keyset/theme.</li>
                        </ul>
                        <p className="text-left my-2.5 mb-10 text-lg">There are also some common abbreviations when it comes to keyset names:</p>
                        <ul className="mx-auto text-base text-first text-left lg:text-lg md:max-w-3xl pb-5 list-disc">
                            <li className="py-2"><strong className="text-xl">WoB -</strong> White on Black. This refers to white legends on a black base.</li>
                            <li className="py-2"><strong className="text-xl">BoW-</strong> Black on White. This refers to black legends on a white base. </li>
                            <li className="py-2"><strong className="text-xl">R2/R#-</strong> Round 2 or Round #. This refers to the iteration of the keyset after its initial successful run.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <h1 className="text-4xl tracking-tight text-center text-first mb-8">Keyboard Basic Chapters</h1>
                    <div className="grid grid-cols-3 gap-8 mt-10 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0 text-center">
                        <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <a href="/introduction/introduction_to_mechanical_keyboards" className="w-full h-44 relative overflow-hidden rounded-m shadow-xl sm:rounded-xl">
                                <img src={iron165} alt="Iron165 Keyboard" className="absolute bottom-0 xl:-bottom-6 scale-125 xl:scale-100" />
                            </a>
                            <h4 className="text-2xl font-medium text-first">Introduction to Mechanical Keyboards</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <a href="/introduction/keyboard_layouts_and_sizes" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={tgrAlice} alt="TGR Alice Keyboard" className="absolute bottom-0 scale-125 xl:scale-100" />
                            </a>
                            <h4 className="text-2xl font-medium text-first">Keyboard Layouts and Sizes</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <a href="/introduction/keycaps" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={keycaps} alt="GMK Noel and GMK Peach Blossom" className="absolute bottom-0 scale-125 xl:scale-100" />
                            </a>
                            <h4 className="text-2xl font-medium text-first pt-3">Keycaps</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <a href="/introduction/switches" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={alpaca} alt="Alpaca Switches" className="absolute bottom-0 scale-125 xl:scale-110" />
                            </a>
                            <h4 className="text-2xl font-medium text-first">Switches</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <a href="introduction/stabilizers" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src={stabs} alt="C3 Stabilizers" className="absolute -bottom-6" />
                            </a>
                            <h4 className="text-2xl font-medium text-first">Stabilizers</h4>
                        </div>
                        <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <a href="/introduction/community" className="w-full h-44 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl ">
                                <img src={meetup} alt="Keyboard Meetup" className="absolute bottom-0 scale-125 xl:scale-100" />
                            </a>
                            <h4 className="text-2xl font-medium text-first">Keyboard Community</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 py-12 bg-white md:px-0 text-first">
                <div className="container max-w-7xl px-8 mx-auto xl:px-5 text-right">
                    <a href="/introduction/switches" className="inline-flex items-center w-full px-6 py-3 text-xl font-medium  text-second bg-first md:px-3 md:w-auto rounded-xl lg:px-5 hover:bg-second hover:text-first focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-second">Switches ➜</a>
                </div>
            </section>

        </div>
    )
}

export default Keycaps;
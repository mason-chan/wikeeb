import iron165 from '../img/iron165.jpg';
import space65 from '../img/space65.jpg';
import ikki68 from '../img/ikki68.jpg';
import sat75 from '../img/sat75.jpg';
import tgrAlice from '../img/tgralice.jpg';
import keycaps from '../img/keycaps.jpg';
import alpaca from '../img/alpaca.jpeg';
import stabs from '../img/c3_stabs.jpg';
import meetup from '../img/meetup.jpg';


const Intro = () => {
    return (
        <div>
            <section className="px-2 py-12 bg-white text-first md:px-0">
                <div className="container flex flex-col items-center max-w-7xl px-8 mx-auto xl:px-5">
                    <h1 className="text-5xl font-bold tracking-tight text-center pb-10">Introduction to Mechanical Keyboards</h1>

                </div>
            </section>

            <section className="px-2 py-12 md:px-0 bg-white text-first">
                <div className="w-full mx-auto space-y-5 sm:py-8 md:py-12 sm:pace-y-8 md:space-y-16 max-w-7xl">
                    <div className="flex flex-col items-center sm:px-5 md:flex-row">
                        <div className="w-full md:w-1/2">
                            <img src={iron165} alt="Iron165 Keyboard" />
                            <p className="text-gray-500 text-sm">Credits: @JiFen via zFrontier</p>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">

                                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Table of Contents</h1>
                                <ul className="pl-16 text-lg list-disc">
                                    <li><a href="#what" className="underline">What is a Mechanical Keyboard?</a></li>
                                    <li><a href="#why" className="underline">Why use a Mechanical Keyboard?</a></li>
                                    <li><a href="#components" className="underline">What Makes up a Mechanical Keyboard?</a></li>
                                    <li><a href="#preface" className="underline">Before Moving Forward...</a></li>
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
                            <h1 className="text-3xl mb-10" id="what">What is a Mechanical Keyboard?</h1>
                            <p className="indent-10 my-2.5 text-lg">A mechanical keyboard is basically a keyboard that utilizes mechanical switches in order to register a key press.
                                You may already have experience using one or you may be using a regular membrane keyboard and are just looking to finally upgrade to something more premium.</p>
                        </div>
                        <div className="my-5">
                            <img src={space65} alt="Space65 Keyboard" />
                            <p className="text-base">Space65 Cyber Voyager by Gray Studio. Keycaps are GMK 8008. This keyboard's aesthetics are what made it so popular due to its unique design.</p>
                            <p className="text-sm text-gray-600">Credits: Alexotos via OldCat post on drop.com</p>
                        </div>
                        <div className="my-10">
                            <h1 className="text-3xl mb-10" id="why">Why use a Mechanical Keyboard?</h1>
                            <p className="indent-10 my-2.5 text-lg">Mechanical Keyboards offer several benefits whether it be the customizability in aesthetics or the technical and performance aspect of the keyboard that are just not available
                                with a regular membrane keyboard. A lot of people are drawn to the custom mechanical keyboard world because of the pure customizability that a mechanical keyboard can have. With the amount of variety that exists
                                in today's hobby, you will definitely be able to create a keyboard that is tailored to your needs and preferences.</p>
                        </div>
                        <div className="my-5">
                            <img src={sat75} alt="Satisfaction75 Keyboard" />
                            <p className="text-base">Satisfaction75 by Cannonkeys. Keycaps are GMK Artic. This board is iconic due to the o-led screen and rotary encoder knob.</p>
                            <p className="text-sm text-gray-600">Credits: Cannonkeys via cannonkeys.com</p>
                        </div>
                        <div className="flex flex-wrap items-stretch text-left">
                            <div className="w-full md:w-1/2 md:px-5 my-10">
                                <h1 className="text-3xl mb-10">Aesthetic Customizations</h1>
                                <p className="my-2.5 text-lg">Each part of a mechanical keyboard can be customized to fit a certain theme, look or feel.</p>
                                <ul className="list-disc px-10 text-lg">
                                    <li className="py-2"><strong className="text-xl">Materials -</strong> there are a lot of different materials when it comes to what a keyboard is made out of. From plastic keyboards to full aluminum boards,
                                        each one has its own vibe and feel that can affect quite a few aspects of the board.</li>
                                    <li className="py-2"><strong className="text-xl">Size -</strong> there are many different sizes to choose from depending on your specific needs. Whether you need a numpad or f-row, these options are available in different forms to fit your aesthetic.</li>
                                    <li className="py-2"><strong className="text-xl">Aesthetics -</strong> keyboards and other components often come in a wide range of colors as well as design philosophies. You can easily build a super minimalistic keyboard with single tones or go crazy with a keyboard
                                        that has unique design elements and choose some bright colors to make your keyboard the center of attention on your desk.</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 md:px-5 my-10">
                                <h1 className="text-3xl mb-10">Technical Customizations</h1>
                                <p className="my-2.5 text-lg">You can have a keyboard that is programmed and tailored to whatever tasks you need to accomplish.</p>
                                <ul className="list-disc px-10 text-lg">
                                    <li className="py-2"><strong className="text-xl">Programmability -</strong> many of today's mechanical keyboards have the ability to be programmed to whatever needs the user may have. Each key can be changed to whatever the user desires, and layers can be made to access hidden keys on the fly.</li>
                                    <li className="py-2"><strong className="text-xl">Ergonomics -</strong> besides coming in a wide array of sizes, mechanical keyboards also come in a variety of layouts. You can find keyboards from your traditional staggered layout all the way to split ortholinear keyboards.</li>
                                    <li className="py-2"><strong className="text-xl">Longevity -</strong> many of the high end components of mechanical keyboards are built with high-quality materials to preserve it's functionality and appearance over long periods of use. Your keycap legends won't fade away and your keyboard won't change color over time.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-10">
                            <h1 className="text-3xl mb-10" id="components">What Makes up a Mechanical Keyboard?</h1>
                            <p className="indent-10 my-2.5 text-lg">Mechanical keyboards are rather straight-forward when it comes to its components and assembly. There are only six main components that are needed in order to put together your own mechanical keyboard.
                                These components include: </p>
                            <div className="px-2 py-12 bg-white md:px-0">
                                <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
                                    <div className="flex flex-wrap items-stretch sm:-mx-3">
                                        <div className="w-full md:w-1/2 md:px-5">
                                            <div>
                                                <img src={ikki68} alt="Ikki68 Keyboard" />
                                            </div>
                                            <div>
                                                <p className="text-base italic">Ikki68 by Wuque Studio. Here we can see the top and bottom case, plate, plate foam, PCB, and silicone case dampener.</p>
                                                <p className="text-gray-500 text-sm">Credits: Wuque Studio via cannonkeys.com</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-3 flex items-center pt-10 md:pt-0 text-left">
                                            <div className="w-full pb-6 space-y-6 md:max-w-md lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pl-5 md:pb-0">
                                                <ul className="mx-auto text-base text-first  lg:text-lg md:max-w-3xl pb-5 list-disc">
                                                    <li><strong className="text-xl">The Case -</strong> the shell or body of the mechanical keyboard</li>
                                                    <li><strong className="text-xl">The Plate -</strong> holds switches into place and is usually the contact point between the internals and the case</li>
                                                    <li><strong className="text-xl">The PCB (Printed Circuit Board) -</strong> the brains of the mechanical keyboard</li>
                                                    <li><strong className="text-xl">The Switches -</strong> the mechanism that creates the circuit connection to trigger key presses</li>
                                                    <li><strong className="text-xl">The Stabilizers -</strong> provides stability to the larger keys</li>
                                                    <li><strong className="text-xl">The Keycaps -</strong> the contact between your fingers and the keyboard</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="indent-10 my-2.5 text-lg">Many mechanical keyboards consist of these six components. There are some exceptions as some keyboards can be built without some of these main components, like the plate or stabilizers. But for now you will most likely need all six to put together your custom mechanical keyboard. Many of the custom kits out there
                                usually only come with the case, plate, and pcb, as well as the necessary hardware to assembly the keyboard together. You are expected to purchase your own switches, stabilizers, and keycaps unless other wise stated by the designer.</p>
                        </div>

                        <div className="mt-10">
                            <h1 className="text-3xl mb-10" id="preface">Before Moving Forward...</h1>
                            <p className="indent-10 my-2.5 text-lg">If you think going down the route of building your own custom mechanical keyboard is for you, there are some drawbacks that a lot of newcomers may find daunting at first.</p>
                            <p className="indent-10 my-2.5 text-lg">This hobby will teach you about <strong>PATIENCE</strong>. Although as the hobby is constantly growing, there are a lot more in-stock kits that are readily available for those who are just starting out or do not like waiting.
                                But chances are if you end up wanting to buy a nice premium board, you'll usually end up waiting several months, and sometimes even more than a year before the board is finished with production and is finally shipped to you. This can definitely be said for custom keycaps as well. These usually
                                take the longest to fulfill as there is a much larger order quantity compared to keyboard kits. We will definitely touch more upon this topic in later sections, but if you are ready to dive into the giant rabbit hole that is mechanical keyboards, then welcome! You can continue learning about the rest of the keyboard basics here at WiKeeb!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container max-w-6xl mx-auto">
                <h1 className="text-4xl tracking-tight text-center text-first mb-8">Keyboard Basic Chapters</h1>
                    <div className="grid grid-cols-3 gap-8 mt-10 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0 text-center">
                        <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl">
                            <a href="/introduction/introduction_to_mechanical_keyboards" className="w-full h-44 relative overflow-hidden rounded-m shadow-xl sm:rounded-xl">
                                <img src={iron165} alt="Iron165 Keyboard" className="absolute -bottom-6 sm:-bottom-8 xs:-bottom-16 lg:bottom-0 xl:-bottom-6 scale-100 lg:scale-125 xl:scale-100" />
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
                    <a href="/introduction/keyboard_layouts_and_sizes" className="inline-flex items-center w-full px-6 py-3 text-xl font-medium  text-second bg-first md:px-3 md:w-auto rounded-xl lg:px-5 hover:bg-second hover:text-first focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-second">Keyboard Layouts and Sizes ➜</a>
                </div>
            </section>

        </div>
    )
}

export default Intro;
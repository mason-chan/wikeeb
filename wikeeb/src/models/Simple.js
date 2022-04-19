import Carousel from "react-multi-carousel";
import iron165 from '../img/iron165.jpg';
import tgrAlice from '../img/tgralice.jpg';
import gmkfinerthings from '../img/gmkfinerthings.jpg';
import alpaca from '../img/alpaca.jpeg';
import stabs from '../img/c3_stabs.jpg';
import meetup from '../img/meetup.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisbilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisbilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisbilityGutter: 30,
  }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      deviceType={deviceType}
      responsive={responsive}
      autoPlay={false}
      shouldResetAutoplay={false}
      className="container max-w-7xl mx-auto mb-10 -mt-16"
      slidesToSlide={1}
      keyBoardControl={true}
      swipeable={false}
      draggable={false}
      partialVisbile={true}
      

    >
      <div className="relative flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
        <a href="/introduction/introduction_to_mechanical_keyboards" className="w-full h-52 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <img src={iron165} alt="Iron165 Keyboard" className="absolute sm:-bottom-8" />
        </a>
        <h4 className="text-2xl font-medium text-first">Introduction to Mechanical Keyboards</h4>

      </div>
      <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
        <a href="/introduction/keyboard_layouts_and_sizes" className="w-full h-52 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <img src={tgrAlice} alt="TGR Alice Keyboard" className="absolute sm:bottom-0" />
        </a>
        <h4 className="text-2xl font-medium text-first">Keyboard Layouts and Sizes</h4>

      </div>
      <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
        <a href="/introduction/keycaps" className="w-full h-52 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <img src={gmkfinerthings} alt="Iron165 Keyboard" className="absolute xl:-bottom-3"/>
        </a>
        <h4 className="text-2xl font-medium text-first">Keycaps</h4>

      </div>
      <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
        <a href="/introduction/switches" className="w-full h-52 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <img src={alpaca} alt="Iron165 Keyboard" className="absolute xl:bottom-0"/>
        </a>
        <h4 className="text-2xl font-medium text-first">Switches</h4>

      </div>
      <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
        <a href="introduction/stabilizers" className="w-full h-52 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <img src={stabs} alt="Iron165 Keyboard" className="absolute xl:bottom-0"/>
        </a>
        <h4 className="text-2xl font-medium text-first">Stabilizers</h4>

      </div>
      <div className="flex flex-col items-center justify-start col-span-3 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
        <a href="/introduction/community" className="w-full h-52 relative overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <img src={meetup} alt="Iron165 Keyboard" className="absolute xl:bottom-0"/>
        </a>
        <h4 className="text-2xl font-medium text-first">Keyboard Community</h4>

      </div>
    </Carousel>
  );
};

export default Simple;
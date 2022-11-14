import Image from 'next/image';
import React from 'react';
import laptopImg from '../public/assets/laptop-unsplash.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            about
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            Creative, detail-oriented, Front-End Engineer and problem solver
            with professional experience in building and debugging JavaScript
            components. I enjoy working with new frameworks and am always eager
            to learn more. I am well-versed in JavaScript, HTML, CSS, and
            React/Next.
          </p>
          <p className="py-2 text-gray-600">
            When looking back growing up in Brazil, I don&apos;t recall a time
            where a computer was not in front of me. I remember always wanting
            to be able to type faster, understand how the command line worked
            and how websites were being built. I was also very much into gaming
            and would always default to my computer for any task that I needed
            to accomplish Growing up in Brazil wasn&apos;t dificult, but
            opportunities like there are in America are not as common, so my mom
            decided to move out to California when I was thirteen. I came with
            her, bringing my dream of working with technology and computers a
            bit closer to reality.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my latest projects!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={laptopImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

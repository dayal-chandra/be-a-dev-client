import React from "react";
import AutoPlaySlider from "./AutoPlaySlider";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 max-w-7xl mx-auto">
      <div className="w-full">
        <h1>
          <span className="text-3xl font-semibold">Learn</span>
          <br />{" "}
          {/* <span className="text-5xl font-bold text-orange-400">
            Web Development
          </span> */}
          <span className="text-orange-500 text-5xl font-bold pt-2">
            <Typewriter
              words={[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Tailwind",
                "MERN Stack",
                "Next.js",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-[18px] pt-2">
          Master the fundamental of web development with our interactive
          courses.
        </p>
        <button className="btn mt-4 bg-orange-400 text-[16px] text-black hover:bg-transparent hover:text-orange-400 border border-orange-400">
          Browse Courses
        </button>
      </div>
      <div className="w-11/12 md:w-full">
        <AutoPlaySlider></AutoPlaySlider>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoCalendarNumber } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="pt-20">
      <h1 data-aos="fade-up" className="text-3xl text-center font-bold mb-3">
        How It Works
      </h1>
      <p data-aos="fade-up" className="text-center pb-4">
        Explore all features and Master the fundamental of Web Development with
        BeAdev.
      </p>
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-orange-400 rounded-2xl p-5 flex flex-col md:flex-row gap-5 justify-start items-center hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#ffa726]">
          <div>
            <IoCalendarNumber size={75} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold pb-2">Learn Everyday</h1>
            <p>Learn, Practice and stay with the flow to achieve your goal.</p>
          </div>
        </div>
        <div className="border border-orange-400 rounded-2xl p-5 flex flex-col md:flex-row gap-5 justify-start items-center hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#ffa726]">
          <div>
            <GiProgression size={75} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold pb-2">Track your progress</h1>
            <p>Monitor your progress and stay motivated.</p>
          </div>
        </div>
        <div className="border border-orange-400 rounded-2xl p-5 flex flex-col md:flex-row gap-5 justify-start items-center hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#ffa726]">
          <div>
            <FaClipboardList size={75} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold pb-2">Test your knowledge</h1>
            <p>Take guesses to evaluate your understanding of material</p>
          </div>
        </div>
        <div className="border border-orange-400 rounded-2xl p-5 flex flex-col md:flex-row gap-5 justify-start items-center hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#ffa726]">
          <div>
            <TbCertificate size={85} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold pb-2">Get a Certificate</h1>
            <p>
              After completing the course we will reward you with the best
              Endorsement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

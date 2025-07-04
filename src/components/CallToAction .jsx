import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section data-aos="fade-up" className="pt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Become a Developer?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of students learning web development step by step with
          Be-A-Dev. Build real projects, track your progress, and earn
          certificates.
        </p>
        <button className="btn mt-4 bg-orange-400 text-[18px] p-6 rounded-full text-black hover:bg-transparent hover:text-orange-400 border border-orange-400">
          Get Started Now <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

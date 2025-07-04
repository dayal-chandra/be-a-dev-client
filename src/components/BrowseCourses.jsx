import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BrowseCourses = () => {
  return (
    <div>
      <button className="btn mt-4 bg-orange-400 text-[18px] p-6 rounded-full text-black hover:bg-transparent hover:text-orange-400 border border-orange-400">
        Browse Courses <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default BrowseCourses;

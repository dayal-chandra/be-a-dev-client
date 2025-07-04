import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const BrowseCourses = () => {
  return (
    <div>
      <Link to="/courses">
        <button className="btn mt-4 bg-orange-400 text-[18px] p-6 rounded-full text-black hover:bg-transparent hover:text-orange-400 border border-orange-400">
          Browse Courses <FaArrowRight size={20} />
        </button>
      </Link>
    </div>
  );
};

export default BrowseCourses;

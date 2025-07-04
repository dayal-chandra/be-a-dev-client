import React from "react";
import CountUp from "react-countup";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaCertificate,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate size={40} className="text-orange-400" />,
    number: 1000,
    suffix: "+",
    label: "Successful Students",
  },
  {
    icon: <FaLaptopCode size={40} className="text-orange-400" />,
    number: 50,
    suffix: "+",
    label: "Real-world Projects",
  },
  {
    icon: <FaCertificate size={40} className="text-orange-400" />,
    number: 500,
    suffix: "+",
    label: "Certificates Issued",
  },
  {
    icon: <FaAward size={40} className="text-orange-400" />,
    number: 95,
    suffix: "%",
    label: "Student Satisfaction Rate",
  },
];

const StatsSection = () => {
  return (
    <section className=" pt-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Our Impact at Be<span className="text-orange-400">A</span>Dev
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-orange-400 shadow-md rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition transform duration-300 hover:shadow-[0_0_15px_#ffa726]"
            >
              {stat.icon}
              <h3 className="text-3xl font-extrabold my-2">
                <CountUp end={stat.number} duration={2} />
                {stat.suffix}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

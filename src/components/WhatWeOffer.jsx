import React from "react";
import BrowseCourses from "./BrowseCourses";

const WhatWeOffer = () => {
  const offerings = [
    {
      id: 1,
      title: "Career-focused Learning",
      description:
        "Learn the skills that companies actually look for, with a focus on real-world applications.",
    },
    {
      id: 2,
      title: "Get Job-ready Projects",
      description:
        "Build portfolio-worthy projects that showcase your abilities and prepare you for real opportunities.",
    },
    {
      id: 3,
      title: "Personalized Feedback",
      description:
        "Receive direct, tailored feedback from mentors to help you improve and grow faster.",
    },
    {
      id: 4,
      title: "Active Community Support",
      description:
        "Join a supportive community of learners and experts, ready to help you overcome challenges anytime.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto pt-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">What We Offer</h2>
      <p className="mb-12 max-w-xl mx-auto">
        We offer more than just courses — gain hands-on experience, build real
        projects, get expert feedback, and join a supportive community to
        accelerate your growth.
      </p>

      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offerings.map((course, index) => (
          <div
            key={index}
            className="border border-orange-400 rounded-xl overflow-hidden shadow-sm  flex flex-col hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#ffa726]"
          >
            <div className="h-8 rounded-t-xl bg-orange-400" />
            <div className="p-5 flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className=" mb-4">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <BrowseCourses></BrowseCourses>
      </div>
    </section>
  );
};

export default WhatWeOffer;

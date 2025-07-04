import React from "react";
import BrowseCourses from "./BrowseCourses";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "HTML",
      description: "Learn the basics of web development with HTML",
      level: "Beginner",
    },
    {
      id: 2,
      title: "CSS",
      description: "Learn the basics of web development with CSS",
      level: "Beginner",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Learn the fundamentals of JavaScript programming language",
      level: "Beginner",
    },
    {
      id: 4,
      title: "React",
      description: "Build dynamic web applications using React",
      level: "Beginner",
    },
  ];

  return (
    <section data-aos="fade-up" className="max-w-7xl mx-auto pt-20 text-center">
      <h2 className="text-3xl font-bold mb-3">Courses</h2>
      <p className="mb-12 max-w-xl mx-auto">
        Explore our beginner-friendly courses to kickstart your journey in web
        development. Learn at your own pace and build practical skills.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-orange-400 rounded-xl overflow-hidden shadow-sm  flex flex-col hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#ffa726]"
          >
            <div className="h-8 rounded-t-xl bg-orange-400" />
            <div className="p-5 flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className=" mb-4">{course.description}</p>
              <span className="px-3 py-1 border rounded-md text-sm w-auto self-start">
                {course.level}
              </span>
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

export default CoursesSection;

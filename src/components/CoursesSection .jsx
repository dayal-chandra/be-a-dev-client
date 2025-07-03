import React from "react";

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
    <section className="max-w-7xl mx-auto px-5 md:px-0 py-16">
      <h2 className="text-3xl font-bold mb-8">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-orange-400 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-8 rounded-t-xl bg-orange-400" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className=" mb-4">{course.description}</p>
              <span className="px-3 py-1 border rounded-md text-sm">
                {course.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;

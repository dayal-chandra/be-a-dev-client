import React, { useEffect } from "react";

const Courses = () => {
  useEffect(() => {
    document.title = "Be-A-Dev | Courses";
  });

  const courses = [
    {
      id: 1,
      title: "HTML",
      description: "Learn the foundation of web development with HTML.",
      level: "Beginner",
      fee: "$49",
      duration: "2 Weeks",
    },
    {
      id: 2,
      title: "CSS",
      description: "Style beautiful and responsive web pages using CSS.",
      level: "Beginner",
      fee: "$59",
      duration: "3 Weeks",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Master interactivity and logic with JavaScript.",
      level: "Intermediate",
      fee: "$99",
      duration: "4 Weeks",
    },
    {
      id: 4,
      title: "React",
      description: "Build modern web apps using React library.",
      level: "Intermediate",
      fee: "$129",
      duration: "5 Weeks",
    },
  ];
  const upcomingCourses = [
    {
      id: 1,
      title: "MongoDB",
      description:
        "Learn to work with NoSQL databases and manage data efficiently with MongoDB.",
      level: "Intermediate",
      fee: "$79",
      duration: "3 Weeks",
    },
    {
      id: 2,
      title: "Node.js",
      description:
        "Build scalable backend applications using Node.js and Express.",
      level: "Intermediate",
      fee: "$109",
      duration: "4 Weeks",
    },
    {
      id: 3,
      title: "TypeScript",
      description:
        "Enhance your JavaScript skills with TypeScript for type-safe, large-scale applications.",
      level: "Advanced",
      fee: "$129",
      duration: "4 Weeks",
    },
    {
      id: 4,
      title: "Next.js",
      description:
        "Master full-stack web development with Next.js for building fast, SEO-friendly React applications.",
      level: "Advanced",
      fee: "$149",
      duration: "5 Weeks",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-bold pt-8 md:pt-12">
          All Courses
        </h1>
        <p className="text-center p-3">
          Choose any course to learn from the scratch.
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-orange-400  shadow-md rounded-2xl p-6  flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="mb-4">{course.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full mb-4">
                  {course.level}
                </span>
              </div>
              <div className="mt-4 text-left">
                <p className=" font-medium">
                  Fee: <span className="text-green-600">{course.fee}</span>
                </p>
                <p className=" font-medium">
                  Duration:{" "}
                  <span className="text-blue-600">{course.duration}</span>
                </p>
              </div>
              <button className="mt-6 bg-orange-400 hover:bg-transparent text-black hover:text-orange-400 border border-orange-400 font-medium py-2 px-4 rounded-xl transition duration-300">
                Course Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl md:text-4xl text-center font-bold pt-8 md:pt-16">
          Up Coming Courses
        </h1>
        <p className="text-center p-3">
          Very soon we are going to launce these courses. Till then make a
          strong understanding on fundamentals.
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {upcomingCourses.map((course) => (
            <div
              key={course.id}
              className="border border-orange-400  shadow-md rounded-2xl p-6  flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="mb-4">{course.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full mb-4">
                  {course.level}
                </span>
              </div>
              <div className="mt-4 text-left">
                <p className=" font-medium">
                  Fee: <span className="text-green-600">{course.fee}</span>
                </p>
                <p className=" font-medium">
                  Duration:{" "}
                  <span className="text-blue-600">{course.duration}</span>
                </p>
              </div>
              <button className="mt-6 bg-orange-400 hover:bg-transparent text-black hover:text-orange-400 border border-orange-400 font-medium py-2 px-4 rounded-xl transition duration-300">
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

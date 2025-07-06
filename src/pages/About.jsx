import { FaLaptopCode, FaRocket, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-center max-w-3xl mx-auto text-lg mb-12">
        At{" "}
        <span className="text-xl font-bold">
          Be<span className="text-orange-400">A</span>Dev
        </span>
        , we help aspiring developers kickstart their careers with hands-on
        learning, real-world projects, and career-focused resources. Whether
        you're a complete beginner or looking to sharpen your skills, we're here
        to guide your journey into tech.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 shadow-orange-300 border border-orange-400 rounded-2xl hover:shadow-xl transition">
          <FaLaptopCode className="text-5xl text-orange-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
          <p>
            We believe in project-based learning. Gain real skills by building
            projects that prepare you for industry demands.
          </p>
        </div>

        <div className="p-6 shadow-orange-300 border border-orange-400 rounded-2xl hover:shadow-xl transition">
          <FaRocket className="text-5xl text-orange-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
          <p>
            Our goal is to get you job-ready. With our curated resources and
            guided learning paths, you can confidently step into your developer
            career.
          </p>
        </div>

        <div className="p-6 shadow-orange-300 border border-orange-400 rounded-2xl hover:shadow-xl transition">
          <FaUsers className="text-5xl text-orange-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Support</h3>
          <p>
            Join a supportive community of learners and mentors who are always
            ready to share knowledge and help you grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

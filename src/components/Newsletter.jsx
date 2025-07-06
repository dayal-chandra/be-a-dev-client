import React from "react";

const Newsletter = () => {
  return (
    <section
      data-aos="fade-up"
      className="mt-20 py-20 px-4 border border-orange-400 rounded-2xl"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated!</h2>
        <p className=" mb-6">
          Subscribe to our newsletter and get the latest updates on new courses,
          exclusive tips, and Be-A-Dev announcements.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="btn bg-orange-400 text-[18px] p-6 rounded-full text-black hover:bg-transparent hover:text-orange-400 border border-orange-400"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

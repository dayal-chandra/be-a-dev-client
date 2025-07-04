import React from "react";
import signup from "/register.png";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div>
      <div className="hero-content px-0 py-12 flex flex-col md:flex-row  w-full">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center lg:text-left w-full md:w-1/2"
        >
          <img className="w-full" src={signup} alt="login photo" />
        </motion.div>

        <div className="card bg-orange-100 w-full md:w-1/2 shadow-2xl ">
          <div className="card-body">
            <h1 className="text-2xl text-black font-semibold text-center">
              Sign Up
            </h1>
            <fieldset className="fieldset">
              <label className="label text-[18px] text-black">Name</label>
              <input
                type="text"
                className="input w-full bg-gray-50 text-black"
                placeholder="Name"
              />
              <label className="label text-[18px] text-black">Email</label>
              <input
                type="email"
                className="input w-full bg-gray-50 text-black"
                placeholder="Email"
              />
              <label className="label text-[18px] text-black">Photo URL</label>
              <input
                type="url"
                className="input w-full bg-gray-50 text-black"
                placeholder="Photo URL"
              />
              <label className="label text-[18px] text-black">Password</label>
              <input
                type="password"
                className="input w-full bg-gray-50 text-black"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover text-[16px] text-black">
                  Forgot password?
                </a>
              </div>
              <button className="btn text-black hover:text-orange-400 bg-orange-400 hover:bg-transparent border border-orange-400 mt-4">
                Sign Up
              </button>
              <div className="text-[16px] text-black py-2">
                Already have an account?{" "}
                <Link to="/signup" className="text-orange-400">
                  Login
                </Link>
              </div>
              <div className="flex items-center w-full">
                <hr className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr className="w-full dark:text-gray-600" />
              </div>

              <button className="btn bg-orange-400 text-black border border-orange-400 hover:text-orange-400 hover:bg-transparent">
                <FcGoogle size={25} />
                Continue with Google
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

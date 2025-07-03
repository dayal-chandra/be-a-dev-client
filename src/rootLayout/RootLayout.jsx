import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="max-w-7xl mx-auto px-5 md:px-0 mt-16 min-h-[calc(100vh-289px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;

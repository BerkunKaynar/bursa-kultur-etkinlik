import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          style={{ height: "70px", width: "110px", marginRight: "15px" }}
          src="/assets/bursa-logo.png"
          alt=""
        />
        <Link
          to={"/"}
          className="font-semibold font-style: italic text-xl tracking-tight"
        >
          N-N Bursa
        </Link>
      </div>
      <div className="block lg:hidden"></div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <Link
            to={"/"}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Ana Sayfa
          </Link>
          <Link
            to={"eglence"}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Eğlence
          </Link>
          <Link
            to={"kultur"}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Kültür
          </Link>
          <Link
            to={"sanat"}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Sanat
          </Link>
        </div>
      </div>
    </nav>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const user = useUser();
  return (
    <>
      <header className="text-gray-600 bg-gray-300 body-font">
        <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex gap-17 title-font font-medium items-center md:mb-0 cursor-pointer"
          >
            <span className="text-black ml-3 text-xl capitalize">
              Thinkboard
            </span>
          </Link>

          <Link
            to={"/"}
            className="flex ml-20 mr-10 title-font font-medium items-center md:mb-0 cursor-pointer"
          >
            <span className="text-black ml-3 text-xl capitalize">home</span>
          </Link>

          <Link
            to={"/create-note"}
            className="flex gap-17 title-font font-medium items-center md:mb-0 cursor-pointer "
          >
            <button className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded">
              <FaPlus className="" />
              new note
            </button>
          </Link>

          {/* yaha per link nai use karna */}

          {/* user hai toh dashboard button show karna */}

          <Link
            to={"/notes/:id"}
            className="flex gap-17  mr-20 title-font font-medium items-center md:mb-0 cursor-pointer"
          >
            <span className="text-black ml-3 text-xl capitalize">note</span>
          </Link>

          <button
            onClick={openSignIn}
            type="button"
            className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded"
          >
            {user.isSignedIn ? <UserButton /> : "sign in"}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

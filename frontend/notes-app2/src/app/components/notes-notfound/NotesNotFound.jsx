import React from "react";
import { Link } from "react-router-dom";
import { FaNoteSticky } from "react-icons/fa6";
const NotesNotFound = () => {
  return (
    <>
      <div>Notes NotFound component</div>
      <div className="">
        <div className="">
          <FaNoteSticky />
        </div>
        <div className="heading">
          <h1> no notes yet</h1>
        </div>

        <div className="subtitle">
          <p>ready to organize your notes. create your first notes to get</p>
          <p>started for your journey</p>
        </div>

        <Link to={"/create-note"}>
          <button
            type="button"
            className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded"
          >
            create your first note
          </button>
        </Link>

        <Link to={"/"}>
          <button
            type="button"
            className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded"
          >
            home
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotesNotFound;

import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RiSlowDownFill } from "react-icons/ri";
const url = "http://localhost:5000/api/notes/";
const CreateDetail = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("please fill all the fields first");
      return;
    }
    console.log("data", title, content);
    try {
      await axios.post(url, { title, content });
      toast.success("note created successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("note does note posted to database");
      if (error.response.status === 429) {
        toast.error("please slow down otherwise you will be banned", {
          duration: 4000,
          icon: <RiSlowDownFill />,
        });
      }
    }
  };

  return (
    <>
      {/* yaha per button k toast ko notification istemall karey */}
      {/* <button
        type="button"
        className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded"
        onClick={() => toast.success("hello you wil win the world")}
      >
        click me
      </button> */}

      <section>
        <Link
          to={"/"}
          className="flex ml-20 mr-10 title-font font-medium items-center md:mb-0 cursor-pointer"
        >
          <button className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded">
            <IoIosArrowRoundBack /> back to notes
          </button>
        </Link>

        <div className="">
          <h1> create new note</h1>
        </div>
        <form action="">
          <label htmlFor="title">
            title
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="please enter  the title"
            />
          </label>

          <label htmlFor="content">
            description
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="please enter the description"
            ></textarea>
          </label>

          <button
            type="button"
            onClick={handleSubmit}
            className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded"
          >
            create note
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateDetail;

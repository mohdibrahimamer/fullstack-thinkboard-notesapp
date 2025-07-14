import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NotesCards = ({ notes, setNotes }) => {
  const [date, setDate] = useState(new Date());

  // yaha per delete ki functionality implement karey
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      // updating the UI as user deletes immidately
      // setNotes(notes.notes.filter((note) => note._id !== id));
      toast.success("note deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("note does note deleted to database");
    }
  };

  // yaha per edit ki functionality implement karey
  // lekin yeh functionality nhi ho rha h ismein error hai
  // const handleEdit = async (event, id) => {
  //   event.preventDefault();
  //   try {
  //     await axios.put(`http://localhost:5000/api/notes/${id}`);
  //     toast.success("note updated successfully");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("note does note updated to database");
  //   }
  // };
  return (
    <>
      <div>NotesCards component</div>

      <div className="">
        {notes.notes.map((note) => {
          return (
            <div key={note._id}>
              <Link to={`/notes/${note._id}`} className="">
                <h1> _id = {note._id}</h1>
                <h1>note title= {note.title}</h1>
                <p>note content= {note.content}</p>
                <p>
                  note createdAt= {new Date(note.createdAt).toLocaleString()}
                </p>
              </Link>
              <div className="icons">
                <button
                  onClick={(e) => handleDelete(e, note._id)}
                  type="button"
                  className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded"
                >
                  <MdDelete />
                </button>

                <div className="icon-edit">
                  <Link to={"/notes/:id"} className="icon-edit">
                    <button
                      type="button"
                      className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded"
                    >
                      <FaEdit />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <p> success={notes.msg}</p>
      </div>
    </>
  );
};

export default NotesCards;

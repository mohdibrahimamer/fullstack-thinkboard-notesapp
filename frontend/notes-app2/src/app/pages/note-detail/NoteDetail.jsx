import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const NoteDetail = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchNote();
  }, [id]);

  // yaha per "fetchnote" ki functionality implement karey
  const fetchNote = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/notes/${id}`);
      const newNote = response.data;
      setNote(newNote);
      console.log(newNote);
      toast.success("note fetched successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // yaha per handlesave ki functionality likhre
  const handleSave = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("please fill all the fields first");
      return;
    }
    setSaving(true);
    try {
      await axios.put(`http://localhost:5000/api/notes/${id}`, {
        title,
        content,
      });
      toast.success("note updated successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("note does note updated to database");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div>NoteDetail indvidual page</div>
      <p>id = {id}</p>
      <section>
        <Link
          to={"/"}
          className="flex ml-20 mr-10 title-font font-medium items-center md:mb-0 cursor-pointer"
        >
          <button className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded">
            <IoIosArrowRoundBack /> back to notes
          </button>
        </Link>

        <button className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded">
          <MdDelete /> delete note
        </button>
        <p>hi from note details</p>
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
            className="text-white ml-3 text-xl capitalize bg-black px-5  cursor-pointer rounded"
            onClick={handleSave}
          >
            save changes
          </button>
        </form>
      </section>
    </>
  );
};

export default NoteDetail;

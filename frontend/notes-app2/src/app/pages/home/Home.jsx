import React, { useEffect, useState } from "react";
import RateLimit from "../../components/rate-limit/RateLimit";
import axios from "axios";
import toast from "react-hot-toast";
const url = "http://localhost:5000/api/notes/";
import NotesCards from "../../components/cards/NotesCards";
import IndNotesCard from "../../components/card/IndNotesCard";
import NotesNotFound from "../../components/notes-notfound/NotesNotFound";
// yaha per axiosInstance import karey
import axiosInstance from "../../lib/axiosInstance";
const Home = () => {
  const [israteLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (notes.length === 0 && !isLoading && !israteLimited) {
    return <NotesNotFound />;
  }

  useEffect(() => {
    getNotes();
  }, []);

  // yaha per fetch karey api axios se
  const getNotes = async () => {
    try {
      // const response = await axiosInstance.get("url");
      const response = await axios.get(url);
      const newNotes = response.data;
      setNotes(newNotes);
      console.log(newNotes);
    } catch (error) {
      console.log("no data", error);
      // agar yaha per  rate limiting error aya toh
      if (error.response.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("rate limiting error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>Home page</div>
      {israteLimited && <RateLimit />}
      {isLoading && <h1>loading notes</h1>}

      {!isLoading && !israteLimited && (
        <NotesCards notes={notes} setNotes={setNotes} />
      )}
      <IndNotesCard notes={notes} />
    </>
  );
};

export default Home;

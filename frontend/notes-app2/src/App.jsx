import { Routes, Route } from "react-router-dom";
import Navbar from "./app/components/navbar/Navbar";
import Home from "./app/pages/home/Home";
import NoteDetail from "./app/pages/note-detail/NoteDetail";
import CreateDetail from "./app/pages/create-detail/CreateDetail";
import "./App.css";
import NoteIndCard from "./app/components/card/IndNotesCard";
import NotesNotFound from "./app/components/notes-notfound/NotesNotFound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-note" element={<CreateDetail />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="*" element={<NotesNotFound />} />
      </Routes>
    </>
  );
}

export default App;

import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    // sort means find the latest  one
    const notes = await Note.find().sort({ createdAt: -1 });
    console.log("notes", notes);
    res.status(200).json({ notes, msg: "created a note successfully" });
  } catch (error) {
    console.log('"error in getAllNotes controller"', error);
    res.status(500).json({ msg: "internal server erroer" });
  }
};

// yaha getAllNotesById ka controller banarey
export const getAllNotesById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }
    res.status(200).json({ note, msg: "created a note successfully" });
  } catch (error) {
    console.log('"error in getAllNotesById controller"', error);
    res.status(500).json({ msg: "internal server error" });
  }
};

// yaha  postAllnotes ko async function banarey
export const postAllNotes = async (req, res) => {
  try {
    // kyun indvidual note ka "title" aur "content" chahiye
    //  isliye yaha per "req.body" daaltey
    const { title, content } = req.body;
    // yaha per new note banarey
    const newNote = new Note({ title, content });
    await newNote.save();
    res
      .status(201)
      .json({ newNote, msg: "you have created a new note successfully" });
  } catch (error) {
    console.log('"error in postAllNotes controller"', error);
    res.status(500).json({ msg: "internal server error" });
  }
};

export const putAllNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    // yaha per "req.params.id"  se routes ka "id" hamesha match karna
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ msg: "Note not found" });
    }
    res.status(200).json({ msg: "you have updated a new note successfully" });
  } catch (error) {
    console.log('"error in putAllNotes controller"', error);
    res.status(500).json({ msg: "internal server error" });
  }
};

export const deleteAllNotes = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ msg: "Note not found" });
    }
    res
      .status(201)
      .json({ message: "you have deleted a new note successfully" });
  } catch (error) {
    console.log('"error in deleteAllNotes controller"', error);
    res.status(500).json({ msg: "internal server error" });
  }
};

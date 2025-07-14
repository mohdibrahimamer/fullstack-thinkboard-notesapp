// yaha file mein per individula  notes ka create karey
import mongoose from "mongoose";

// yaha per "noteSchema" banarey
const noteSchema = new mongoose.Schema(
  {
    // for every note, we need a title and content
    title: {
      type: String,
      required: true,
    },
    //   yaha note ka description banarey
    content: {
      type: String,
      required: true,
    },
  },
  //   yaha note card ki date banarey aur id bhi mongodb provide karta
  { timestamps: true }
);

// yaha per "Note" model banarey
const Note = mongoose.model("Note", noteSchema);

export default Note;

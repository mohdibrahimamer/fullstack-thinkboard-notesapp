// yaha per "route" package use karey from express
import express from "express";
import {
  getAllNotes,
  getAllNotesById,
  postAllNotes,
  putAllNotes,
  deleteAllNotes,
} from "../controllers/notesControllers.js";
const router = express.Router();

// yaha get router ka aisa banarey
router.get("/", getAllNotes);

// yaha per route ind :id
router.get("/:id", getAllNotesById);

// yaha per post request banarey  "data" send to server hellos
router.post("/", postAllNotes);

// yaha per "put" request banarey aur "data" update to database
router.put("/:id", putAllNotes);
// yaha per "delete" request banarey aur "data" delete to database
router.delete("/:id", deleteAllNotes);

export default router;

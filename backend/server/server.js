// yah file mien purey route banarey hain
// yaha per express use karey backend k liye
import express from "express";
// yaha per "notesRoutes" import karey
import notesRoutes from "../routes/notesRoutes.js";
// yaha per "connectDB" import karey
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import rateLimiter from "../middleware/ratelimiter.js";
import cors from "cors";
// load environment variables from .env file
dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// hamesha "express.json()" middleware use karey
// post request k data ko access karne k  liye
app.use(express.json());

// yaha per cors error k waste hamesha ratelimiter k upper ana yeh
app.use(cors());

// yaha per middleware use karey
app.use(rateLimiter);

// yaha per "use" method implement karey aur "notesRoutes" file ko mien routes use karaey
// yaha per "/api/notes" ko to convert karey ismien "/"
app.use("/api/notes", notesRoutes);

// yaha per middleware use karey
app.use((req, res, next) => {
  console.log("we justa new request");
  next(); // next means "getALLNotes" function ko call karey
});

// yaha per server ko listen karaey

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

{
  /*
  // yaha per route banarey
  app.get("/api/notes", (req, res) => {
    res.send("you have 22 notes created");
  });
  
  // ysaha per post request banarey data server send karye
  app.post("/api/notes", (req, res) => {
    res
    .status(201)
    .json({ message: "you have 15 notes created updated successfully" });
  });
  
  // yaha per "put" request banarey aur "data" send to database
  app.put("/api/notes/:id", (req, res) => {
    res
    .status(200)
    .json({ message: "you have 15 notes putted successfully in the database" });
  });
  
  // yaha per "delete" request banarey aur "data" delete to database
  app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({
      message: "you have 15 notes deleted successfully in the database",
    });
  });
  */
}

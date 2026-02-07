const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors({
    origin: "*"
}))
app.use(express.json())

mongoose.connect("mongodb://mongo:27017/notes")
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err))

const Note = mongoose.model("Note", { text: String })

app.get("/notes", async (req, res) => {
  res.json(await Note.find())
})

app.post("/notes", async (req, res) => {
  const note = await Note.create(req.body)
  res.json(note)
})

app.delete("/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ message: "deleted" })
})

app.listen(5000,"0.0.0.0", () => console.log("Server running on 5000"))




//THESE ARE THE COMMANDS FOR CHECKING IN THE MONGO COMPASS
//docker compose exec mongo mongosh
//show dbs
//use notes
//show collections
//db.notes.find()

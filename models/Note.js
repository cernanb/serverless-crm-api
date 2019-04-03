const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
  content: String,
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Clients" }
})

module.exports = mongoose.model("Note", NoteSchema)

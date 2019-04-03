const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
  content: String,
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Clients" },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Note", NoteSchema)

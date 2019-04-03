const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }]
})

module.exports = mongoose.model("Clients", ClientSchema)

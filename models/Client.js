const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
})

module.exports = mongoose.model("Clients", ClientSchema)

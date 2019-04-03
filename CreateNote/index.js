const mongoose = require("mongoose")
const Client = require("../models/Client")
const Note = require("../models/Note")
const { cosmosDBAuth } = require("../utils")

module.exports = function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.")

  mongoose.connect(
    process.env.CosmosDBURL,
    { auth: cosmosDBAuth },
    (err, db) => {
      Client.findById(context.req.params.id, function(err, client) {
        Note.create(context.req.body, function(err, note) {
          client.notes.push(note)
          client.save(function(err, data) {
            note.client = client
            note.save(function(err, note) {
              context.res = {
                body: note
              }
              db.close()
              context.done()
            })
          })
        })
      })
    }
  )
}

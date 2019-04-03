const mongoose = require("mongoose")
const Client = require("../models/Client")
const { cosmosDBAuth } = require("../utils")

module.exports = function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.")

  mongoose.connect(
    process.env.CosmosDBURL,
    { auth: cosmosDBAuth },
    (err, db) => {
      if (err) throw err
      Client.findById(context.req.params.id)
        .populate("notes")
        .exec(function(err, client) {
          context.res = {
            body: client
          }

          db.close()
          context.done()
        })
    }
  )
}

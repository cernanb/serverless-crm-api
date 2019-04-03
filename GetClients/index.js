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

      Client.find().exec(function(err, clients) {
        console.log(clients)
        context.res = {
          body: clients
        }

        db.close()
        context.done()
      })
    }
  )
}

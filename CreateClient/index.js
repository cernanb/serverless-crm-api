const mongoose = require("mongoose")
const Client = require("../models/Client")
const { cosmosDBAuth } = require("../utils")

module.exports = function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.")

  mongoose.connect(
    process.env.CosmosDBURL,
    { auth: cosmosDBAuth },
    (err, db) => {
      Client.create(context.req.body, function(err, data) {
        context.res = {
          body: data
        }
        db.close()
        context.done()
      })
    }
  )
}

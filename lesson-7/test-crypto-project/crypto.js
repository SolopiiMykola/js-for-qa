// Modules imports
const axios = require("axios");
const express = require("express");
// Creating new server application
const app = express();
// Variable with port to use
const port = 3000;

// Allowing application to use PUG as template engine
app.set("view engine", "pug");

// Defining handler for / path (root)
app.get("/", async function(req, res) {
  // query: { from: 'BTC', to: 'USD' },
  console.log("INCOMMING REQUEST", req.query);
  // Checking if incomming request has needed query parameters
  if (req.query.from && req.query.to) {
    try {
    
      const rate = await requestRates(req.query.from, req.query.to);
      res.render("index", {
        message: `${req.query.from}/${req.query.to} ${rate}`
      });
    } catch (err) {
      res.render("index", { message: err.message });
    }
  } else {
    // Just showing error if no needed parameters
    res.render("index", {
      message:
        "Please specify from and to query parameters, like ?from=BTC&to=USD"
    });
  }
});

app.listen(port, function() {
  console.log(`Server started on port ${port}!`);
});

let requestRates = async (from, to) => {
  // trying to make GET request to get fresh rates
  // https://cex.io/rest-api#last-price
  const response = await axios.get(`https://cex.io/api/last_price/${from}/${to}`);
  const json = response.data;
  console.log('requestRates jsonResponse', json)
  // If response contains .error property, throwing it
  if (json.error) {
    throw Error(`${json.error}`);
  }
  // Otherwise just returning last price property of response
  return json.lprice;
}



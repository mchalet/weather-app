const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/api/SearchLoc')(app);
require('./routes/api/SearchLocByDay')(app);
 
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);

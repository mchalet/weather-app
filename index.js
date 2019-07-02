const express = require("express");
const path = require("path");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

app.get('/search-location-weather', (req, res) => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    const apiKey = 'a0970f233fe22460b699533253c91eab'

    const userZip = (url1, url2, zip) => {
        let newUrl = url1 + zip + url2;
        return newUrl
    };

    const apiUrl = userZip(baseUrl, apiKey, zipcode);

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.redirect('/error');
        });
})

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);

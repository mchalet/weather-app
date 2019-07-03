const fetch = require("node-fetch");

module.exports = app => {
  let city;
  let count;

  app.post("/search-location-days", (req, res) => {
    console.log('POST')
    city = req.body.city;
    count = req.body.count
  
    if (!city || !count) {
      res.redirect("/error");
    } else {
      res.redirect("/current-weather");
    }
  });
  
  app.get("/search-location-days-weather", (req, res) => {
    console.log('GET')
    const baseUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
    const apiKey = "a0970f233fe22460b699533253c91eab";
  
    const apiUrl = `${baseUrl}${city},us&cnt=${count}&APPID=${apiKey}`
  
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect("/error");
      });
  });
}
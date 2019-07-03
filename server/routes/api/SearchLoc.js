const fetch = require("node-fetch");
console.log('SearchLoc')
module.exports = app => {
  let zipcode;

  app.post("/search-location", (req, res) => {
    console.log('POST')
    zipcode = req.body.zip;
  
    if (!zipcode || zipcode.length !== 5) {
      res.redirect("/error");
    } else {
      res.redirect("/current-weather");
    }
  });
  
  app.get("/search-location-weather", (req, res) => {
    console.log('GET')
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
    const apiKey = "a0970f233fe22460b699533253c91eab";
  
    const apiUrl = `${baseUrl}${zipcode},us&APPID=${apiKey}`
  
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
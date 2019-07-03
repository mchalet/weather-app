const fs = require('fs');
const path = require('path');

module.exports = (app) => {
	fs.readdirSync('./api/').forEach((file) => {
		require(`./routes/api/${file.substr(0, file.indexOf('.'))}`)(app);
  })
}
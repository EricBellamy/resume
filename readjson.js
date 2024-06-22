const fs = require('fs-extra');
const filenames = fs.readdirSync("json");
const content = {};
for(let filename of filenames){
	const fileContents = JSON.parse(fs.readFileSync("json/" + filename));
	const name = filename.substring(0, filename.lastIndexOf("."));
	content[name] = fileContents;
}

module.exports = content;
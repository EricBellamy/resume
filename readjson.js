const fs = require('fs-extra');
const filenames = fs.readdirSync("json");
const structure = {};
for(let filename of filenames){
	const fileContents = JSON.parse(fs.readFileSync("json/" + filename));
	const name = filename.substring(0, filename.lastIndexOf("."));
	structure[name] = fileContents;
}
console.log(structure);
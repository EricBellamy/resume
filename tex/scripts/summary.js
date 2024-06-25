const fs = require('fs-extra');
const tex = fs.readFileSync('./tex/sections/summary.tex', 'utf8');
const helper = require("../helper.js");

module.exports = function (details) {
	let generatedLatexBullets = "";
	for (let bullet of details.summary.bullets) {
		generatedLatexBullets += helper.newLine(helper.escapeLatex("\\item " + bullet));
	}
	return helper.replaceString(tex, "[BULLETS]", generatedLatexBullets);
}
const fs = require('fs-extra');
const tex = {
	main: fs.readFileSync('./tex/sections/skills/main.tex', 'utf8'),
	bullet: fs.readFileSync('./tex/sections/skills/bullet.tex', 'utf8')
}
const helper = require("../helper.js");

module.exports = function (details) {
	let generatedLatexBullets = "";
	for (const label in details.skills) {
		const skills = details.skills[label];

		let bulletTex = helper.replaceString(tex.bullet, "[TITLE]", helper.escapeLatex(label))
		bulletTex = helper.replaceString(bulletTex, "[SKILLS]", helper.escapeLatex(skills.join(", ")));
		generatedLatexBullets += helper.newLine(bulletTex);
	}
	
	return helper.replaceString(tex.main, "[BULLETS]", generatedLatexBullets);
}
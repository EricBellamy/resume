const fs = require('fs-extra');
const tex = {
	main: fs.readFileSync('./tex/sections/experience/main.tex', 'utf8'),
	subheading: fs.readFileSync('./tex/sections/experience/subheading.tex', 'utf8'),
	bullet: fs.readFileSync('./tex/sections/experience/bullet.tex', 'utf8')
}
const helper = require("../helper.js");

module.exports = function (details) {
	let compiledSection = "";
	for(let experience of details.experience){
		if(0 < compiledSection.length) compiledSection += "\n\n";

		let bullets = "";
		for(const bullet of experience.bullets){
			bullets += helper.newLine(helper.replaceString(tex.bullet, "[BULLET]", helper.escapeLatex(bullet)));
		}
		bullets = bullets.substring(1);

		let newSubheading = tex.subheading;
		newSubheading = helper.replaceString(newSubheading, "[COMPANY]", helper.escapeLatex(experience.company));
		newSubheading = helper.replaceString(newSubheading, "[START_DATE]", helper.escapeLatex(experience.start));
		newSubheading = helper.replaceString(newSubheading, "[END_DATE]", helper.escapeLatex(experience.end));
		newSubheading = helper.replaceString(newSubheading, "[POSITION]", helper.escapeLatex(experience.position));
		newSubheading = helper.replaceString(newSubheading, "[BULLETS]", bullets);

		compiledSection += newSubheading;
	}
	return helper.replaceString(tex.main, "[SUBHEADINGS]", compiledSection);
}
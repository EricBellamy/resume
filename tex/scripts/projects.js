const fs = require('fs-extra');
const tex = {
	main: fs.readFileSync('./tex/sections/projects/main.tex', 'utf8'),
	subheading: fs.readFileSync('./tex/sections/projects/subheading.tex', 'utf8'),
	bullet: fs.readFileSync('./tex/sections/projects/bullet.tex', 'utf8')
}
const helper = require("../helper.js");

module.exports = function (details) {
	let compiledSection = "";
	for(let project of details.projects){
		if(0 < compiledSection.length) compiledSection += "\n\n";

		let bullets = "";
		for(const bullet of project.bullets){
			bullets += helper.newLine(helper.replaceString(tex.bullet, "[BULLET]", helper.escapeLatex(bullet)));
		}
		bullets = bullets.substring(1);

		let newSubheading = tex.subheading;
		newSubheading = helper.replaceString(newSubheading, "[TITLE]", helper.escapeLatex(project.title));
		newSubheading = helper.replaceString(newSubheading, "[START_DATE]", helper.escapeLatex(project.start));
		newSubheading = helper.replaceString(newSubheading, "[BULLETS]", bullets);

		compiledSection += newSubheading;
	}

	return helper.replaceString(tex.main, "[SUBHEADINGS]", compiledSection);
}
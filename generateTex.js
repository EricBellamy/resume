const sections = {
	top: require("./tex/scripts/top.js"),
	summary: require("./tex/scripts/summary.js"),
	experience: require("./tex/scripts/experience.js"),
	projects: require("./tex/scripts/projects.js"),
}
const fs = require("fs-extra");
const helper = require("./tex/helper.js");
const baseTex = fs.readFileSync('./tex/base.tex', 'utf8');

module.exports = function (details) {
	let compiledSection = "";
	compiledSection += sections.top(details) + "\n\n\n\n";
	compiledSection += sections.summary(details) + "\n\n\n\n";
	compiledSection += sections.experience(details) + "\n\n\n\n";
	compiledSection += sections.projects(details);

	let finishedTex = helper.replaceString(baseTex, "[SECTIONS]", compiledSection);
	fs.writeFileSync("compiled.tex", finishedTex);


	// console.log(topSection);
	// const replaced = replaceString("hello [NAME] testing this out", "[NAME]", "Eric Bellamy");
	// console.log(replaced);
}
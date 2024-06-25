const sections = {
	top: require("../tex/scripts/top.js"),
	summary: require("../tex/scripts/summary.js"),
	experience: require("../tex/scripts/experience.js"),
	projects: require("../tex/scripts/projects.js"),
	skills: require("../tex/scripts/skills.js"),
}
const fs = require("fs-extra");
const helper = require("../tex/helper.js");
const baseTex = fs.readFileSync('./tex/base.tex', 'utf8');

module.exports = function (details) {
	let compiledSection = "";
	compiledSection += sections.top(details) + "\n\n\n\n";
	compiledSection += sections.summary(details) + "\n\n\n\n";
	compiledSection += sections.experience(details) + "\n\n\n\n";
	compiledSection += sections.projects(details) + "\n\n\n\n";
	compiledSection += sections.skills(details);

	let finishedTex = helper.replaceString(baseTex, "[SECTIONS]", compiledSection);
	fs.writeFileSync("compiled.tex", finishedTex);
}
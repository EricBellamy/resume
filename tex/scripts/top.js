const fs = require('fs-extra');
const tex = fs.readFileSync('./tex/sections/top.tex', 'utf8');
const helper = require("../helper.js");

module.exports = function (details) {
	let compiledSection = tex;
	compiledSection = helper.replaceString(compiledSection, "[NAME]", details.info.name);
	compiledSection = helper.replaceString(compiledSection, "[LOCATION]", details.info.location.city + ", " + details.info.location.province + ", " + details.info.location.country);
	compiledSection = helper.replaceString(compiledSection, "[EMAIL]", details.info.email);
	compiledSection = helper.replaceString(compiledSection, "[PHONE_NUMBER]", details.info.phone);
	compiledSection = helper.replaceString(compiledSection, "[WEBSITE]", details.info.website);
	compiledSection = helper.replaceString(compiledSection, "[LINKEDIN]", details.info.linkedin);
	compiledSection = helper.replaceString(compiledSection, "[GITHUB]", details.info.github);
	return compiledSection;
}
module.exports = function (details) {
	console.log(details);
	let textResume = "";

	textResume += `Name: ${details.info.name}\n`;
	textResume += `Current Role: ${details.info.currentRole}\n`;
	textResume += `Current Company: ${details.info.currentCompany}\n`;
	textResume += `Location: ${details.info.location.city}, ${details.info.location.province}, ${details.info.location.country}\n`;
	textResume += `Email: ${details.info.email}\n`;
	textResume += `Phone: ${details.info.phone}\n`;
	textResume += `Portfolio Website: https://${details.info.website}\n`;
	textResume += `LinkedIn: linkedin.com/in/${details.info.linkedin}\n`;
	textResume += `Github: github.com/${details.info.github}\n`;

	// About Me:
	textResume += `\nAbout Me:\n${details.summary.text}`;

	textResume += `\n\nCareer Highlights:`;
	for (const bullet of details.summary.bullets) {
		textResume += `\n- ${bullet}`;
	}

	textResume += `\n\n\n\nWork Experience:`;
	for (let a = 0; a < details.experience.length; a++) {
		const experience = details.experience[a];

		textResume += `\n\n${a})`;
		textResume += `\nCompany: ${experience.company}`;
		textResume += `\nPosition: ${experience.position}`;
		textResume += `\nLocation: ${experience.location}`;
		textResume += `\nStart Date: ${experience.start}`;

		// End date or currently working
		if(experience.end === "Present") textResume += "\nCurrently Working: True";
		else textResume += `End Date: ${experience.end}`;

		if (experience.description != undefined) textResume += `\nDescription: ${experience.description}`;

		textResume += `\nBullets:`;
		for(const bullet of experience.bullets){
			textResume += `\n- ${bullet}`;
		}
	}

	textResume += `\n\n\n\nSide Projects:`;
	for (let a = 0; a < details.projects.length; a++) {
		const project = details.projects[a];

		textResume += `\n\n${a})`;
		textResume += `\nTitle: ${project.title}`;
		textResume += `\nDate: ${project.start}`;
		textResume += `\nTechnologies: ${project.technologies.join(", ")}`;

		textResume += `\nBullets:`;
		for(const bullet of project.bullets){
			textResume += `\n- ${bullet}`;
		}
	}

	textResume += `\n\n\n\nProficient Skills:`;
	for(const key in details.skills){
		textResume += `\n${key}: ${details.skills[key].join(", ")}`;
	}

	console.log(textResume);
}
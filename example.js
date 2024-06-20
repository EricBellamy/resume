const { exec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const content = require("./readjson.js");

const filename = "resume";

// Path to your .tex file
const texFilePath = path.join(__dirname, filename + '.tex');

// Directory where the output PDF will be saved
const outputDir = __dirname + `/outputs/` + filename;
fs.ensureDirSync(outputDir);

const latexCommand = `pdflatex -output-directory=${outputDir} ${texFilePath}`;
console.log(latexCommand);

// Execute the LaTeX command
exec(latexCommand, (error, stdout, stderr) => {
	if (error) {
		console.error(`Error executing LaTeX command: ${error.message}`);
		return;
	}
	if (stderr) {
		console.error(`LaTeX stderr: ${stderr}`);
		return;
	}

	console.log('LaTeX stdout:', stdout);
	console.log('PDF successfully created.');
});
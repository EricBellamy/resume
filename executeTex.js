const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

module.exports = function (filename) {
	const texFilePath = path.join(__dirname, "tex", filename + '.tex');
	console.log(texFilePath);

	// Ensure the dir
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
		console.log('PDF successfully created.');
	});
}
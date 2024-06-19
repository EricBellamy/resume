// Weird NodeJS version fix?
const os = require('os');
os.tmpDir = os.tmpdir;

const fs = require('fs');
const path = require('path');
const latex = require("latex");
const PDFDocument = require('pdfkit');


const latexContent = fs.readFileSync("resume.tex", "utf8");


// Create a readable stream from the LaTeX content
const latexStream = latex(latexContent);

// Create a PDF document
const pdfDoc = new PDFDocument();

// Pipe the LaTeX output to the PDF document
latexStream.pipe(pdfDoc);

// Save the PDF document to a file
const outputPdfPath = path.join(__dirname, 'output.pdf');
pdfDoc.pipe(fs.createWriteStream(outputPdfPath));

// Finalize the PDF and end the stream
pdfDoc.end();
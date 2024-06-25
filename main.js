const filename = "resume";

const details = require("./lib/readjson.js");
const generateTex = require("./lib/generateTex.js");
const generateTxtResume = require("./lib/generateTxtResume.js");
const executeTex = require("./lib/executeTex.js");

generateTex(details);
generateTxtResume(details);
// executeTex(filename);
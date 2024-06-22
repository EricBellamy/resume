const filename = "resume";

const details = require("./readjson.js");
const generateTex = require("./generateTex.js");
const executeTex = require("./executeTex.js");

generateTex(details);
// executeTex(filename);
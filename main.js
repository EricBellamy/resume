const filename = "resume";

const content = require("./readjson.js");
const modifyTex = require("./modifyTex.js");
const executeTex = require("./executeTex.js");

executeTex(filename);
const fullBadge = require("./badges-template.js");

const myBadge = fullBadge;

myBadge["issuedOn"] = new Date().toISOString(); // Current Time

module.exports = myBadge;

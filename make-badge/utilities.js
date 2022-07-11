const makeStat107Badge = require("./badgeMaker");
const { v4: uuidv4 } = require("uuid");
const { createHash } = require("crypto");
const fd = require("fs");
const fastCsv = require("fast-csv");

const processData = (row, students, host) => {
  const salt = "STAT107";
  const { Student: student, "e-mail": email } = row;
  const id = uuidv4();
  const hash = createHash("sha256");
  hash.update(email, salt);
  const hashedEmail = "sha256$" + hash.digest("hex");
  const badge = makeStat107Badge(id, student, hashedEmail, salt, host);
  console.log(id);
  students.set(id, badge);
};

const readData = async (file, students, host) => {
  await fd
    .createReadStream(file)
    .pipe(fastCsv.parse({ headers: true }))
    .on("data", (row) => {
      processData(row, students, host);
    });
};

module.exports = { readData };

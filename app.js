const express = require("express");
const app = express();

const { readData } = require("./make-badge/utilities.js");

const students = new Map();

const handleRequest = async (res, id, element) => {
  const badge = students.get(id);
  badge ? res.send(badge[element]) : res.status(404).send("Not Found :(");
};

app.listen(process.env.PORT || 3000, async function () {
  await readData(
    "./data/students.csv",
    students,
    "https://salty-sands-91607.herokuapp.com"
  );
});

app.get("/", (_req, res) => {
  res.send("OpenBadges for STAT107 :)");
});

app.get("/:id/fullbadge", (req, res) => {
  handleRequest(res, req.params.id, "fullBadge");
});

app.get("/:id/assertion", (req, res) => {
  handleRequest(res, req.params.id, "assertion");
});

app.get("/:id/issuer", (req, res) => {
  handleRequest(res, req.params.id, "issuer");
});

app.get("/:id/recipient", (req, res) => {
  handleRequest(res, req.params.id, "recipient");
});

app.get("/:id/badge", (req, res) => {
  handleRequest(res, req.params.id, "badge");
});

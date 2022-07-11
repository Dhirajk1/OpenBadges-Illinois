const express = require("express");
const app = express();

const { readData } = require("./index.js");

const students = new Map();

app.get("/", (_req, res) => {
  let ids = "";
  Object.keys(students).forEach((id) => {
    ids += `${id} |`;
  });
  res.send("Hello World!" + ids);
});

app.get("/:id/fullbadge", (_req, res) => {
  const fullBadge = students.get(_req.params.id);
  if (!fullBadge) {
    res.status(404).send("Badge not found");
  }
  res.send(fullBadge.fullBadge);
});

app.get("/:id/assertion", (_req, res) => {
  const fullBadge = students.get(_req.params.id);
  if (!fullBadge) {
    res.status(404).send("Badge not found");
  }
  res.send(fullBadge.assertion);
});

app.get("/:id/issuer", (_req, res) => {
  const fullBadge = students.get(_req.params.id);
  if (!fullBadge) {
    res.status(404).send("Badge not found");
  }
  res.send(fullBadge.issuer);
});

app.get("/:id/recipient", (_req, res) => {
  const fullBadge = students.get(_req.params.id);
  if (!fullBadge) {
    res.status(404).send("Badge not found");
  }
  res.send(fullBadge.recipient);
});

app.get("/:id/badge", (_req, res) => {
  const fullBadge = students.get(_req.params.id);
  if (!fullBadge) {
    res.status(404).send("Badge not found");
  }
  res.send(fullBadge.badge);
});

app.listen(process.env.PORT || 3000, async function () {
  await readData("./students.csv", students);
});

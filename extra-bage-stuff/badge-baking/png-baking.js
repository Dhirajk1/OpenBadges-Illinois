const fs = require("fs");
const pngitxt = require("png-itxt");

// Demo badge from IMS
assertion = assertion = {
  "@context": "https://w3id.org/openbadges/v2",
  type: "Assertion",
  id: "https://badges.imsglobal.org/public/assertions/1geQXkWnQnW0BkWcO3jSPA?v=2_0",
  image: "https://discovery.cs.illinois.edu/static/dsd.png",
};

fs.createReadStream("illinois.png")
  .pipe(
    pngitxt.set({
      type: "iTXt",
      keyword: "openbadges",
      value: JSON.stringify(assertion),
      language: "",
      translated: "",
      compressed: false,
      compression_type: 0,
    })
  )
  .pipe(fs.createWriteStream("./output/output.png"));

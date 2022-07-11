const fs = require("fs");
const pngitxt = require("png-itxt");
const myBadge = require("./badges.js");

assertion = myBadge;

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
  .pipe(fs.createWriteStream("output.png"));

/* 
The URL in the "id" part of the assertion fetches the badge from the server,
(as a JSON object) which is then parsed in the verifier. 
In this sense we just need a unique key for the ID URL that will link to the student's badge

Verification Results (What's returned from the ID URL)
===============================================================================================
Repsonse is: 
{
    "@context": "https://w3id.org/openbadges/v2",
    "type": "Assertion",
    "id": "https://badges.imsglobal.org/public/assertions/1geQXkWnQnW0BkWcO3jSPA?v=2_0",
    "image": "https://badges.imsglobal.org/public/assertions/1geQXkWnQnW0BkWcO3jSPA/image",
    "badge": {
        "@context": "https://w3id.org/openbadges/v2",
        "description": "Recipients of this badge have demonstrated mastery level achievement of the Written Communication competency as established by the College of business at Sample University.",
        "type": "BadgeClass",
        "id": "https://badges.imsglobal.org/public/badges/6m-_xam7SFq_sg5lam43Jw?v=2_0",
        "name": "Written Communication - Mastery",
        "issuer": {
            "@context": "https://w3id.org/openbadges/v2",
            "description": "Founded in 1899, Sample University is a world-class institution of higher education.\n\n(Note: This badge issuer is intended for use in the IMS Global certification program.)",
            "url": "http://openbadgesvalidator.imsglobal.org/SampleResources/about.html",
            "email": "info@business.sampleuniversity.edu",
            "type": "Issuer",
            "id": "https://badges.imsglobal.org/public/issuers/PDSlozoSTjircXTKVvuOLg?v=2_0",
            "name": "Sample University - College of Business",
            "image": "https://badges.imsglobal.org/public/issuers/PDSlozoSTjircXTKVvuOLg/image"
        },
        "image": "https://badges.imsglobal.org/public/badges/6m-_xam7SFq_sg5lam43Jw/image",
        "criteria": {
            "narrative": "The earner has demonstrated the following:\n\n1. Information Acquisition\n- Understand writing as a series of tasks including finding, evaluating, analyzing, and synthesizing appropriate primary and secondary sources.\n- Understand the writing process as a social and often collaborative process.\n- Know genre conventions ranging from structure and paragraphing to tone and mechanics\n\n2. Application\n- Use writing and reading for inquiring, learning, thinking, and communicating\n- Use common formats for different kinds of texts and written tasks\n- Achieve mastery of such features as syntax, grammar, punctuation, and spelling\n- Use appropriate conventions of usage, specialized vocabulary, format and documentation\n- Use multiple drafts to create and complete a successful text.\n- Write and read texts written in several genres and for a variety of audiences.\n\n3. Analysis\n- Critique own and other's work.\n- Develop flexible strategies for generating, revising, editing, and proofreading."
        },
        "alignment": [],
        "tags": []
    },
    "verification": {
        "type": "HostedBadge"
    },
    "evidence": [
        {
            "type": "Evidence",
            "id": "http://openbadgesvalidator.imsglobal.org/SampleResources/my-portfolio.pdf"
        }
    ],
    "issuedOn": "2017-12-19T22:25:39.446359+00:00",
    "recipient": {
        "salt": "ec9d81269505419681e6c3f6853679c4",
        "type": "email",
        "hashed": true,
        "identity": "sha256$061bc804b04cfce65a1b96ea0a7dc47b60a629edd4206e86334e4ef90c6709d1"
    }
}
*/

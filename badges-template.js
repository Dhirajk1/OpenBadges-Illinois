host = "https://salty-sands-91607.herokuapp.com";

assertion = {
  "@context": "https://w3id.org/openbadges/v2",
  type: "Assertion",
  //id: "https://badges.imsglobal.org/public/assertions/1geQXkWnQnW0BkWcO3jSPA?v=2_0",
  id: `${host}/fullbadge`,
  image: "https://discovery.cs.illinois.edu/static/dsd.png",
};

issuer = {
  "@context": "https://w3id.org/openbadges/v2",
  description:
    "A course for the fundamentals of Statistics and Computer Science for Data Science",
  url: "https://discovery.cs.illinois.edu",
  email: "dhiraj2@illinois.edu",
  type: "Issuer",
  //id: "https://badges.imsglobal.org/public/issuers/PDSlozoSTjircXTKVvuOLg?v=2_0",
  id: `${host}/issuer`,
  name: "University of Illinois @ Urbana-Champaign",
  image: "https://illinois.edu/assets/img/branding/wordmark_vertical.png",
};

recipient = {
  salt: "ec9d81269505419681e6c3f6853679c4",
  type: "email",
  hashed: true,
  identity:
    "sha256$061bc804b04cfce65a1b96ea0a7dc47b60a629edd4206e86334e4ef90c6709d1",
};

studentInfo = {
  evidence: [
    {
      type: "Evidence",
      id: "https://s29.q4cdn.com/816090369/files/doc_downloads/test.pdf", //should be a pdf of a certificate
    },
  ],
  issuedOn: "2017-12-19T22:25:39.446359+00:00",
  recipient: recipient,
};

badge = {
  "@context": "https://w3id.org/openbadges/v2",
  description:
    "Awarded for the successful completion of STAT107: Data Science Discovery at the University of Illinois at Urbana-Champaign",
  type: "BadgeClass",
  //id: "https://badges.imsglobal.org/public/badges/6m-_xam7SFq_sg5lam43Jw?v=2_0",
  id: `${host}/badge`,
  name: "STAT107: Data Science Discovery",
  issuer: issuer,
  image: "https://discovery.cs.illinois.edu/static/dsd.png",
  criteria: {
    narrative:
      "Data Science Discovery is the intersection of statistics, computation, and real-world relevance. As a project-driven course, students perform hands-on-analysis of real-world datasets to analyze and discover the impact of the data. Throughout each experience, students reflect on the social issues surrounding data analysis such as privacy and design",
  },
  alignment: [],
  tags: [],
};

fullBadge = {
  ...assertion,
  badge: badge,
  verification: {
    type: "HostedBadge",
  },
  ...studentInfo,
};

module.exports = { assertion, issuer, recipient, badge, fullBadge };

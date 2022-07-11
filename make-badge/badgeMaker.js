class Stat107Badge {
  constructor(
    id,
    name,
    emailHash,
    salt,
    evidence = "https://s29.q4cdn.com/816090369/files/doc_downloads/test.pdf"
  ) {
    Object.assign(this, { id, name, emailHash, salt, evidence });
    this.badge = {
      assertion: null,
      issuer: null,
      recipient: null,
      badge: null,
      fullBadge: null,
    };
  }
  makeBadge(host) {
    this.badge.assertion = {
      "@context": "https://w3id.org/openbadges/v2",
      type: "Assertion",
      id: `${host}/${this.id}/fullbadge`,
      image: "https://discovery.cs.illinois.edu/static/dsd.png",
    };

    this.badge.issuer = {
      "@context": "https://w3id.org/openbadges/v2",
      description:
        "A course for the fundamentals of Statistics and Computer Science for Data Science",
      url: "https://discovery.cs.illinois.edu",
      email: "dhiraj2@illinois.edu",
      type: "Issuer",
      id: `${host}/${this.id}/issuer`,
      name: "University of Illinois @ Urbana-Champaign",
      image: "https://illinois.edu/assets/img/branding/wordmark_vertical.png",
    };

    this.badge.recipient = {
      salt: this.salt,
      type: "email",
      hashed: true,
      identity: this.emailHash,
    };

    this.badge.badge = {
      "@context": "https://w3id.org/openbadges/v2",
      description: `Awarded to ${this.name} for the successful completion of STAT107: Data Science Discovery at the University of Illinois at Urbana-Champaign`,
      type: "BadgeClass",
      id: `${host}/${this.id}/badge`,
      name: "STAT107: Data Science Discovery",
      issuer: this.badge.issuer,
      image: "https://discovery.cs.illinois.edu/static/dsd.png",
      criteria: {
        narrative:
          "Data Science Discovery is the intersection of statistics, computation, and real-world relevance. As a project-driven course, students perform hands-on-analysis of real-world datasets to analyze and discover the impact of the data. Throughout each experience, students reflect on the social issues surrounding data analysis such as privacy and design",
      },
      alignment: [],
      tags: [],
    };

    this.badge.fullBadge = {
      ...this.badge.assertion,
      badge: this.badge.badge,
      verification: {
        type: "HostedBadge",
      },
      evidence: [
        {
          type: "Evidence",
          id: this.evidence, //should be a pdf of a certificate
        },
      ],
      issuedOn: new Date().toISOString(),
      recipient: this.badge.recipient,
    };
  }
}

const makeStat107Badge = (id, name, emailHash, salt, host) => {
  const studentBadge = new Stat107Badge(id, name, emailHash, salt);
  studentBadge.makeBadge(host);
  return studentBadge.badge;
};

module.exports = { makeStat107Badge };

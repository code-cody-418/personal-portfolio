// Some of my current skills and wanted skills with a fun function
const currentSkills = ["javaScript", "docker", "git", "cloudComputing"];
const wantedSkills = ["rust", "c++", "oAuth", "javaScript"];

export const checkSkills = ({ currentSkills, wantedSkills }) => {
  const skillSet = new Set();
  const skillsNeeded = [];
  for (const skill of currentSkills) {
    skillSet.add(skill);
  }

  for (const wantedSkill of wantedSkills) {
    if (!skillSet.has(wantedSkill)) {
      skillsNeeded.push(wantedSkill);
    }
  }
  return skillsNeeded;
};

const skillsNeeded = checkSkills({currentSkills, wantedSkills});
console.log(skillsNeeded); // [ 'rust', 'c++', 'oAuth' ]

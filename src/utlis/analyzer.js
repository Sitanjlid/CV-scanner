export function analyzeResume(text, jobRole = "frontend") {
  const keywordBank = {
    basics: ["Name", "Email", "LinkedIn", "GitHub", "Phone"],
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    projects: ["project", "built", "developed", "deployed"],
    achievements: ["leadership", "volunteer", "award"],
    frontend: ["React", "CSS", "Responsive", "HTML", "JavaScript"],
    backend: ["Node.js", "Express", "MongoDB"],
    software: ["C++", "DSA", "OOP", "System Design", "DBMS"],
    analyst: ["Excel", "SQL", "Data Analysis", "Python", "Visualization"],
  };

  let score = 0;
  const suggestions = [];
  const resumeText = text.toLowerCase();

  ["basics", "skills", "projects", "achievements"].forEach((section) => {
    keywordBank[section].forEach((word) => {
      if (resumeText.includes(word.toLowerCase())) {
        score += 5;
      } else {
        suggestions.push(`Consider adding "${word}" under ${section}.`);
      }
    });
  });

  const roleKeywords = keywordBank[jobRole] || [];
  let roleMatches = 0;
  roleKeywords.forEach((word) => {
    if (resumeText.includes(word.toLowerCase())) {
      roleMatches++;
    }
  });

  const jobMatchPercent = roleKeywords.length > 0
    ? Math.round((roleMatches / roleKeywords.length) * 100)
    : 0;

  return { score, suggestions, jobMatchPercent };
}

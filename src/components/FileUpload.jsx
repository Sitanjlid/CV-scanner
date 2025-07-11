import React, { useState } from "react";
import { analyzeResume } from "../utlis/analyzer";

export default function FileUpload() {
  const [fileName, setFileName] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [jobRole, setJobRole] = useState("frontend");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const result = analyzeResume(text, jobRole);
      setAnalysis(result);
    };
    reader.readAsText(file);
  };

  return (


    <div className="file-upload-container">
      <p><strong>👨‍💻 What job profile are you applying for?</strong></p>
      <select
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="software">Software Engineer</option>
        <option value="analyst">Technical Analyst</option>
      </select>



      <label className="custom-file-upload">
        <input type="file" accept=".txt,.pdf" onChange={handleFileChange} />
        📁Upload Resume
      </label>

      
      {analysis && (
        <div style={{ marginTop: "20px", textAlign: "left" }} className="analysis-section">
          <h3>🧠 Analysis Result</h3>

          <p><strong>Score:</strong> {analysis.score}/100
            <span><strong>Job Match</strong>: {analysis.jobMatchPercent}%</span></p>
          <div className="suggestions-container">


            <h4>📌 Suggestions:</h4>
            <ul>
              {analysis.suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

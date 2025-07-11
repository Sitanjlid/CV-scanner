import React from "react";

export default function ResumePreview({ resumeText }) {
  return (
    <div className="resume-preview">
      <h3>📄 Resume Preview</h3>
      <div className="resume-text-box">
        <pre>{resumeText}</pre>
      </div>
    </div>
  );
}

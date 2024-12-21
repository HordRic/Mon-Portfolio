// filepath: /workspaces/Mon-Portfolio/src/Components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2>Education</h2>
      <div className="education-grid">
        {/* Education grid of 4 cells */}
        <div className="education-cell">
          <h3>École Polytechnique de Lomé</h3>
          <p> Bachelor's Degree in Software Engineering</p>
          <p>2023 - 2026</p>
        </div>
        <div className="education-cell">
          <h3>Online Course</h3>
          <p>Full Stack Web Development</p>
          <p>2024</p>
        </div>
        <div className="education-cell">
          <h3>Certification</h3>
          <p>Certified pyhton Developer</p>
          <p>2024</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
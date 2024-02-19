import React from "react";
import SkillsSphere from "./SkillsSphere";

const Skills = () => {
  return (
    <div className="skill" id="skills">
      <div className="skill-box">
        <h1 className="skill-title">SKILLS</h1>
        <h4 className="skill-description">Here are some skills that I am familiar with. Click on the text to see my proficiency.</h4>
        <SkillsSphere />
      </div>
    </div>
  );
};

export default Skills;

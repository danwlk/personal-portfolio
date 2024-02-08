import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const SkillsSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Bootstrap",
      "MySQL",
      "Git",
      "C",
      "Excel",
      "Java",
      "Web Development"
    ];

    const options = {
      radius: 300,
      maxspeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="skills-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default SkillsSphere;

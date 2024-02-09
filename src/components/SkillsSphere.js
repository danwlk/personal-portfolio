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

    const handleClick = (event) => {
      console.log(`Clicked on text: ${event.target.textContent}`);
      // Perform your action here, e.g., displaying more information about the clicked skill
    };

    setTimeout(() => {
      const tags = document.querySelectorAll(`${container} > span`);
      tags.forEach(tag => {
        tag.addEventListener('click', handleClick);
      });
    }, 1000);

    return () => {
      const tags = document.querySelectorAll(`${container} > span`);
      tags.forEach(tag => {
        tag.removeEventListener('click', handleClick);
      });
    };

  }, []);

  return (
    <div className="skills-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default SkillsSphere;

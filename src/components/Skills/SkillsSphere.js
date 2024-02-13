import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";

const SkillsSphere = () => {
  const [barHeight, setBarHeight] = useState(0);
  const skillToBarHeight = {
    React: 95,
    HTML: 90,
    CSS: 85,
    JavaScript: 80,
    Python: 90,
    Bootstrap: 70,
    MySQL: 60,
    Git: 90,
    C: 90,
    Excel: 90,
    Java: 90,
    "Web Development": 90,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      "Web Development",
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
      const barHeight = skillToBarHeight[event.target.textContent] || 0;
      setBarHeight(barHeight);
    };

    setTimeout(() => {
      const tags = document.querySelectorAll(`${container} > span`);
      tags.forEach((tag) => {
        tag.addEventListener("click", handleClick);
      });
    }, 1000);

    return () => {
      const tags = document.querySelectorAll(`${container} > span`);
      tags.forEach((tag) => {
        tag.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="skills-sphere">
      <span className="tagcloud"></span>
      <div className="skills-meter">
        <h5>{barHeight}%</h5>
        <div
          className="skills-meter-bar"
          style={{ "--bar-height": `${100 - barHeight}%` }}
        ></div>
        <h5>Proficiency</h5>
      </div>
    </div>
  );
};

export default SkillsSphere;

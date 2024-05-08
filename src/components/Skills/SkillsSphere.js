import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";

const SkillsSphere = () => {
  const [barHeight, setBarHeight] = useState(0);
  const [skill, setSkill] = useState("");
  const skillToBarHeight = {
    React: 95,
    HTML: 90,
    CSS: 90,
    JavaScript: 95,
    Python: 90,
    Bootstrap: 85,
    MySQL: 85,
    Git: 100,
    C: 80,
    Java: 80,
    "MS Azure AI": 75,
    "React Native": 95,
    Supabase: 90,
  };

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
      "Java",
      "MS Azure AI",
      "React Native",
      "Supabase",
    ];
    const options = {
      radius: 350,
      maxspeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);

    const handleClick = (event) => {
      console.log(`Clicked on text: ${event.target.textContent}`);
      const height = skillToBarHeight[event.target.textContent];
      setSkill(event.target.textContent);
      setBarHeight(0);
      setTimeout(() => {
        setBarHeight(height);
      }, 1000);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <h5>{skill}</h5>
      </div>
    </div>
  );
};

export default SkillsSphere;

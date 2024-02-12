import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";

const SkillsSphere = () => {
  const [barHeight, setBarHeight] = useState(0);

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
      // Perform your action here, e.g., displaying more information about the clicked skill
      switch (event.target.textContent) {
        case "React":
          setBarHeight(95);
          break;
        case "HTML":
          setBarHeight(90);
          break;
        case "CSS":
          setBarHeight(85);
          break;
        case "JavaScript":
          setBarHeight(80);
          break;
        case "Python":
          setBarHeight(90);
          break;
        case "Bootstrap":
          setBarHeight(70);
          break;
        case "MySQL":
          setBarHeight(60);
          break;
        case "Git":
          setBarHeight(90);
          break;
        case "C":
          setBarHeight(90);
          break;
        case "Excel":
          setBarHeight(90);
          break;
        case "Java":
          setBarHeight(90);
          break;
        case "Web Development":
          setBarHeight(90);
          break;
        default:
          setBarHeight(0);
      }
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

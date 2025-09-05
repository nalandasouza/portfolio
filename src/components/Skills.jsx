import { useEffect } from "react";
import { ApiRestIcon } from "./icons/ApiRestIcon";
import { CssIcon } from "./icons/CssIcon";
import { DockerIcon } from "./icons/DockerIcon";
import { GitIcon } from "./icons/GitIcon";
import { HtmlIcon } from "./icons/HtmlIcon";
import { JsIcon } from "./icons/JsIcon";
import { MongoIcon } from "./icons/MongoIcon";
import { MysqlIcon } from "./icons/MysqlIcon";
import { NodeIcon } from "./icons/NodeIcon";
import { ReactIcon } from "./icons/ReactIcon";
import "./Skills.css";
import ScrollReveal from "scrollreveal";

function Skills() {
  const skills = [
    { name: "HTML", icon: <HtmlIcon /> },
    { name: "CSS", icon: <CssIcon /> },
    { name: "JavaScript", icon: <JsIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "GIT", icon: <GitIcon /> },
    { name: "NodeJS", icon: <NodeIcon /> },
    { name: "API Rest", icon: <ApiRestIcon /> },
    { name: "MongoDB", icon: <MongoIcon /> },
    { name: "MySQL", icon: <MysqlIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".ul-anim", {
      origin: "left",
      duration: 2500,
      distance: "15%",
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Habilidades</h2>
        <ul className="ul-anim">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="icons">{skill.icon}</div>
              <span></span>
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;

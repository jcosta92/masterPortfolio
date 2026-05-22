import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import SalesImg from "./sales.png";
import LogisticsImg from "./Logistics1.png";
import DataAIImg from "./data.png";
import PMImg from "./PM1.png";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return (
      <img
        src={DataAIImg}
        alt="Data & AI"
        className="skill-image"
        style={{
          width: "100%",
          maxWidth: "650px",
          height: "auto",
          opacity: 0.9,
        }}
      />
    );
  else if (props.fileName === "FullStackImg")
    return (
      <img
        src={SalesImg}
        alt="Sales Engineering"
        className="skill-image"
        style={{
          width: "100%",
          maxWidth: "650px",
          height: "auto",
          opacity: 0.9,
        }}
      />
    );
  else if (props.fileName === "LogisticsImg")
    return (
      <img
        src={LogisticsImg}
        alt="Logistics"
        className="skill-image"
        style={{
          width: "100%",
          maxWidth: "650px",
          height: "auto",
          opacity: 0.9,
        }}
      />
    );
  else if (props.fileName === "PMImg")
    return (
      <img
        src={PMImg}
        alt="Project Management"
        className="skill-image"
        style={{
          width: "100%",
          maxWidth: "650px",
          height: "auto",
          opacity: 0.9,
        }}
      />
    );

  return null;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                      <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;

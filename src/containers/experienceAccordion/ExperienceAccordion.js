import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const workSection = this.props.sections[0];

    return (
      <div className="experience-accord">
        {workSection["experiences"].map((experience, index) => {
          return (
            <ExperienceCard
              key={index}
              index={index}
              totalCards={workSection["experiences"].length}
              experience={experience}
              theme={theme}
            />
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;

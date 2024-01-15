// Education.js
import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    const { educations } = this.props;

    if (!educations || educations.length === 0) {
      return null; // No education data, render nothing or show a message
    }

    const educationIconSize = "40px";

    return (
      <section id="education" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                Education
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {educations.map((education, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date={education.years}
                iconStyle={{
                  background: "#AE944F",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={
                  <i
                    className="fas fa-graduation-cap education-icon"
                    style={{ fontSize: educationIconSize }}
                  ></i>
                }
                key={index}
              >
                <h3 className="vertical-timeline-element-title">
                  {education.degree}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {education.school}
                </h4>
                <div>
                  {education.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
                {education.technologies && (
                  <div>
                    {education.technologies.map((technology, i) => (
                      <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                        {technology}
                      </Badge>
                    ))}
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;

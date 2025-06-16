import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>final year Computer Science student</b> at
        <a href="https://jntuacep.ac.in/"> JNTUA College of Engineering Pulivendula</a>, working on webapps with the 
        integration of AI using machine learning models.{" "} 
        
      </p>
    );
    const two = (
      <p>
        Outside of College, I'm interested in following the developments of
        science, movies, geo politics, latest Tech advancements and music. I also play sports (mostly cricket). 
      </p>
    );

    const tech_stack = [
      "Python",
      "React.js",
      "Javascript",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Data Science",
      "Data Analysis",
      "Data Visualization",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Gazi Jarin" src={"/assets/me4.jpg"} />
            <style>
              {`
                .about-image img {
                  width: 300px;
                  height: 430px;
                  object-fit: cover;
                  border-radius: 15px;
                }
              `}
            </style>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

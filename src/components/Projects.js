import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "No Man's Land": {
        title: "Satarthub-ai",
        desc:
          "An application developed to connect passionate founders, help them open source their ideas and connect them to VCs",
        techStack: "Javascript, ML",
        link: "https://github.com/Johanabhishek/Starthub-ai",
        open: "https://starthub-ai.vercel.app/",
        image: "/assets/starthub.png"
      },
      Truth: {
        title: "fintraq",
        desc:
          "A full stack project to let you track your finances and help you become more financially efficient.",
        techStack: "Javascript",
        link: "https://github.com/Johanabhishek/Fintrack",
        open: "https://fintrack-47ad.vercel.app/dashboard",
        image: "/assets/fintraq.png"
      },
      "Tall Tales": {
        title: "trading signal generator powered by AI",
        desc:
          "A trading signal generator using AI.",
        techStack: "ML, jupyter notebook",
        link: "https://github.com/Johanabhishek/AI-POWERED-STOCK-TRADING-SIGNAL",
        open: "https://github.com/Johanabhishek/AI-POWERED-STOCK-TRADING-SIGNAL/blob/main/AI%20POWERED%20STOCK%20TRADING%20SIGNAL-checkpoint.ipynb", 
        image: "/assets/signalgenerator.png"
      },
      Portfolio: {
        title: "News analyser with text-to-speech",
        desc:
          "A news analyser with text to speech conversion model (in hindi)  in jupyter notebook",
        techStack: "Python, jupyter notebook",
        link: "https://github.com/Johanabhishek/news_sentiment_tts",
        image: "/assets/tts.png"
      }
    };
    const projects = {
      "HDFC BANK STOCK ANALYSIS": {
        desc:
          "A data science project to analyse the stock market of hdfc bank over two decades.",
        techStack: "Python, machine learning.",
        link: "https://github.com/Johanabhishek/HDFC-stock-analysis",
        open: "https://github.com/Johanabhishek/HDFC-stock-analysis/blob/main/HDFC%20stock%20analysis.ipynb"
      },
      "ICICI BANK STOCK ANALYSIS.": {
        desc:
          "A data science project to analyse the stock market of ICICI bank over two decades.",
        techStack: "Python, machine learning.",
        link: "https://github.com/Johanabhishek/ICICI-Bank-stock-analysis",
        open: "https://github.com/Johanabhishek/ICICI-Bank-stock-analysis/blob/main/ICICI%20BANK%20stock%20analysis%20.ipynb"
      },
      /*"Distributed Logging and Monitoring System": {
        desc:
          "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link:
          "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System"
      },
      "Odin Bot": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "https://github.com/gazijarin/OdinBot",
        open: ""
      },
      "Game Centre": {
        desc:
          "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
        techStack: "Java, Android Studio",
        link: "https://github.com/gazijarin/gamecentre",
        open: ""
      },
      "Minimax Stonehenge": {
        desc:
          "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
        techStack: "Python",
        link: "https://github.com/gazijarin/stonehenge",
        open: ""
      }*/
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

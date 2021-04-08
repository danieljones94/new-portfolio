import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PortfolioCarousel from "./components/Carousel";
import TitleMessage from "./components/TitleMessage";
import AboutPage from "./components/pages/AboutPage";
import SkillsPage from "./components/pages/SkillsPage";
import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
import Slide from "react-reveal/Slide";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: "Daniel Jones",
        interests: [
          "Web Developer",
          "Agile Fan",
          "Design Lover",
          "Awful Golfer",
        ],
      },
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PortfolioCarousel />
        <TitleMessage info={this.state.info} />
        <Container className="container-box rounded">
          <Fade duration={500}>
            <AboutPage theme={this.props.theme} />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <SkillsPage />
          </Slide>
        </Container>
      </div>
    );
  }
}

export default App;

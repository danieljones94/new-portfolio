import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PortfolioCarousel from "./components/Carousel";
import TitleMessage from "./components/TitleMessage";
import AboutPage from "./components/pages/AboutPage";

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
        <AboutPage theme={this.props.theme} />
      </div>
    );
  }
}

export default App;

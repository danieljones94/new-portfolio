import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PortfolioCarousel from "./components/Carousel";
import TitleMessage from "./components/TitleMessage";

class App extends React.Component {
  state = {
    info: {
      name: "Daniel Jones",
      interests: ["Web Developer", "Agile Fan", "Design Lover"],
    },
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <PortfolioCarousel />
        <TitleMessage info={this.state.info} />
      </div>
    );
  }
}

export default App;

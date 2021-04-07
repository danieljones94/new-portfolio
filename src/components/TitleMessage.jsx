import React from "react";
import Typewriter from "typewriter-effect";
import CustomTitle from "./CustomTitle";
import styled from "styled-components";
import "../styles/TitleMessage.css";

const TitleMessage = (props) => {
  return (
    <CustomTitle>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            <span>
              <strong>{props.info.name}</strong>
            </span>
          </div>
          <div className="sub">
            <strong>
              <Typewriter
                className="typed-interest"
                options={{
                  strings: [
                    `${props.info.interests[0]}`,
                    `${props.info.interests[1]}`,
                    `${props.info.interests[2]}`,
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </strong>
          </div>
        </div>
      </div>
    </CustomTitle>
  );
};

export default TitleMessage;

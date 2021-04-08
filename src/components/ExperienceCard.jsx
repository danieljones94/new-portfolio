import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";

import "../styles/ExperienceCard.css";

const ExperienceCard = (props) => {
  return (
    <div id="experience">
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 10 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                {props.jobInfo.imgSrc.map((img) => {
                  return (
                    <Card.Img
                      variant="top"
                      className="img-resize"
                      src={img}
                      alt="Logo"
                    />
                  );
                })}
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    {props.jobInfo.role}
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Technology:</strong> {props.jobInfo.tech}
                    <br />
                    <strong>Duration:</strong> {props.jobInfo.duration}
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      {props.jobInfo.description.map((experience, index) => {
                        return <li key={index}>{experience}</li>;
                      })}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ExperienceCard;

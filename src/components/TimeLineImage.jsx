import React from "react";
import { UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../styles/TimeLineImage.css";

const TimeLineImage = () => {
  return (
    <ImageEvent
      date="01/10/2020"
      className="text-center"
      text="React ToDo App"
      src=""
      alt="React ToDo App"
    >
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>
          <Accordion>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="p-2 text-center accordian-main"
              >
                PROJECT DETAILS
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0" className="text-left">
                <Card.Body>
                  <strong>Description:</strong> {/*Needs to be completed*/}
                  <hr />
                  <strong>Features:</strong>
                  <ul className="list-styles pt-1">
                    {/*Needs to be completed*/}
                  </ul>
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
                    {/*Needs to be completed - map function for each icon associated with project*/}
                    <li>
                      <span className="p-2">
                        <Image
                          src=""
                          alt="HTML 5"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        HTML5
                      </span>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div
          id="project-buttons-container"
          className="d-flex justify-content-between flex-nowrap text-center"
        >
          <UrlButton className="project-button" href="" target="_blank">
            SEE LIVE
          </UrlButton>
          <UrlButton className="project-button" href="" target="_blank">
            SOURCE CODE
          </UrlButton>
          <UrlButton className="project-button" href="" target="_blank">
            WATCH VIDEO
          </UrlButton>
        </div>
      </div>
    </ImageEvent>
  );
};

export default TimeLineImage;

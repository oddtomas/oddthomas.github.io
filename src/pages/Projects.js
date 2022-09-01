import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import weebCoin from "../pictures/weebcoin.png";
import bookGenerator from "../pictures/bookGenerator.png";

const Projects = (props) => {
  return (
    <>
      <div className="projectCard">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Weeb Coin</CardTitle>
          </CardBody>
          <img width="100%" src={weebCoin} alt="weeb coin" />
          <CardBody>
            <CardText>
              A beginner friendly crypto portfolio app, with CRUD functionality,
              external API, and relational database. Users can sign up and
              manage their own portfolios. Add coins, update assets, delete
              assets, and learn about crypto!
            </CardText>
            <a
              href="https://sleepy-cove-85300.herokuapp.com/"
              target="_blank"
              className="cardLink"
            >
              Website
            </a>
            <a
              href="https://github.com/Weeb-Developers/Weeb-Coin"
              target="_blank"
              className="cardLink"
            >
              Code
            </a>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">SADA-U Book Generator</CardTitle>
          </CardBody>
          <img width="100%" src={bookGenerator} alt="book generator" />
          <CardBody>
            <CardText>
              An AI text and image generator application that takes a users prompt, send its to a backend Flask server which feeds the prompt to the text and image generations models and uploads the images with the text attached as metadata to a google cloud storage bucket. Pubsub is used to listen for changes and trigger a callback on the front-end to look for the new items in the bucket and display them. Users can also download the finished book as a PDF.
            </CardText>
            <a
              href="https://github.com/oddtomas/streamlit"
              target="_blank"
              className="cardLink"
            >
              Front-end Code
            </a>
            <a
              href="https://github.com/ertrtx/backend-bookgenerator"
              target="_blank"
              className="cardLink"
            >
              Back-end Code
            </a>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Projects;

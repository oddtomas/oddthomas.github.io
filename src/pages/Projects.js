import React from "react";
import { Card, CardText, CardBody, CardLink, CardTitle } from "reactstrap";
import weebCoin from "../pictures/weebcoin.png";

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
            <CardLink
              href="https://sleepy-cove-85300.herokuapp.com/"
              target="_blank"
              className="cardLink"
            >
              Website
            </CardLink>
            <CardLink
              href="https://github.com/Weeb-Developers/Weeb-Coin"
              target="_blank"
              className="cardLink"
            >
              Code
            </CardLink>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Projects;

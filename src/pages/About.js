import React, { Component } from "react";
import Resume from "../pictures/Resume.png";
import resumePDF from "./updatedResume.pdf";

// Function will execute on click of button
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch(resumePDF).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "ThomasResume.pdf";
      alink.click();
    });
  });
};
class About extends Component {
  render() {
    return (
      <div>
        <div className="experience">
          <button class="button-54" role="button" onClick={onButtonClick}>
            Download PDF
          </button>
        </div>
        <img
          src={Resume}
          // alt="react logo"
          // height="50"
          // width="50"
          className="resume"
        ></img>
      </div>
    );
  }
}
export default About;

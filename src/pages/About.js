import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="page">
        <p class="about">
          Hi I'm Thomas, a web developer with a passion for clean, creative, and
          efficient code based out of Riverside County, CA. I am transitioning
          from the medical field in the Army where problem solving was my day to
          day job so I felt like the transition to programming was very natural.
          In a way I'm still just solving problems for people, going from
          physical and mental support to a broader scale of support through
          coding and creating. Like medicine, coding is never ending journey of
          change and learning.
        </p>
        <div class="extra">
          <p>Skills: JS, HTML, CSS, JEST, REACT, RAILS, POSTGRESQL</p>
          <p>Education: Masters in Computer Science at CSUF (pending)</p>
          <p>Reach me at: oddthomas@csu.fullerton.edu</p>
        </div>
        {/* -who you are
        - photo
        -what kind of work I do
        -specialized developer skills
        -contact info
        -how you want to brand yourself */}
      </div>
    );
  }
}

export default About;

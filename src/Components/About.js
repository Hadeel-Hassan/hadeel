import React, { Component } from "react";
import Fade from "react-reveal";
import Avatar from '@material-ui/core/Avatar';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade top duration={1000}>
          <div className="row">
            <div className="five columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <div className="seven columns main-col">
              <h1><span>About Me</span></h1>

              <p>{bio}</p>
              <p>Check out my earned certificates by clicking on it:</p>
              <div className="columns download">
                <ul className="row">
                  <a href="https://confirm.udacity.com/JA35U66C" target="_blank">
                    <Avatar alt="comptia security+" src="images/udacity.png" className="badges" />
                  </a>
                  <a href="https://confirm.udacity.com/CHVDVADJ" target="_blank">
                    <Avatar alt="comptia security+" src="images/udacity.png" className="badges" />
                  </a>
                  <a href="https://www.credly.com/badges/839a4d68-9f58-4621-8e19-1e137a621a69/public_url" target="_blank">
                    <Avatar alt="comptia security+" src="images/security.png" className="badges" />
                  </a>
                  <a href="https://www.credly.com/badges/9242206b-c061-488b-9601-a53b0f3b4c34/public_url" target="_blank">
                    <Avatar alt="comptia cysa+" src="images/cysa.png" className="badges" />
                  </a>
                  <a href="https://www.credly.com/badges/6743988f-d569-4fa1-bc69-50d77fa7eb05/public_url" target="_blank">
                    <Avatar alt="comptia pentest+" src="images/pentest.png" className="badges" />
                  </a>
                </ul>
                <p>
                  <a href={resumeDownload} target="_blank" className="button row">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

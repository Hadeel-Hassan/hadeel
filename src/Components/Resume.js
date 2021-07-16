import React, { Component } from "react";
import Slide from "react-reveal";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <TimelineItem className="timeline-item">
          <TimelineOppositeContent>
            <Typography color="textSecondary" className="duration">{work.duration}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div key={work.company} className="experience">
              <h4>{work.company}</h4>
              <p className="info">
                {work.title}
              </p>
              <p>{work.description}</p>
              <a href={work.certificate} target="_blank" className="training" >
                View Training Certificate
              </a>
            </div>
          </TimelineContent>
        </TimelineItem>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      return (
        <li>
          <Grid container>
            <Grid item xs={2}>
              <Grid item>
                <Avatar alt="comptia security+" src={skills.skill_icon} className="skill_icon" />
                <p className="skill_name">{skills.name}</p>
              </Grid>
            </Grid>
          </Grid>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <Timeline className="timeline">
                {work}
              </Timeline>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>



        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col" style={{ width: "90%" }}>
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;

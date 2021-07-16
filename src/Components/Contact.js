import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
      success: false
    }
  }



  render() {


    if (!this.props.data) return null;

    const name = this.props.data.name;
    const email = this.props.data.email;
    const location = this.props.data.location;
    const nationality = this.props.data.nationality;
    const birth_date = this.props.data.birth_date;
    const message = this.props.data.contactmessage;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="twelve columns">
              <h2 className="contact-msg">{message}</h2>
            </div>
          </div>
        </Fade>

        <div className="row">


          <Slide left duration={1000}>
            <aside className="five columns footer-widgets">

              <div className="widget widget_contact">
                <h4>Personal Information</h4>
                <p className="address">
                  <b className="labels">Full Name:</b><span>&nbsp;&nbsp;</span>{name}
                  <br />
                  <b className="labels">Location:</b><span>&nbsp;&nbsp;</span>{location}
                  <br />
                  <b className="labels">Nationality:</b><span>&nbsp;&nbsp;</span>{nationality}
                  <br />
                  <b className="labels">Email:</b><span>&nbsp;&nbsp;</span>{email}
                  <br />
                </p>

              </div>
            </aside>
          </Slide>
          <Slide left duration={1000}>
            <aside className="five columns footer-widgets">
              <h4>Contact Me</h4>
              <ul className="social-links">{networks}</ul>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;

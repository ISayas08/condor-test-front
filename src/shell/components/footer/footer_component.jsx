import React from "react";
import logo from "./../../../assets/img/handy-logo.png";
import { ReactComponent as FacebookLogo } from "./../../../assets/icons/social/facebook.svg";
import { ReactComponent as Twitter } from "./../../../assets/icons/social/twitter.svg";
import { ReactComponent as Linkedin } from "./../../../assets/icons/social/linkedin.svg";
import "./footer_component.scss";

export const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <img className="footer__logo" src={logo} alt="Handy" />
        <p className="footer__description">
          Our passion is that our customers receive what they need, at the time
          they need it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Quos, adipisci odio. Unde ipsam, adipisci vero, dolores molestiae quo
          voluptas tenetur non error doloribus quisquam.
        </p>
      </div>

      <div className="footer__section footer__section--contact">
        <h4 className="footer__title">Don't be shy</h4>
        <p className="footer__description">
          Send us your comments. Your opinion is important to us.
        </p>
        <div className="footer__field-box">
          <textarea className="footer__field footer__field--area" />
          <div className="footer__line" />
        </div>
      </div>

      <div className="footer__section footer__section--social">
        <div className="footer__box">
          <FacebookLogo className="footer__icon" />
          <Twitter className="footer__icon" />
          <Linkedin className="footer__icon" />
        </div>
      </div>
    </div>
  );
};

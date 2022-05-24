import React from "react";
import { Link } from "react-router-dom";
import { company, socialMedias, supports } from "../../constants/FooterData";
import { email, paperAirPlaneDark } from "../../constants/Icons";
import { DevHubLogoLight } from "../../constants/Images";
import CustomIcon from "../CustomIcon/CustomIcon";
import Button from "../Button/Button";

import "./Footer.css";

const Footer = () => {
  const handleOnSend = () => {};
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="left__container">
          <div className="logo">
            <img src={DevHubLogoLight} alt="DevHub-logo" />
            <h2>DevHub</h2>
          </div>
          <div className="social__media__links">
            {socialMedias.map((socialMedia, index) => {
              return (
                <CustomIcon
                  key={index}
                  iconSrc={socialMedia.iconSrc}
                  link={socialMedia.link}
                />
              );
            })}
          </div>
        </div>

        <div className="right__container">
          <div>
            <h3>Support</h3>
            <ul>
              {supports.map((support, index) => {
                return (
                  <li className="link" key={index}>
                    <Link to={support.link}>{support.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="company">
            <h3>Company</h3>
            <ul>
              {company.map((item, index) => {
                return (
                  <li className="link" key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter to get weekly updates on our product,
              news & special offers.
            </p>
            <div className="newsletter__form">
              <img className="emailIcon" src={email} alt="email" />
              <input type={"email"} placeholder="Enter your email" />
              <Button
                customStyle={{ padding: "0.55rem   1rem" }}
                label={"Send"}
                renderIconRight={true}
                iconSrc={paperAirPlaneDark}
                onClick={handleOnSend}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="copyRight__container">
        <p>&copy; 2022 SoftWeb Technologies. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com/6packprogrammer">
          <AiFillYoutube />
        </a>
        <a href="https://www.linkedin.com/in/vishal-kumar-252588219/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/1212vishal">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;

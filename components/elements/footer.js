import React, { useContext } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa/";

import { LayoutContext } from "../shared/context";

export default function Footer() {
  const { sidebarOpen } = useContext(LayoutContext);

  return (
    <footer className={`${sidebarOpen ? "shrink" : ""}`}>
      <div className="social-list">
        <a
          href="https://www.twitter.com/whoisnyl"
          target="_blank"
          className="social-list_icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://ph.linkedin.com/in/nyljn"
          target="_blank"
          className="social-list_icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/whoisnyl"
          target="_blank"
          className="social-list_icon"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

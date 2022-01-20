import React from "react";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/Footer.css";

export default function Footer() {
  const icons = [
    {
      hrefLink: "https://github.com/",
      classFab: "fab fa-github-square fa-3x",
      faIcon: faGithubSquare,
    },
    {
      hrefLink: "https://www.linkedin.com/",
      classFab: "fab fa-linkedin fa-3x",
      faIcon: faLinkedin,
    },
    {
      hrefLink: "https://www.instagram.com/",
      classFab: "fab fa-instagram-square fa-3x",
      faIcon: faInstagramSquare,
    },
    {
      hrefLink: "https://github.com/",
      classFab: "fab fa-twitter-square fa-3x",
      faIcon: faTwitterSquare,
    },
    {
      hrefLink: "https://www.youtube.com/",
      classFab: "fab fa-youtube-square fa-3x",
      faIcon: faYoutubeSquare,
    },
  ];
  return (
    <footer className="text-center ">
      <div>
        <h5>
          Made with ❤️️ by Betty Chen, Brian Smith, Ken Crawford, and Marc
          Negron
        </h5>
      </div>
      <div>
        {icons.map((icon, index) => (
          <a
            className="icon-container"
            key={index}
            href={icon.hrefLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className={icon.classFab}>
              <FontAwesomeIcon className="footer-icons" icon={icon.faIcon} />
            </i>
          </a>
        ))}
      </div>
    </footer>
  );
}

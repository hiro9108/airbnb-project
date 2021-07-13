import React from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterBar = () => {
  return (
    <div className="footer_nav">
      <div className="flex">
        <div>&copy; 2021 Airbnb,Inc.</div>
        <ul className="flex list-disc">
          <li className="ml-6">Privacy</li>
          <li className="ml-6">Terms</li>
          <li className="ml-6">Sitemap</li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="flex mr-5">
          <FontAwesomeIcon icon={faGlobe} size="lg" className="mr-1" />
          <a href="">
            <div>English(CA)</div>
          </a>
        </div>
        <div className="flex mr-5">
          <div className="mr-1">$</div>
          <a href="">
            <div>CAD</div>
          </a>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faFacebookF} size="lg" className="mr-4" />
          <FontAwesomeIcon icon={faTwitter} size="lg" className="mr-4" />
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default FooterBar;

import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div>
            <p>© 2021 Amazon2.0 </p>
          </div>
          <div>
            <p>
              Built with{"  "}
              <span>
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              </span>{" "}
              in India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

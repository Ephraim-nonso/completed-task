import React from "react";
import "./Lower.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faLuggageCart } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Lower() {
  return (
    <div className="footer-section">
      <footer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="home">
            <FontAwesomeIcon icon={faHome} className="fas fa-home" />
            <p>Home</p>
          </div>
        </Link>

        <Link to="/transaction" style={{ textDecoration: "none" }}>
          <div className="activity">
            <FontAwesomeIcon icon={faBars} className="fas fa-bars" />
            <p>Activity</p>
          </div>
        </Link>

        <Link to="/wallet" style={{ textDecoration: "none" }}>
          <div className="wallet">
            <FontAwesomeIcon icon={faWallet} className="fas fa-wallet" />
            <p>Wallet</p>
          </div>
        </Link>

        <Link to="/market" style={{ textDecoration: "none" }}>
          <div className="market">
            <FontAwesomeIcon icon={faLuggageCart} className="fas fa-wallet" />
            <p>Market</p>
          </div>
        </Link>

        <Link to="/earn" style={{ textDecoration: "none" }}>
          <div className="gift">
            <FontAwesomeIcon icon={faGift} className="fas fa-gift" />
            <p>Earn</p>
          </div>
        </Link>
      </footer>
    </div>
  );
}

export default Lower;

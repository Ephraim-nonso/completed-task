import React from "react";
import "./Upper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Upper() {
  return (
    <div className="logo-others">
      <div className="logo">
        <h2>LOGO</h2>
      </div>

      <div className="user-noti">
        <Link to="/user">
          <FontAwesomeIcon icon={faUser} className="fa-user" />
        </Link>

        <Link to="/notification">
          <FontAwesomeIcon icon={faBell} className="fa-bell" />
        </Link>
      </div>
    </div>
  );
}

export default Upper;

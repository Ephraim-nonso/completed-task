import React from "react";
import Activity from "./Activity";
import "./Content.css";

function Content() {
  return (
    <div className="content-section">
      <div className="balance-div">
        <h2>Wallet Balance</h2>
        <h3>Token Balance:</h3>
        <h3>Naira Balance:</h3>
      </div>

      <div className="select">
        <h4>Select Currency:</h4>
        <div className="token">
          <h3>TOKEN</h3>
          <input type="text" id="input-detail" placeholder="0.000000001" />
        </div>

        <div className="btn-div">
          <button>Send</button>
          <button>Receive</button>
        </div>
      </div>

      <div className="recent">
        <h4>Recent Activity</h4>
        <Activity />
      </div>
    </div>
  );
}

export default Content;

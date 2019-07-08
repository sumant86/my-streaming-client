import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/google-auth/GoogleAuth";
class HeadBar extends React.Component {
  render() {
    return (
      <div className="ui clearing">
        <div className="ui secondary  menu">
          <Link to="/" className="item ui">
            <i className="home icon" /> My Streamer
          </Link>

          <div className="right menu">
            <Link to="/" className="item ui">
              <i className="list icon" />
              All Streams
            </Link>
            <GoogleAuth />
          </div>
        </div>
      </div>
    );
  }
}

export default HeadBar;

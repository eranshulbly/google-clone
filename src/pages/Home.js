import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Avatar, Button } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "./Search";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_header">
          <div className="home_headerLeft">
            <Link to="/about">About</Link>
          </div>
          <div className="home_headerRight">
            <Link to="/gmail">Gmail</Link>
            <Link to="/Images">Images</Link>
            <AppsIcon />
            <Avatar />
          </div>
        </div>
        <div className="home_body">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></img>
          <div className="home_inputContainer">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./topbar.css";
import { IoNotificationsOutline, IoSettingsSharp } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";

function Topbar() {
  const style = {fontSize: "1.3rem"};

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">React Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer"> 
            <IoNotificationsOutline style={style} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <GrLanguage style={style}/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <IoSettingsSharp style={style} />
            <span className="topIconBadge">2</span>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;

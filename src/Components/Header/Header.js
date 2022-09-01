import React from "react";
import "./Header.css";
import arb from "./../../Components/Assets/arb.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  return (
    <div className="header_container active">
      <img className="airbnb_logo" src={arb} alt="airbnb_logo" />
      <div className="header_center active">
        <input type="text" className="input_bar" placeholder="search" />
        <div className="search_icon">
          <SearchIcon />
        </div>
      </div>

      <div className="header_right active">
        <div className="host active">
          <button type="submit" className="host_btn">
            Become a Host
          </button>
          <LanguageIcon />
        </div>
        <div className="profile_icons active">
          <MenuIcon />
          <AccountCircleIcon className="account" />
        </div>
      </div>
    </div>
  );
};

export default Header;

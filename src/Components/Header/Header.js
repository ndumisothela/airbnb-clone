import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import arb from "./../../Components/Assets/arb.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import { openModal } from "../../Action/ModalAction";
import Login from "../Login/Login";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandle = () => {
    dispatch(openModal("open", <Login />));
  };
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
        <div className="dropdown">
          <ExpandMoreIcon className="dropbtn" />
          <div className="dropdown_content">
            {userInfo ? (
              <>
                <span>Acount</span>
                <span>Log Out</span>
              </>
            ) : (
              <>
                <span>sign up</span>
                <span onClick={openModalHandle}>Login</span>
              </>
            )}
            <span>Help</span>
          </div>
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

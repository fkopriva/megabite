import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signout } from "../actions/userActions";
import ModalLogin from "../components/modalLogin";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  const [show, setShow] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const pubgMapDetails = useSelector((state) => state.pubgMapDetails);
  const { pubgMap } = pubgMapDetails;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  let headerColor = "black";

  let location = useLocation();

  switch (location.pathname) {
    case "/":
      headerColor = "black";
      break;
    case "/lol":
      headerColor = "#00eeff";
      break;
    case "/pubg":
    case "/pubgAbout":
    case "/pubgMaps":
    case `/pubgMaps/${pubgMap ? pubgMap._id : ""}/`:
      headerColor = "#e0ca5e";
      break;
    case "/valorant":
      headerColor = "#ff4761";
      break;
    default:
      headerColor = "black";
  }
  return (
    <div
      className="row row-header header"
      style={{ backgroundColor: headerColor }}
    >
      <div>
        <img className="small" src="./images/blackwhite1.png" alt="logo"></img>
      </div>
      {/* Menu */}
      <div>
        <Link to="/">HOME</Link>
        <Link to="/lol">LOL</Link>
        <Link to="/pubg">PUBG</Link>
        <Link to="/valorant">VALORANT</Link>
      </div>
      {userInfo ? (
        <div>
          <div className="dropdown">
            <Link to="#">
              {userInfo.name} <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/profile">User Profile</Link>
              </li>
              <li>
                <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <ModalLogin
            show={show}
            handleClose={() => {
              setShow(false);
            }}
          ></ModalLogin>
          <button type="button" onClick={() => setShow(true)}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

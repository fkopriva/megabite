import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

library.add(fab);

export default function Footer() {
  const pubgMapDetails = useSelector((state) => state.pubgMapDetails);
  const { pubgMap } = pubgMapDetails;

  let footerBgColor = "black";
  let footerColor = "white";

  let location = useLocation();

  switch (location.pathname) {
    case "/":
      footerBgColor = "black";
      footerColor = "Black";
      break;
    case "/lol":
      footerBgColor = "#00eeff";
      footerColor = "black";
      break;
    case "/pubg":
    case "/pubgAbout":
    case "/pubgMaps":
    case `/pubgMaps/${pubgMap ? pubgMap._id : ""}/`:
      footerBgColor = "#e0ca5e";
      footerColor = "black";
      break;
    case "/valorant":
      footerBgColor = "#ff4761";
      footerColor = "white";
      break;
    default:
      footerBgColor = "black";
      footerColor = "Black";
  }

  return (
    <div className="footer" style={{ backgroundColor: footerBgColor }}>
      <p style={{ color: footerColor }}>Adéla Foltýnková</p>
      <a
        className="ml-1"
        href="https://www.facebook.com/adela.foltynkova"
        style={{ color: footerColor }}
      >
        <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
      </a>
      <a
        className="ml-1"
        href="https://www.instagram.com/adel.inee/"
        style={{ color: footerColor }}
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
      </a>
      <a
        className="ml-1"
        href="https://www.twitch.tv/adelinn"
        style={{ color: footerColor }}
      >
        <FontAwesomeIcon icon={["fab", "twitch"]} size="2x" />
      </a>
      <a
        className="ml-1"
        href="https://steamcommunity.com/profiles/76561198309879963"
        style={{ color: footerColor }}
      >
        <FontAwesomeIcon icon={["fab", "steam"]} size="2x" />
      </a>
    </div>
  );
}

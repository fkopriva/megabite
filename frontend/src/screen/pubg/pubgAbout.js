import React from "react";
import { Link } from "react-router-dom";
import "../pubg/pubgAbout.css";

export default function pubgAbout() {
  return (
    <div>
      <div className="row"></div>

      <div className="row-pubg">
        <img className="big" src="./images/pubg3.png" alt="PUBG logo" />
      </div>
      <div className="grid-container-content">
        <div class="left-menu-wrap down grid-item">
          <ul className="sidemenu">
            <li>
              <Link className="link" to="pubgScreen">
                MAIN
              </Link>
            </li>
            <li>
              <Link className="link" to="pubgMaps">
                MAPS
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <h2>O HŘE</h2>
          <p>
            PlayerUnknown's Battlegrounds (zkráceně PUBG) je online
            multiplayerová battle royale hra vyvinutá a distribuovaná dceřinou
            společností firmy Bluehole – PUBG Corporation. Je založena na módech
            hry Arma 2, které byly vyvinuty Brendanem "PlayerUnknown" Greenem a
            používaly jako inspiraci film z roku 2000 Battle Royale a rozšířily
            se do samostatné hry pod vedením Greena. Hra byla vydána pro
            Microsoft Windows na známé herní platformě Steam v módu předběžného
            přístupu v březnu 2017. Plná verze hry byla vydána 20. prosince
            2017. Za 6 měsíců od uvedení se prodalo více než deset milionů kopií
            a PUBG drží také rekord v počtu hráčů online na Steamu – v lednu
            roku 2018 byla překročena hranice 3,25 milionů hráčů v jeden den,
            čímž byl překonán rekord hry Dota 2.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

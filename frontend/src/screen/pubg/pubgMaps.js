import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listMaps } from "../../actions/pubgActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import "../pubg/pubgMaps.css";

export default function PubgMaps(props) {
  const mapsList = useSelector((state) => state.mapsList);
  const { loading, error, pubgMaps } = mapsList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMaps());
  }, [dispatch]);
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
              <Link className="link" to="/pubg">
                MAIN
              </Link>
            </li>
            <li>
              <Link className="link" to="/pubgAbout">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>

        <div classname="grid-item">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <ul classname="horizontal-menu">
              {pubgMaps.map((pubgMap) => (
                <li key={pubgMap._id}>
                  <button
                    type="button"
                    onClick={() =>
                      props.history.push(`/pubgMaps/${pubgMap._id}/`)
                    }
                  >
                    <img
                      className="nahled"
                      src={pubgMap.image}
                      alt={pubgMap.name}
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

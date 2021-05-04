import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsMap, listMaps } from "../../actions/pubgActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

export default function PubgMapDetail(props) {
  const pubgMapId = props.match.params.id;

  const pubgMapDetails = useSelector((state) => state.pubgMapDetails);
  const { loading, error, pubgMap } = pubgMapDetails;

  const mapsList = useSelector((state) => state.mapsList);
  const { loading: loadingPubgMaps, error: errorPubgMaps, pubgMaps } = mapsList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsMap(pubgMapId));
    dispatch(listMaps());
  }, [dispatch, pubgMapId]);

  return (
    <div>
      <div className="row">
        <ul className="horizontal-menu">
          {loadingPubgMaps ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            pubgMaps.map((pubgMap) => (
              <li key={pubgMap._id}>
                <button
                  type="button"
                  onClick={() =>
                    props.history.push(`/pubgMaps/${pubgMap._id}/`)
                  }
                >
                  <img
                    className="menuImg"
                    src={`../.${pubgMap.image}`}
                    alt={pubgMap.name}
                  />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <div>
              <p>{pubgMap.name}</p>
            </div>
            <div>
              <img src={`../.${pubgMap.image}`} alt={pubgMap.name} />
            </div>
            <div>
              <p>{pubgMap.description}</p>
            </div>
            <div className="test"></div>
          </div>
        )}
      </div>
    </div>
  );
}

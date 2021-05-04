import React from "react";
import { Link } from "react-router-dom";

function PubgMap(props) {
  const { pubgMap } = props;
  return (
    <div key={pubgMap._id}>
      <Link to={`/pubgMaps/${pubgMap._id}`}>
        <img className="big" src={pubgMap.image} alt={pubgMap.name} />
      </Link>
      <div>
        <Link to={`/pubgMaps/${pubgMap._id}`}>
          <h2>{pubgMap.name}</h2>
        </Link>
        <div>{pubgMap.description}</div>
      </div>
    </div>
  );
}

export default PubgMap;

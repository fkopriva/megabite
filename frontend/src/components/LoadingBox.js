import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

function LoadingBox() {
  return (
    <div className="loading animation">
      <FontAwesomeIcon icon={["fas", "spinner"]} size="1x" />
    </div>
  );
}

export default LoadingBox;

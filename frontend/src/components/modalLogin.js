import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import { useEffect, useState } from "react";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function Modal(props) {
  const { handleClose, show } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      {" "}
      co to dělá
      <section className="modal-main">
        <div className="close-button">
          <button className="button-cross" type="button" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </button>
        </div>
        <div className="row modal-row">
          <div className="col-1 modal-col">
            <h2 className="h2-modal">Sign In</h2>
            <form className="form" onSubmit={submitHandler}>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button-wrapper">
                <button className="buttonsubmit" type="submit">
                  <FontAwesomeIcon icon={faArrowRight} size="2x" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Modal;

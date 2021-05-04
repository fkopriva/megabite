import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { useState } from "react";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function ModalRegister(props) {
  const { handleClose, registerShow } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div
      className={registerShow ? "modal display-block" : "modal display-none"}
    >
      {" "}
      <section className="modal-main">
        <div className="close-button">
          <button className="button-cross" type="button" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </button>
        </div>
        <div className="grid-modal-container">
          <h2 className="h2-modal">Sign In</h2>
          <form className="form" onSubmit={submitHandler}>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Enter confirm password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="button-wrapper">
              <button className="button" type="submit">
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ModalRegister;

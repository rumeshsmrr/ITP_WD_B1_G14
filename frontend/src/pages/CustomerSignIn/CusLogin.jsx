import React, { useState } from "react";
import "./signinStyle.css";
import { Link } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import store from "../../redux/store";

const CusLogin = () => {
  const [username, setCustomerName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  //  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();

    login(dispatch, { username, password });
    console.log(username, password);
  };

  return (
    <Provider store={store}>
      <>
        <div className="login">
          <div className="login-page">
            <div className="login-p1">
              <h1>Welcome.</h1>
              <p className="login-p1-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, quam explicabo debitis molestiae eos assumenda culpa
                omnis voluptatum? Suscipit ea magnam illum laudantium asperiores
                repellendus explicabo voluptatum in id velit.
              </p>
              {/* <h4 className="login-p1-subtopic">login with social media</h4>
            <div className="btn-box">
              <button className="btn f-btn">
                <img src="./images/icon/facebook-app-symbol.png" alt="" />{" "}
              </button>
              <button className="btn s-btn">
                <img src="./images/icon/twitter.png" alt=""/>
                <p> login with twitter</p>
              </button>
            </div> */}
              <br></br>
              <br></br>
              <Link to="/">Back to Home</Link>
            </div>

            <div className="login-p2">
              <h3>Login</h3>
              <p>
                <Link to="/customerSignIn">Don't have a account? </Link>
              </p>

              <form action="#">
                <input
                  className="inputbox"
                  type="text"
                  placeholder="username"
                  id="username"
                  onChange={(e) => setCustomerName(e.target.value)}
                />
                <input
                  className="inputbox"
                  type="password"
                  placeholder="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <div className="form-box2">
                  <div className="box remember">
                    <input type="checkbox" id="remember" />
                    <lable className="lbl-rem">Remember Me</lable>
                  </div>
                  <div className="small-letters">
                    <Link to="#">forgot password?</Link>
                  </div>
                </div> */}
                <button
                  className="submit-btn"
                  type="submit"
                  style={{
                    height: "50px",
                    textAlign: "center",
                  }}
                  onClick={handleLogin}
                  // disabled={isFetching}
                >
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </Provider>
  );
};
export default CusLogin;

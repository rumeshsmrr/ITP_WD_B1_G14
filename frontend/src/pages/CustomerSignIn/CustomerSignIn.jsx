import React from "react";
import "./signinStyle.css";

const CustomerSignIn = () => {
  return (
    <>
      <div className="login">
        <div className="login-page">
          <div className="login-p1">
            <h1>Hello World.</h1>
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
          </div>

          <div className="login-p2">
            <h3>Registration</h3>
            <p></p>

            <form action="#">
              <input
                className="inputbox"
                type="text"
                placeholder="username"
                id="username"
              />
              <input
                className="inputbox"
                type="email"
                placeholder="Email"
                id="email"
              />
              <input
                className="inputbox"
                type="text"
                placeholder="password"
                id="password"
              />
              <div className="form-box2">
                <div>
                  <p>
                    <a href="/cusLogin">Already have Account? </a>
                  </p>
                </div>
                <div className="small-letters"></div>
              </div>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerSignIn;

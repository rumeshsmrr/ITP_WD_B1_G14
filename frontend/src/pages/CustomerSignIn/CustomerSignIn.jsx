import React, { useState } from "react";
import axios from "axios";
import "./signinStyle.css";

const CustomerSignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8070/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
      alert("Registration Success");
    } catch (err) {
      console.error(err);
      alert("Registration Not Success");
    }
  };

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
          </div>

          <div className="login-p2">
            <h3>Registration</h3>
            <p></p>

            <form onSubmit={handleSubmit}>
              <input
                className="inputbox"
                type="text"
                placeholder="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="inputbox"
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="inputbox"
                type="text"
                placeholder="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

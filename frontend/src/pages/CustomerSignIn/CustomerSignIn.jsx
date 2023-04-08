import React from "react";
import "./signinStyle.css";
// import Container from 'react-bootstrap/Container'

export default function CustomerSignIn() {
  return (
    <div className="background">
      <div className="container j_flex">
        <div className=" small_container">
          <h2 className="j_flex">Sign In</h2>
          <form className="h_flex ">
            <input
              type="text"
              placeholder="User Email"
              className="cInput"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );

  // return (
  //   <Container className="small_container">
  //     <Helmet>
  //       <h1 className="my-3">Sign</h1>
  //     </Helmet>
  //   </Container>
  // )
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import Navbar from "./Navbar";
import "./styles/userProfile.css";

export default function Profile() {
  const { _id } = JSON.parse(localStorage.getItem("user"));
  const [user, setUSer] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      axios.get(`/api/user/info/${_id}`).then((res) => {
        console.log("res.data", res.data);
        setUSer(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSave = () => {
    console.log("user>>>", user);

    axios.put(`/api/user/updateProfile/${_id}`, user).then(() => {
      alert("Profile updated successfully");
    });
  };

  const updatePassword = () => {
    if (!user?.newPassword || !user?.newConfirmPassword || !user?.currentPsw) {
      alert("Please fill all the fields");
      return;
    }
    if (user?.newPassword !== user?.newConfirmPassword) {
      alert("Password and confirm password should be same");
      return;
    }
    axios
      .put(`/api/user/updatePassword/${_id}`, user)
      .then((res) => {
        console.log("res", res);
        alert(res.data.msg);
      })
      .catch((e) => {
        console.log("e", e);
        alert(e.response.data.msg);
      });
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <Container className="user-profile-container">
        <Row>
          <Col md={12} className="text-center">
            <Image
              src="https://res.cloudinary.com/dl99x/image/upload/v1662162175/Sample_User_Icon_urnlt1.png"
              className="user-profile-avatar"
            />
            <h4>{user?.userName}</h4>
          </Col>
          <Col md={12}>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={user?.name}
                  onChange={(e) => setUSer({ ...user, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={user?.address}
                  onChange={(e) =>
                    setUSer({ ...user, address: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  value={user?.age}
                  onChange={(e) => setUSer({ ...user, age: e.target.value })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={user?.sex}
                  onChange={(e) => setUSer({ ...user, sex: e.target.value })}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>
              <Button variant="warning" onClick={() => setShowModal(true)}>
                Change Password
              </Button>

              <Button variant="primary" onClick={handleSave}>
                Update Changes
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setUSer({ ...user, currentPsw: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) =>
                setUSer({ ...user, newPassword: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) =>
                setUSer({ ...user, newConfirmPassword: e.target.value })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={updatePassword}>
            Update Password
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

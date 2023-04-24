import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/profile.css";

export default function ViewAttendance() {
  //get state values
  const { state } = useLocation();
  const [attendance, setAttendance] = useState();
  const [loading, setLoading] = useState(false);
  const userID = state;

  useEffect(() => {
    try {
      fetchAttendance();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchAttendance = async () => {
    try {
      await axios.get(`api/attendance/${userID}`).then((res) => {
        setAttendance(res.data);
        setLoading(true);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {loading && (
        <div className="container">
          <div className="addUser-card">
            {console.log("att>>>>", attendance)}
            {attendance?.length === 0 ? (
              <h1>No attendance records found</h1>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance?.map((data, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{moment(data.createdAt).format("MMMM Do YYYY")}</td>
                      <td>{moment(data.createdAt).format("h:mm:ss a")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

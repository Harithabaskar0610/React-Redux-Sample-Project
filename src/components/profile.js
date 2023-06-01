import React from "react";
import { useSelector } from "react-redux";
import "../components/login.css";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor}} className="container">
      <h1 className="header" style={{color: "black"}}> Profile Page</h1>
      <div className="para">
      <p > Name: {user.name} </p>
      <p > Age: {user.age}</p>
      <p > Email: {user.email}</p>
      <p >Contact: {user.contact}</p>
      <p >Gender:{user.gender}</p>
      </div>
    </div>
  );
}

export default Profile;
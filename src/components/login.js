import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import "../components/login.css";

function Login() {
  const dispatch = useDispatch();

  return (
    <div className="button">
      <button className="button1"
        onClick={() => {
          dispatch(login({ name: "Haritha", age: 23, email: "haritha@gmail.com" , contact: 9876543210, gender: "Female", }));
        }}
      >
        LOGIN
      </button>

      <button className="button2"
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Login;
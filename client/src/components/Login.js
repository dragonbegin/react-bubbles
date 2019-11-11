import React, { useState } from "react";
import api from "../utils/api";

function Login(props) {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post("/api/login", data)
      .then(result => {
        window.localStorage.setItem('token', result.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="password"
          />
          <button type="submit">Submit</button>
        </form>
    </>
  );
}

export default Login;


import React, { useState } from "react";
import MainContext from "./MainContext";

const baseUrl = 'http://localhost:5000';
// const baseUrl = 'https://school-backend-siwz.onrender.com'

const MainState = (props) => {
  const [user, setUser] = useState({})

  const login = async ({ email, password }) => {
    const resp = await fetch(`${baseUrl}/user/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await resp.json();
    // setUser(data);
    return data;
  };

  const register = async ({ name, phone, email, password }) => {
    const resp = await fetch(`${baseUrl}/user/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, phone, email, password })
    });
    const data = await resp.json();
    return data;
  };

  return (
    <MainContext.Provider value={{ login, register,user,setUser }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

import React, { useState } from "react";
import MainContext from "./MainContext";

// const baseUrl = 'http://localhost:5000';
const baseUrl = 'https://school-backend-siwz.onrender.com'

const MainState = (props) => {
  const [user, setUser] = useState({});
  const [student,setStudent] = useState({});
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

  const StudentLogin = async ({ email, password }) => {
    const resp = await fetch(`${baseUrl}/student/login`, {
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

  const sendOtp = async ({ email }) => {
    const resp = await fetch(`${baseUrl}/user/sendOtp`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('dolibo_token')
      },
      body: JSON.stringify({ email })
    });
    const data = await resp.json();
    // console.log(data);
    return data;
  };

  const submitOtp = async ({ otp, otp1 }) => {
    const resp = await fetch(`${baseUrl}/user/submitOtp`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('dolibo_token')
      },
      body: JSON.stringify({ otp, otp1 })
    });
    const data = await resp.json();
    return data;
  };

  const changePassword = async ({ email, password }) => {
    const resp = await fetch(`${baseUrl}/user/changePassword`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('dolibo_token')
      },
      body: JSON.stringify({ email, password })
    });
    const data = await resp.json();
    return data;
  };

  const resetPassword = async ({ userId, password }) => {
    const resp = await fetch(`${baseUrl}/user/resetPassword/${userId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('dolibo_token')
      },
      body: JSON.stringify({ password })
    });
    const data = await resp.json();
    return data;
  };

  return (
    <MainContext.Provider value={{ login, register,user,setUser,StudentLogin,student,setStudent,sendOtp,submitOtp,changePassword,resetPassword }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //   const [splashLoading, setSplashLoading] = useState(false);

  const login = async (username, password) => {
    // let UserID = username;
    // let Password = password;
    // const url = `${BASE_URL}/users/login/`;
    // axios
    //   .post(url, { UserID, Password })
    //   .then((res) => {
    //     let userInfo = res.data;
    //     console.log(userInfo);
    //     setUserInfo(userInfo);
    //     // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    //     // setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     console.log(`login error ${e}`);
    //     // setIsLoading(false);
    //   });

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post("http://127.0.0.1:8080/api/testing", { headers });
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};

import React, { useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";
import {UserContext} from "../App";

const Logout = () => {
  const {state,dispatch} = useContext(UserContext);
  const history = useHistory();
  const logoutFn = async () => {
      
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(res)
      if(res.status===201){
        dispatch({type:"USERVALID",payload:false}) 
          history.push("/login")
      }
   
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    logoutFn();
  }, []);
  return (
    <>
    <form method="GET">
      <div>logout</div>
    </form>

    </>
  );
};

export default Logout;

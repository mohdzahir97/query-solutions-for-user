import React,{useEffect,useState,useContext} from "react";
import {UserContext} from "../App";

const Home = () => {
  const {state,dispatch}= useContext(UserContext);
  const [nameUser, setnameUser] = useState({
    name:""
  });
  const [show, setshow] = useState(false);

  const homeDataFun=async ()=>{
    try {
      const res=await fetch("/contactData",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
        
      })
      const data=await res.json();
      console.log(data.name);
      if(!data){
        res.status(401).send({error:"Not Receive User Name"});
      }
      if(res.status===201){
        dispatch({type:"USERVALID",payload:true}) 
        setnameUser({name:data.name});
        setshow(true);
      }
     
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    homeDataFun();
  }, [])

  return (
    <>
    <form method="GET">
    <div className="home-page-content  mt-lg-5 pl-3 pr-3" style={{textAlign:"center"}}>
        <div className="home-page-msg">
            <h3>Welcome To The Home Page.</h3>

        </div>
        <div className="home-page-heading-msg" >
            <h1>{show===true? nameUser.name :"We Are MERN DEVELOPER"}</h1>
        </div>

    </div>
    </form>

    </>
  );
};

export default Home;

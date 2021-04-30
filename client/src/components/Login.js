import React,{useState,useContext} from "react";
import {NavLink,useHistory} from "react-router-dom";
import loginlogo3 from "../imagespro/loginlogo3.jpg";
import {UserContext} from "../App";
const Login = () => {
  const {state,dispatch} = useContext(UserContext);
  const history = useHistory();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const loginUser=async(e)=>{
    e.preventDefault()
    const res=await fetch("/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    console.log(res)
    const data=await  res.json();
   
    if(res.status===400 || !data){
      window.alert("Invalid Credential");
    }else{
      // console.log(res.status===404 ,"data display")
      // console.log(false||false)
      dispatch({type:"USERVALID",payload:true})    
      window.alert("Login SuccessFully.");  
      history.push("/")
    }


  }
  return (
    <>
    <div className="container">
      <div
        className="shadow-lg p-3 mb-5 bg-body rounded offset-md-2 mt-5 w-auto h-auto col-md-8"
      >
       <div className="row">
       <div className="col-6">
         <img src={loginlogo3} alt="loginImg"
                    className="w-100 h-100"/>
       </div>
       <div className="col-6">
        <form method="POST">
          <div className="form-row">
            <div className="form-group ">
              <h1>SignIn</h1>
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="form-group ml-3">
              <label htmlFor="email">
                <i className="zmdi zmdi-email"></i>
              </label>
            </div>
            <div className="form-group ">
              <input
                type="email"
                className="form-control border-top-0 border-left-0 border-right-0"
                id="email" name="email"
               autoComplete="off" placeholder="Enter Your Email"
               value={email}
               onChange={(e)=> setemail(e.target.value) } 
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="form-group ml-3">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock"></i>
              </label>
            </div>
            <div className="form-group ">
              <input
                type="password"
                className="form-control border-top-0 border-left-0 border-right-0"
                id="password" name="password" placeholder="Enter Your Password" autoComplete="off"
                value={password}
               onChange={(e)=> setpassword(e.target.value) } 
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="form-group ml-3">
              <button type="submit" className="btn btn-primary" onClick={loginUser}>
                Sign in
              </button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
                <u>
              <NavLink className="nav-link" to="/signup">Create an account?</NavLink>      
                </u>
            </div>
          </div>
        </form>
        </div>
       </div>

      </div>
    </div>

    </>
  )
}

export default Login

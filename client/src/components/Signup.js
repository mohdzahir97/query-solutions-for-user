import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import registrationlogo1 from "../imagespro/registrationlogo1.jpg";
const Signup = () => {
  const history = useHistory();
  const [user, setuser] = useState({
    name: "",
    email: "",
    mobile: "",
    job: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const InputData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, mobile, job, password, cpassword } = user;
    try {
      const res = await fetch('/user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          job,
          password,
          cpassword
        })
      })
      
      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("Invalid Registration");
      } else {
        window.alert("Registration Successfully...");
        history.push("/")
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="shadow-lg p-3 mb-5 bg-body rounded offset-md-2 mt-3 w-auto h-auto col-md-8">
        <div className="row">
        <div className="col-6">
         <img src={registrationlogo1} alt="RegistrationImg"
                    className="w-100 h-100"/>
       </div>
       <div className="col-6">
          <div className="container text-center">
            <form method="POST">
              <div className="form-row">
                <div className="form-group">
                  <h3>SignUp</h3>
                </div>
              </div>
              <div className="form-row mt-2">
                <div className="form-group ml-3">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account"></i>
                  </label>
                </div>
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control border-top-0 border-left-0 border-right-0"
                    id="name"
                    name="name"
                    autoComplete="off"
                    placeholder="Your name"
                    value={user.name}
                    onChange={InputData}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group ml-3">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                </div>
                <div className="form-group ">
                  <input
                    type="email"
                    className="form-control border-top-0 border-left-0 border-right-0"
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder=" Your Email"
                    value={user.email}
                    onChange={InputData}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group ml-3">
                  <label htmlFor="mobile">
                    <i className="zmdi zmdi-phone-bluetooth"></i>
                  </label>
                </div>
                <div className="form-group ">
                  <input
                    type="phone"
                    className="form-control border-top-0 border-left-0 border-right-0"
                    id="mobile"
                    name="mobile"
                    placeholder="Your mobile"
                    autoComplete="off"
                    value={user.mobile}
                    onChange={InputData}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group ml-3">
                  <label htmlFor="job">
                    <i className="zmdi zmdi-slideshow"></i>
                  </label>
                </div>
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control border-top-0 border-left-0 border-right-0"
                    id="job"
                    name="job"
                    placeholder="Your Profession"
                    autoComplete="off"
                    value={user.job}
                    onChange={InputData}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group ml-3">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                </div>
                <div className="form-group ">
                  <input
                    type="password"
                    className="form-control border-top-0 border-left-0 border-right-0"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    autoComplete="off"
                    value={user.password}
                    onChange={InputData}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group ml-3">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                </div>
                <div className="form-group ">
                  <input
                    type="password"
                    className="form-control border-top-0 border-left-0 border-right-0"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Your Confirm Password"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={InputData}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group ml-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={postData}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <u>
                    <NavLink className="nav-link " to="/login">
                      Login page
                    </NavLink>
                  </u>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

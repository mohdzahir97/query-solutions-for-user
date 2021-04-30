import React, { useState, useEffect,useContext } from "react";
import {UserContext} from "../App";
const Contact = () => {
  const {state,dispatch}= useContext(UserContext);

  const [userContact, setuserContact] = useState({
    name: "",
    email: "",
    mobile: "",
    message:""
  });
  
  const contactDataRet = async () => {
    try {
      const res = await fetch("/contactData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data.name)
      setuserContact({...userContact,name:data.name,email:data.email,mobile:data.mobile});
      if (!res.status === 200) {
        throw new Error(res.error);
      }else if(res.status===201){
        dispatch({type:"USERVALID",payload:true}) 
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    contactDataRet()
  }, []);


  let name, value;
  const contactInputData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuserContact({ ...userContact, [name]: value });
  };

  const contactSaveData= async(e)=>{
    e.preventDefault();
    const {name,email,mobile,message}=userContact;
    try {

      const res=await fetch("/contact",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          }, 
          body:JSON.stringify({
            name,email,mobile,message
          })
      })

      const data=await res.json();
      console.log(data+"hello")
      if(!data){
        alert("contact data unsuccessfuuly save");
        res.status(401).json({err:"contact data unsuccessfuuly save"});
      }else{
       
        alert("contact data successfuuly save");
        setuserContact({ ...userContact,message:""});
      }
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <>
      <div className="container">
        <div className="shadow-lg p-3 mb-3 bg-body rounded mt-5 w-auto h-auto col-md-12">
          <div className="row">
            <div className="form-group col-md-4">
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <div className="contact-info-content">
                  <div className="contact-info-title">
                    <b>Phone</b>
                  </div>
                  <div className="contact-info-text">{userContact.mobile}</div>
                </div>
              </div>
            </div>

            <div className="form-group col-md-4">
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <div className="contact-info-content">
                  <div className="contact-info-title">
                    <b>Email</b>
                  </div>
                  <div className="contact-info-text">{userContact.email}</div>
                </div>
              </div>
            </div>

            <div className="form-group col-md-4">
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <div className="contact-info-content">
                  <div className="contact-info-title">
                    <b>Adress</b>
                  </div>
                  <div className="contact-info-text">{userContact.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="shadow-lg p-3 mb-3 bg-body rounded mt-2 w-auto h-auto col-md-12">
          <form method="POST">
            <div>
              <h1>Get in Touch</h1>
            </div>
            <div className="form-row mt-2">
            <div className="form-group col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={userContact.name}
                  onChange={contactInputData}
                  placeholder="name"

                />
              </div>

              <div className="form-group col-md-4">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={userContact.email}
                  onChange={contactInputData}
                  placeholder="Email"

                />
              </div>

              <div className="form-group col-md-4">
                <input
                  type="phone"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={userContact.mobile}
                  onChange={contactInputData}
                  placeholder="Phone"

                />
              </div>
           

        
            </div>
            <div className="form-row mt-2">
              <div className="form-group  col-md-12">
                <input
                  type="text"
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Your Adress"
                  value={userContact.message}
                  onChange={contactInputData}
                />
              </div>
            </div>

            <div className="form-row ml-2">
              <div className="form-group ">
                <button type="submit" onClick={contactSaveData} className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

/* <div
        classNameName="shadow-lg p-3 mb-5 bg-body rounded offset-md-3 mt-3"
        style={{ width: 600, height: 600 }}
      >
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <h1>Get in Touch</h1>
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="form-group ml-3">
              <label htmlFor="name">
                <i class="zmdi zmdi-account"></i>
              </label>
            </div>
            <div className="form-group col-md-7">
              <input
                type="text"
                className="form-control border-top-0 border-left-0 border-right-0"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group ml-3">
              <label htmlFor="email">
                <i class="zmdi zmdi-email"></i>
              </label>
            </div>
            <div className="form-group col-md-7">
              <input
                type="email"
                className="form-control border-top-0 border-left-0 border-right-0"
                id="email"
                name="email"
                autoComplete="off"
                placeholder=" Your Email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group ml-3">
              <label htmlFor="mobile">
                <i class="zmdi zmdi-phone-bluetooth"></i>
              </label>
            </div>
            <div className="form-group col-md-7">
              <input
                type="phone"
                className="form-control border-top-0 border-left-0 border-right-0"
                id="mobile"
                name="mobile"
                placeholder="Your mobile"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group ml-3">
              <button type="submit" class="btn btn-primary">
                Sign in
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
      </div> */

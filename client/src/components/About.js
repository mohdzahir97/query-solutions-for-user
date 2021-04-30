import React, { useState,useEffect } from "react";
import profile_img from "../imagespro/zh_logo.png";
import Profiletimeline from "./Profiletimeline";
import Profileabout from "./Profileabout";
const About = () => {
  const [aboutData, setaboutData] = useState({});
  const [indexTab, setindexTab] = useState(1);
  const TabIndex = (indx) => {
    console.log(indx);
    setindexTab(indx);
  };

  const aboutDataRet = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      const data = await res.json();
      setaboutData(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
     
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    aboutDataRet();
  }, []);
  return (
    <>
      <div className="container">
        <div className="shadow-lg p-3 mb-5 bg-body rounded mt-3 w-auto h-auto col-lg-12">
          <form action="">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-user-img">
                  <img
                    src={profile_img}
                    alt="profileImg"
                    className="w-25 h-25"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <h5>{aboutData.name}</h5>
                  <h6>{aboutData.job}</h6>
                  <p className="profile-rating-rate">
                    Ranking:{" "}
                    <b>
                      <span>09/10</span>
                    </b>
                  </p>

                  {/* tab */}
                  <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                      <div
                        className="nav-link active"
                        id="ex1-tab-1"
                        data-mdb-toggle="tab"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected="true"
                        onClick={() => TabIndex(1)}
                      >
                        About
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div
                        className="nav-link"
                        id="ex1-tab-2"
                        data-mdb-toggle="tab"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected="false"
                        onClick={() => TabIndex(2)}
                      >
                        TimeLine
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="profile-edit-btn-div">
                  <input
                    type="submit"
                    className="profile-edit-btn btn-success border-none"
                    name="profileAddMore"
                    value="Edit Profile"
                    onClick={() => alert("Profile Edited")}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-4">
                <div className="profile-user-link">
                  <h4>Work Link</h4>
                  <a href="https://www.google.com/" target="_blanck">
                    YouTuber
                  </a>
                  <br />
                  <a href="https://www.google.com/" target="_blanck">
                    Instagram
                  </a>
                  <br />
                  <a href="https://www.google.com/" target="_blanck">
                    Facebook
                  </a>
                  <br />
                  <a href="https://www.google.com/" target="_blanck">
                    Tweeter
                  </a>
                  <br />
                  <a href="https://www.google.com/" target="_blanck">
                    Linkedin
                  </a>
                  <br />
                  <a href="https://www.google.com/" target="_blanck">
                    ZHChannel
                  </a>
                  <br />
                  <a href="https://www.google.com/" target="_blanck">
                    ZHGitHubWebsite
                  </a>
                  <br />
                </div>
              </div>

              <div className="col-md-8 pl-5">
                <div className="tab-content" id="ex1-content">
                  {/*  Comp Profile About  */}
                  {indexTab === 1 ?
                  
                      <Profileabout {...aboutData}/>
                
                    : null}
                  {indexTab === 2 ? <Profiletimeline /> : null}

                  {/* Comp Profile Timeline  */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;

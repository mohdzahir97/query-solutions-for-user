import React from "react";

const Profileabout = (props) => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        {/* Tab 1 content */}
        <div className="row">
          <div className="col-md-6">
            <label>User Id</label>
          </div>
          <div className="col-md-6">
            <p>{props.id}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
          </div>
          <div className="col-md-6">
            <p>{props.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
          </div>
          <div className="col-md-6">
            <p>{props.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Phone</label>
          </div>
          <div className="col-md-6">
            <p>{props.mobile}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Profession</label>
          </div>
          <div className="col-md-6">
            <p>{props.job}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profileabout;

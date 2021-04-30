import React from "react";

const Profiletimeline = () => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        {/* Tab 12 content */}
        <div className="row">
          <div className="col-md-6">
            <label>Experience</label>
          </div>
          <div className="col-md-6">
            <p>Expert</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Hourly Rate</label>
          </div>
          <div className="col-md-6">
            <p>10$/hrs</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Total Projects</label>
          </div>
          <div className="col-md-6">
            <p>09</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>English Level</label>
          </div>
          <div className="col-md-6">
            <p>Expert</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Availability</label>
          </div>
          <div className="col-md-6">
            <p>6 Months</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiletimeline;

import React from "react";

const Page404 = () => {
  return (
    <>
      <div className="not-fount offset-md-3 mt-5">
        <div className="not-found-404 offset-md-3">
          <h1 className="text-danger">404</h1>
        </div>
        <div className="heading-content offset-md-1">
          <h1>We Are Sorry, Page Not Found!</h1>
        </div>

        <div className="not-found-msg mt-4">
          <p>
              <b>
            The Page You Are Looking for might have been removed had it's name
            changed or is temporarily unavailable.
            </b>

          </p>
        </div>
      </div>
    </>
  );
};

export default Page404;

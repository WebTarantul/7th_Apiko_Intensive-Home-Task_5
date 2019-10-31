import React, { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => {
    return (
      <Fragment>
        <NavBar />
        <WrappedComponent {...props} />
      </Fragment>
    );
  };

  return hocComponent;
};

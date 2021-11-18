import React from "react";
import PropTypes from "prop-types";
import TEST2 from "./TEST2";
import { myContext } from "./Context";

TEST2.propTypes = {};

function Test(props) {
  // const { state, onClick } = React.useContext(myContext);
  console.log("Test render");
  return <TEST2 />;
}

export default Test;

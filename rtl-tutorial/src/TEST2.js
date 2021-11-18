import React, { useContext } from "react";
import PropTypes from "prop-types";
import { myContext } from "./Context";

TEST2.propTypes = {};

function TEST2(props) {
  // const { state, onClick } = useContext(myContext);
  console.log("TEST2 render");
  return <button>Button</button>;
}

export default TEST2;

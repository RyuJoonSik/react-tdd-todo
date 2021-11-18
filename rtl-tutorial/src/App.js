import React, { useReducer } from "react";
import Context from "./Context";
import Test from "./Test";

// import DelayedToggle from './DelayedToggle';
// import UserProfile from './UserProfile';
import TodoApp from "./TodoApp";
// import Counter from './Counter';
// import Profile from './Profile';

function App(props) {
  console.log("App render");

  return (
    <Context>
      <TodoApp />
    </Context>
  );
}

export default App;

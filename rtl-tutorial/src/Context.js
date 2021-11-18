import React, { useReducer } from "react";

const myContext = React.createContext({});

export { myContext };

const myReduce = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      return {};
    }

    default: {
      return state;
    }
  }
};

function Context({ children }) {
  console.log("Context render");
  const [state, dispatch] = useReducer(myReduce, {});
  const onClick = () => {
    dispatch({ type: "CLICK" });
  };
  return (
    <div>
      <button onClick={onClick}>Context</button>
      {/* <myContext.Provider value={{ state, onClick }}> */}
      {children}
      {/* </myContext.Provider> */}
    </div>
  );
}

export default Context;

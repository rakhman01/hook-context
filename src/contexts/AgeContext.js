import React, { createContext, useState, useReducer } from "react";

const AgeContext = createContext();

const ageReducter = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;
    case "ADD_VIVE":
      return state + 5;
    case "ADD_NUM":
      return state + action.num;
    default:
      return state;
  }
};

const AgeContextProvider = (props) => {
  //   const [age, setAge] = useState(20);
  const [age, dispatch] = useReducer(ageReducter, 20);

  //   const addOneAge = () => {
  //     setAge(prevState + 1);
  //   };

  //   const addViveAge = () => {
  //     setAge(prevState + 5);
  //   };

  //   const addNumAge = (num) => {
  //     setAge(prevState + num);
  //   };
  return (
    <AgeContext.Provider value={{ age, dispatch }}>
      {props.children}
    </AgeContext.Provider>
  );
};

export default AgeContextProvider;

import React from "react";
import Login from "./Login";

const isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

const App = () => {
  return (
    <div className="container">
      {
        //Ternary
        //{isLoggedIn ? <h1>Hello</h1> : <Login />}
        //AND Operator
        currentTime > 11 && <h1>Why are you still working?</h1>
      }
    </div>
  );
};

export default App;

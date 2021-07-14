import React from "react";

const App = () => {
  let curDate = new Date();
  console.log(curDate);
  curDate = curDate.getHours();
  const cssStyle = {};

  const myFunc = () => {
    let greeting = "";
    if (curDate >= 1 && curDate < 12) {
      greeting = "Good Morning";
      cssStyle.color = "green";
    } else if (curDate >= 12 && curDate < 19) {
      greeting = "Good Afternoon";
      cssStyle.color = "orange";
    } else {
      greeting = "Good Night";
      cssStyle.color = "black";
    }
    return greeting;
  };
  return (
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{myFunc()}</span>{" "}
      </h1>
    </div>
  );
};

export default App;

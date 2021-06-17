import logo from "./logo.svg";
//import "./App.css";
import reactDom from "react-dom";
import React, { Component } from "react";
import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

// function App() {
//   let curDate = new Date();
//   console.log(curDate);
//   curDate = curDate.getHours();
//   const cssStyle = {};

//   const myFunc = () => {
//     let greeting = "";
//     if (curDate >= 1 && curDate < 12) {
//       greeting = "Good Morning";
//       cssStyle.color = "green";
//     } else if (curDate >= 12 && curDate < 19) {
//       greeting = "Good Afternoon";
//       cssStyle.color = "orange";
//     } else {
//       greeting = "Good Night";
//       cssStyle.color = "black";
//     }
//     return greeting;
//   };
//   return (
//     <div>
//       <h1>
//         Hello Sir, <span style={cssStyle}>{myFunc()}</span>{" "}
//       </h1>
//     </div>
//   );
// }

export default App;

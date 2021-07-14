import logo from "./logo.svg";
import "./App.css";
//import reactDom from "react-dom";
import React from "react";
import { Route, Switch } from "react-router-dom";
//import Validation from "./components/Validation";
//import Char from "./components/Char";
import SignUp from "./components/Form/SignUp";
import Home from "./components/Form/Home";
import orderNow from "./components/Form/orderNow";
import ShowBookings from "./components/Form/ShowBookings";
import NavBar from "./components/Form/NavBar";
import Login from "./components/Form/Login";

const App = () => {
  // class App extends Component {
  //   state = {
  //     userInput: "",
  //   };

  //   inputChangedHandler = (event) => {
  //     this.setState({ userInput: event.target.value });
  //   };

  //   deleteCharHandler = (index) => {
  //     const text = this.state.userInput.split("");
  //     text.splice(index, 1);
  //     const updatedText = text.join("");
  //     this.setState({ userInput: updatedText });
  //   };

  //   render() {
  //     return (
  //       <div className="App">
  //         <input
  //           type="text"
  //           onChange={this.inputChangedHandler}
  //           value={this.state.userInput}
  //         />
  //         <p>{this.state.userInput}</p>
  //         <Validation inputLength={this.state.userInput.length} />
  //         {this.state.userInput.split("").map((ch, index) => {
  //           return (
  //             <Char
  //               character={ch}
  //               key={index}
  //               clicked={() => this.deleteCharHandler(index)}
  //             />
  //           );
  //         })}
  //       </div>
  //     );
  //   }
  // }
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orderNow" component={orderNow} />
        <Route exact path="/ShowBookings" component={ShowBookings} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </>
  );
};
export default App;

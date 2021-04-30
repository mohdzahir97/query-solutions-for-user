import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./Reducer/UserReducer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import Page404 from "./components/Page404";
import Logout from "./components/Logout";

export const UserContext = createContext();


const RouteFun = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route exact component={Page404}></Route>
      </Switch>
    </>
  );
};

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state+"hai ");
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
      <Navbar />
        <RouteFun />
      </UserContext.Provider>
    </>
  );
}
export default App;


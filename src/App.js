import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
    return (
<BrowserRouter>
<NavBar/>
<Switch>
  <Route path="/about" >
    <About/>
  </Route>
  <Route path="/Login">
    <Login/>
  </Route>
  <Route exact path="/">
    <Home/>
  </Route>
  </Switch>
</BrowserRouter>
    )
}

export default App;
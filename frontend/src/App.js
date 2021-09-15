import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import PhoneScreen from "./screens/PhoneScreen"
import Header from "./components/Header"
import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/phone/:id" component={PhoneScreen} />

      </>
    </Router>
  );
}

export default App;

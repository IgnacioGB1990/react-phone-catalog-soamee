import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import PhoneScreen from "./screens/PhoneScreen"
import CreateScreen from "./screens/CreateScreen"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/phones/:id" component={PhoneScreen} />
        <Route path="/create" component={CreateScreen} />
        <Footer />
      </>
    </Router>
  );
}

export default App;

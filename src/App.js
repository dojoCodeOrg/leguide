import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign from "./components/sign/Sign";
import Landing from "./components/landing/Landing"
import Home from "./components/landing/Landing";
import Feedback from "./components/feedback/Feedback";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />   
          <Route exact path="/sign" element={<Sign />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
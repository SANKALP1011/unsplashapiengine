import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Api from "./Pages/Api";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Api/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

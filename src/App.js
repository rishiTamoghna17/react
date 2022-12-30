import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  let [dark, setDark] = useState("white");
  const toggleMode = () => {
    if (dark === "white") {
      setDark("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode enabled", "success");
    } else {
      setDark("white");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
  };

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="textUtils"
          about="aboutUs"
          mode={dark}
          toggleMode={toggleMode}
        />

        <div className="my-3">
          <Alert alert={alert} />
        </div>

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze"
                  mode={dark}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

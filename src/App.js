import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    ShowAlert(" mode has been Enabled", cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e4871";
      // ShowAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils - Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Installed - TextUtils";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // ShowAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  const [alert, setalert] = useState(null);

  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1200);
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          HomeText="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
            {/* <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  heading="Enter your text :"
                  mode={mode}
                  showAlert={ShowAlert}
                />
              {/* }
            /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

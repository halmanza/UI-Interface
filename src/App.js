import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Libraries from "./pages/Libraries";
import cn from "classnames";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import * as style from '../src/styles/app.module.css';

function App() {
  const [toggle, setToggle] = useState(false);

  // Dimms the rest of the screen while SideBar is open
  const classes = cn("pusher", "bottom", { dimmed: toggle });

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <div className={style}>
        <Header onToggleMenu={toggleMenu} />

        <div className="ui attached pushable" style={{ height: "100vh" }}>
          <Sidebar toggleMenu={toggle} />

          <div className={classes}>
            <Main>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/libraries">
                <Libraries />
              </Route>
            </Main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

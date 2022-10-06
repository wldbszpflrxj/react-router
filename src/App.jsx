import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Root from "./components/Root";
import Route from "./router/Route";
import Router from "./router/Router";

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;

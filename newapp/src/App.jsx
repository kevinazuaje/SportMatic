import React from "react";
import Form from "./components/Form";
import "./styles/styles.scss";
import Banner from "./components/Banner";
import Curses from "./components/Curses";
function App() {
  return (
    <div>
      <Banner />
      <Form />
      <Curses />
    </div>
  );
}

export default App;

import React from "react";
import Form from "./components/Form";
import "./styles/styles.scss";
import Banner from "./components/Banner";
import Curses from "./components/Curses";
import TopBar from "./components/TopBar";
function App() {
  return (
    <div>
      <TopBar />
      <Banner />
      <Form />
      <Curses />
    </div>
  );
}

export default App;

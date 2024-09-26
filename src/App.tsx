import { useState } from "react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Helmet>
      <Router>
        <Header
          onCreateAccount={() => {}}
          onLogin={() => {}}
          onLogout={() => {}}
          user={{ name: "Jane" }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      {/* <Button primary label="click me :3"  size="small" /> */}
    </>
  );
}

export default App;

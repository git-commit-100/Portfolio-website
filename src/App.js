import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import NavContext from "./utils/context";
import { Header, About, Footer, Skills, Works } from "./containers";

function App() {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Footer />
      </div>
    </NavContext.Provider>
  );
}

export default App;

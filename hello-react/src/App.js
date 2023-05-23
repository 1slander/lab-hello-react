import logo from "./logo.svg";
import "./App.css";

// Components

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionCard from "./components/Section_Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionCard />
    </div>
  );
}

export default App;

//import { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Filters from "./components/Filters";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Users from "./components/Users";
import Topics from "./components/Topics";
function App() {
  //const [count, setCount] = useState(0)
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Filters />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

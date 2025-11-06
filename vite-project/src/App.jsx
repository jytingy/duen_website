import { HashRouter as Router, Routes, Route } from "react-router-dom"; 

import Team from "./pages/Team";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/team" element={<Team/>} />
      </Routes>
    </Router>
  );
}

export default App

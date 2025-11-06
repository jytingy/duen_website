import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import { useState } from 'react'

import './App.css'
import Team from "./pages/Team";
import Photos from "./pages/Photos";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Team />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App

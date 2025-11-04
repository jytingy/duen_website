import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import { useState } from 'react'

import './App.css'
import Team from "./pages/Team";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App

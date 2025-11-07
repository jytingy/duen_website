import { HashRouter as Router, Routes, Route } from "react-router-dom"; 

import Team from "./pages/Team";
import Photos from "./pages/Photos";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/" element={<Team />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App

import { HashRouter as Router, Routes, Route } from "react-router-dom"; 

import Team from "./pages/Team";
import Photos from "./pages/Timeline";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    
    <ReactLenis root >
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/" element={<Team />} />
        <Route path="/Timeline" element={<Photos />} />
      </Routes>
    </Router>
    
    </ReactLenis>
  );
}

export default App

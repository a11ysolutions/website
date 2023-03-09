import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Accessibility from './Components/Accessibility/Accessibility';
import Functional from './Components/Functional/Functional';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Automation from './Components/Automation/Automation';
import StandardRegulations from './Components/StandardsRegulations/StandardRegulations';
import Sitemap from './Components/Sitemap/Sitemap';
import { useEffect, useState } from 'react';
import AccessibilityStatement from './Components/AccessibilityStatement/AccessibilityStatement';

function App() {
  const [currentUrl] = useState(window.location.pathname);
  
  useEffect(() => {

    if(currentUrl === "/" || currentUrl === "/regulations" || currentUrl === "/privacy-policy")
      return
    
    const layout = document.querySelector(".layout-content");
    console.log(layout)
    layout.style.background = "linear-gradient(#21ce99 950px, white 20px)"

  }, [currentUrl])
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/functional" element={<Functional />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/a11y-statement" element={<AccessibilityStatement />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/regulations" element={<StandardRegulations />} />
        <Route path="/sitemap" element={<Sitemap />} />

      </Routes>
    </div>
  );
}

export default App;

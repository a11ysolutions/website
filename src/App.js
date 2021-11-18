import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Accessibility from './Components/Accessibility/Accessibility';
import Functional from './Components/Functional/Functional';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import StandardsAndRegulations from './Components/StandardsAndRegulations/StandardsAndRegulations';
import Automation from './Components/Automation/Automation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/functional" element={<Functional />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/standards-and-regulations" element={<StandardsAndRegulations />} />
        <Route path="/automation" element={<Automation />} />
      </Routes>
    </div>
  );
}

export default App;

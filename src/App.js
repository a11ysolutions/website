import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Accessibility from './Components/Accessibility/Accessibility';
import Functional from './Components/Functional/Functional';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Automation from './Components/Automation/Automation';
import StandardRegulations from './Components/StandardsRegulations/StandardRegulations';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/functional" element={<Functional />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/regulations" element={<StandardRegulations />} />

      </Routes>
    </div>
  );
}

export default App;

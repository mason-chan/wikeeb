import './index.css'
import Nav from './models/Nav';
import Home from './models/Home';
import Introduction from './models/Introduction';
import Intro from './models/Intro';
import Size from './models/KeyboardSize';
import Keycaps from './models/Keycaps'
import Switches from './models/Switches';
import Stabilizers from './models/Stabilizers';
import Community from './models/Community';
import Intermediate from './models/Intermediate';
import Material from './models/plateMaterial';
import Mounting from './models/Mounting';
import Lubing from './models/Lubing';
import Advanced from './models/Advanced';
import Mod from './models/switchMods';
import Foam from './models/Foam';
import Diy from './models/Diy';
import Footer from './models/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="font-HelveticaRoundedBold m-0 border-0 tracking-wide box-border">
        <Nav />
        <Routes>
          <Route path="/wikeeb" element={<Home />} />
          <Route path="/wikeeb/introduction" element={<Introduction />} />
          <Route path="/wikeeb/introduction/introduction_to_mechanical_keyboards" element={<Intro />} />
          <Route path="/wikeeb/introduction/keyboard_layouts_and_sizes" element={<Size />} />
          <Route path="/wikeeb/introduction/keycaps" element={<Keycaps />} />
          <Route path="/wikeeb/introduction/switches" element={<Switches />} />
          <Route path="/wikeeb/introduction/stabilizers" element={<Stabilizers />} />
          <Route path="/wikeeb/introduction/community" element={<Community />} />
          <Route path="/wikeeb/intermediate" element={<Intermediate />} />
          <Route path="/wikeeb/intermediate/plate_material" element={<Material />} />
          <Route path="/wikeeb/intermediate/keyboard_mounting_styles" element={<Mounting />} />
          <Route path="/wikeeb/intermediate/lubing" element={<Lubing />} />
          <Route path="/wikeeb/advanced" element={<Advanced />} />
          <Route path="/wikeeb/advanced/additional_switch_modifications" element={<Mod />} />
          <Route path="/wikeeb/advanced/keyboard_foam" element={<Foam />} />
          <Route path="/wikeeb/advanced/diy_modifications" element={<Diy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import SplashScreen from './components/SplashScreen';
import PlanetComponent from './components/PlanetComponent';
import RenderPlanet from './components/RenderPlanet';
import OrbitViewer from './components/OrbitViewer';
import BottomNavbar from './components/BottomNavbar';
import PlanetList from './components/PlanetList';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/A-Space-Project" element={<SplashScreen />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/planets" element={<PlanetComponent />}></Route>
        <Route path="/planets/:id" element={<RenderPlanet />}></Route>
        <Route path="/orbitviewer" element={<OrbitViewer />}></Route>
        <Route path="/bottom" element={<BottomNavbar />}></Route>
        <Route path="/List" element={<PlanetList />}></Route>
      </Routes>
    </div>
  );
}

export default App;

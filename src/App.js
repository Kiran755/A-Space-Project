import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import SplashScreen from './components/SplashScreen';
import PlanetComponent from './components/PlanetComponent';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashScreen />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/planets" element={<PlanetComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;

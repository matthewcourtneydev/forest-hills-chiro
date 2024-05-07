import "./App.scss"

import { Routes, Route, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import Home from "./pages/home/home.jsx"
import Contact from "./pages/contact/contact.jsx"
import Review from "./pages/review/review.jsx"
import Services from "./pages/services/services.jsx"
import Team from "./pages/team/team.jsx"
import Videos from "./pages/videos/videos.jsx"
import Testimonials from './pages/testimonials/testimonials';
import OfficeTour from './pages/office-tour/office-tour';
import ActiveRehab from "./pages/active-rehab/active-rehab"
import Chirporactic from './pages/chiropractic/chirporactic';
import ColdLaser from './pages/cold-laser/cold-laser';
import CellularCleanse from './pages/cellular-cleanse/cellular-cleanse';
import Hydrotherapy from './pages/hydrotherapy/hydrotherapy';
import Orthotics from './pages/orthotics/orthotics';
import SpinalDecompression from './pages/spinal-decompression/spinal-decompression';
import SpinalManipulation from './pages/spinal-manipulation/spinal-manipulation';
import WholeBodyVibrations from './pages/whole-body-vibration/whole-body-vibrations';


import Menu from "./components/menu/menu.jsx"
import Navbar from "./components/navbar/navbar.jsx"
import Footer from "./components/footer/footer.jsx"

function App() {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <div className="App">
      <Navbar toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/review"} element={<Review />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/meet-the-team"} element={<Team />} />
        <Route path={"/videos"} element={<Videos />} />
        <Route path={"/testimonials"} element={<Testimonials />} />
        <Route path={"/office-tour"} element={<OfficeTour />} />
        <Route path={"/active-rehabilitation"} element={<ActiveRehab />} />
        <Route path={"/chiropractic"} element={<Chirporactic />} />
        <Route path={"/cold-laser-therapy"} element={<ColdLaser />} />
        <Route path={"/eb-305-cellular-cleanse"} element={<CellularCleanse />} />
        <Route path={"/hydrotherapy"} element={<Hydrotherapy />} />
        <Route path={"/orthotics"} element={<Orthotics />} />
        <Route path={"/spinal-decompression"} element={<SpinalDecompression />} />
        <Route path={"/spinal-manipulation"} element={<SpinalManipulation />} />
        <Route path={"/whole-body-vibrations"} element={<WholeBodyVibrations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

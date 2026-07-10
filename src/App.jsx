import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import WhyChooseUS from "./components/WhyChooseUS";
import Leadership from "./components/Leadership";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUS />
      <About />
      <VisionMission />
      <Technologies />
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>

  <Route path="/" element={<HomePage />} />

  <Route
    path="/admin/login"
    element={<AdminLogin />}
  />

  <Route
    path="/admin/leadership"
    element={
      <ProtectedRoute>
        <Leadership />
      </ProtectedRoute>
    }
  />

</Routes>
  );
}

export default App;
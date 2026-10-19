/* eslint-disable no-unused-vars */

import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AI from "./components/technology-pages/AI.jsx";
import ClaudeAI from "./components/technology-pages/ClaudeAI.jsx";
import Aerospace from "./components/technology-pages/Aerospace.jsx";
import GenerativeAI from "./components/technology-pages/GenerativeAI.jsx";
import Robotics from "./components/technology-pages/Robotics.jsx";
import SoftwareDevelopment from "./components/technology-pages/SoftwareDevelopment.jsx";
import BlockCoding from "./components/technology-pages/BlockCoding.jsx";
import IoT from "./components/technology-pages/IoT.jsx";
import WebDevelopment from "./components/technology-pages/WebDevelopment.jsx";
import DataAnalysis from "./components/technology-pages/DataAnalysis.jsx";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import WhyChooseUS from "./components/WhyChooseUS";
import AdminLogin from "./components/AdminLogin";
import Footer from "./components/Footer";
import GoogleLogin from "./components/GoogleLogin";

const GOOGLE_CLIENT_ID =
  "20869423899-dl1lek9rh16as2ifir2qdeqg37mamrsq.apps.googleusercontent.com";
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
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<GoogleLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/technology/ai" element={<AI />} />
        <Route path="/technology/claude-ai" element={<ClaudeAI />} />
        <Route path="/technology/aerospace" element={<Aerospace />} />
        <Route path="/technology/robotics" element={<Robotics />} />
        <Route path="/technology/generative-ai" element={<GenerativeAI />} />
        <Route path="/technology/software-development" element={<SoftwareDevelopment />} />
        <Route path="/technology/block-coding" element={<BlockCoding />} />
        <Route path="/technology/iot" element={<IoT />} />
        <Route path="/technology/web-development" element={<WebDevelopment />} />
        <Route path="/technology/data-analysis" element={<DataAnalysis />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;

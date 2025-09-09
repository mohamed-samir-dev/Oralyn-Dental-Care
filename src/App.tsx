import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  Service,
  Testimonials,
  Doctors,
  DoctorProfile,
  Contact,
  Footer,
} from "./components/index";
import { HomePage } from "./pages";
import { APP_CONFIG } from "./constants";

/**
 * Main Application Component
 * Handles routing and layout structure for the Oralyn dental care application
 */
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main role="main" aria-label={`${APP_CONFIG.name} Main Content`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Home />} />
          <Route
            path="/services"
            element={
              <>
                <Service />
                <Testimonials />
              </>
            }
          />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

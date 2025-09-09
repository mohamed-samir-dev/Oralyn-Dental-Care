/**
 * Home Page Component
 * Main landing page with hero section and statistics
 */

import React from "react";
import {
  Home,
  Service,
  CommittedHealth,
  Testimonials,
  Doctors,
} from "../components/index";

const HomePage: React.FC = () => {
  return (
    <>
      <Home />
      <Service />
      <CommittedHealth />
      <Testimonials />
      <Doctors />
    </>
  );
};

export default HomePage;

import React from "react";
import Header from "./navbar/Header";
import HeroSection01 from "./HeroSection.jsx";
import Category from "./Category.jsx";
import OnlineCourses from "./OnlineCourses.jsx";
import PaginationView from "./PaginationView";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection01 />
      <Category />
      <OnlineCourses />
      <PaginationView />
      <Footer />
    </div>
  );
}

export default LandingPage;

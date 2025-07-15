import React from "react";
import Header from "./navbar/Header";
import HeroSection01 from "./HeroSection";
import Category from "./Category";
import OnlineCourses from "./OnlineCourses";
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

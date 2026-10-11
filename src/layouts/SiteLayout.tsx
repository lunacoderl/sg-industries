import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { Preloader } from "../components/Preloader";
import { LocalBusinessSchema } from "../seo/LocalBusinessSchema";

export const SiteLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0] text-[#33205B] selection:bg-[#FF5B45] selection:text-white">
      <Preloader />
      <LocalBusinessSchema />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

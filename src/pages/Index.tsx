import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import MenuBar from "@/components/MenuBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is a page refresh or initial load
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    
    if (hasLoaded) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasLoaded", "true");
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-background desktop-grid ${showContent ? "pixel-fade-in" : "opacity-0"}`}>
      {/* Scanline overlay effect */}
      <div className="scanlines" />

      {/* Menu Bar */}
      <MenuBar />

      {/* Main Content */}
      <main className="pb-8">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
        <SkillsSection />
        <ProofOfWorkSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

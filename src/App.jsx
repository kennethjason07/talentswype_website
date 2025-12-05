import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MobileDemoSection from './components/MobileDemoSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import USPSection from './components/USPSection';
import RevenueSection from './components/RevenueSection';
import RoadmapSection from './components/RoadmapSection';
import CoreValuesSection from './components/CoreValuesSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import './App.css';

const LandingPage = () => (
  <>
    <Navbar />
    <HeroSection />
    <MobileDemoSection />
    <ProblemSection />
    <SolutionSection />
    <USPSection />
    <RevenueSection />
    <RoadmapSection />
    <CoreValuesSection />
    <BlogSection />
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;

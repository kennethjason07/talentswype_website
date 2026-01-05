import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ComparisonSection from './components/ComparisonSection';
import USPSection from './components/USPSection';
import RevenueSection from './components/RevenueSection';
import RoadmapSection from './components/RoadmapSection';
import CoreValuesSection from './components/CoreValuesSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import FoundingMember from './pages/FoundingMember';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

const LandingPage = () => (
  <>
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <ComparisonSection />
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
        <Route path="/founder" element={<FoundingMember />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}

export default App;

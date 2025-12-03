import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import USPSection from './components/USPSection';
import RevenueSection from './components/RevenueSection';
import RoadmapSection from './components/RoadmapSection';
import CoreValuesSection from './components/CoreValuesSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <USPSection />
      <RevenueSection />
      <RoadmapSection />
      <CoreValuesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;

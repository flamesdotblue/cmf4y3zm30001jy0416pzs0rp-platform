import Hero from './components/Hero';
import StepsAndPartners from './components/StepsAndPartners';
import Mentors from './components/Mentors';
import StatsCTA from './components/StatsCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <StepsAndPartners />
      <Mentors />
      <StatsCTA />
    </div>
  );
}

export default App;

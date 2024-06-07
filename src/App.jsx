import FeatureSection from './FeatureSection.jsx';
import HeroSection from './HeroSection.jsx';
import NavBar from './NavBar.jsx';
import Newsletter from './Newsletter.jsx';
import TeamSection from './TeamSection.jsx';
import FooterSection from './FooterSection.jsx';
import PricingSection from './PricingSection.jsx';
import ProjectsSection from './ProjectsSection.jsx';

function App(){
  return <>
      <NavBar/>
      <HeroSection/>
      <FeatureSection/>
      <PricingSection/>
      <ProjectsSection/>
      <TeamSection/>
      <Newsletter/>
      <FooterSection/>
  </>
}
export default App;
import FeatureSection from './FeatureSection.jsx';
import HeroSection from './HeroSection.jsx';
import NavBar from './NavBar.jsx';
import Newsletter from './Newsletter.jsx';
import TeamSection from './TeamSection.jsx';
import FooterSection from './FooterSection.jsx';
import PricingSection from './PricingSection.jsx';

function App(){
  return <>
      <NavBar/>
      <HeroSection/>
      <FeatureSection/>
      <PricingSection/>
      <TeamSection/>
      <Newsletter/>
      <FooterSection/>
  </>
}
export default App;
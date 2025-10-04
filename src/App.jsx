import Navbar from './Components/Navbar-files/Navbar.jsx';
import Footer from './Components/Footer-files/Footer.jsx';

import HeroSec from './Sections/HeroSection-files/HeroSection.jsx';
import ContentSec from './Sections/ContentSection-files/ContentSec.jsx';
import AboutSec from './Sections/AboutSection-files/AboutSection.jsx';
import FormSec from './Sections/FormSection-files/FormSection.jsx';
import PackageSec from './Sections/PackageSec-Files/PackageSec.jsx';
import SoftwareSec from './Sections/SoftwareSec-files/SoftwareSec.jsx';
import ContactUs from './Sections/ContactUs-Files/ContactUs.jsx';

function App() {
  return (
    <>
      <Navbar />
        <HeroSec id="Home" />
        <ContentSec id="Content" />
        <FormSec id="Form" />
        <AboutSec />
        <PackageSec id="Packages" />
        <SoftwareSec id="Software" />
        <ContactUs id="Contact" /> 
        <Footer />
    </>
  );
}

export default App;
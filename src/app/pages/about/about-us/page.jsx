import Footer from '@/components/Footer';
import PageMetaData from '@/components/PageMetaData';
import About from './components/About';
import Clients from './components/Clients';
import Hero from './components/Hero';
import Team from './components/Team';
import TopNavbar1 from '@/app/demos/default/home/components/TopNavbar1';
const AboutUs = () => {
  return <>
      <PageMetaData title="About Us" />
      <TopNavbar1 />
      <main>
        <Hero />
        <About />
        <Clients />
        <Team />
      </main>
      <Footer className="bg-light" />
    </>;
};
export default AboutUs;

import Footer from '@/components/Footer';
import PageMetaData from '@/components/PageMetaData';
import TopNavbar1 from '@/app/demos/default/home/components/TopNavbar1';
import Hero from './components/Hero';
import JobListings from './components/JobListings';
import WhyJoinUs from './components/WhyJoinUs';

const Career = () => {
  return (
    <>
      <PageMetaData title="Career Opportunities - Veltrix IT Solutions" />
      <TopNavbar1 />
      <main>
        <Hero />
        <WhyJoinUs />
        <JobListings />
      </main>
      <Footer className="bg-light" />
    </>
  );
};

export default Career;
import Footer from '@/components/Footer';
import PageMetaData from '@/components/PageMetaData';
import ActionBox from './components/ActionBox';
import Counter from './components/Counter';
import Hero from './components/Hero';
import PopularCoursesGrid from './components/PopularCoursesGrid';
import Reviews from './components/Reviews';
import TopNavbar1 from './components/TopNavbar1';
// import TrendingCourses from './components/TrendingCourses';
import Achievements from './components/Achievements';
const HomePage = () => {
  return <>
      <PageMetaData title="Home" />
      <TopNavbar1 />
      <main>
        <Hero />
        <Counter />
        <PopularCoursesGrid />
        <ActionBox />
        {/* <TrendingCourses /> */}
        <Reviews />
        <Achievements />
      </main>
      <Footer />
    </>;
};
export default HomePage;

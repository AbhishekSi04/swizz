import Footer from '@/components/Footer';
import PageMetaData from '@/components/PageMetaData';
import TopNavbar1 from '@/app/demos/default/home/components/TopNavbar1';

const ServicesPage = () => {
  return <>
    <PageMetaData title="Services" />
    <TopNavbar1 />
    <main className="py-6">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-2">SERVICES</h2>
          <p className="lead mb-0">Unlock Your Potential with Expert Training Programs!</p>
          <p>Empowering individuals and businesses with industry-leading courses designed to enhance skills, boost careers, and achieve success.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 shadow-sm p-4 text-center">
              <h5 className="mb-3">Class Room Training</h5>
              <p>
                <strong>VELTRIX IT SOLUTIONS PRIVATE LIMITED</strong> instructor-led classroom training is delivered by domain experts with real-time interaction and hands-on practice.
              </p>
              <a className="stretched-link" href="#">Learn More</a>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 shadow-sm p-4 text-center">
              <h5 className="mb-3">Online Training Process</h5>
              <p>
                <strong>VELTRIX IT SOLUTIONS PRIVATE LIMITED</strong> delivers live online training with coordinators supporting trainers and learners via Zoom/Google Meet.
              </p>
              <a className="stretched-link" href="#">Learn More</a>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 shadow-sm p-4 text-center">
              <h5 className="mb-3">Internship Program</h5>
              <p>
                <strong>VELTRIX IT SOLUTIONS PRIVATE LIMITED</strong> internship enables students to gain real-world project exposure with guidance from experienced developers.
              </p>
              <a className="stretched-link" href="#">Learn More</a>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 shadow-sm p-4 text-center">
              <h5 className="mb-3">Placements</h5>
              <p>
                <strong>VELTRIX IT SOLUTIONS PRIVATE LIMITED</strong> provides job placement assistance through an industry-aligned curriculum and practical projects.
              </p>
              <a className="stretched-link" href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>;
};

export default ServicesPage;



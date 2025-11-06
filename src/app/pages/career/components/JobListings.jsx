import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BsBriefcase, BsGeoAlt, BsClock } from 'react-icons/bs';

const JobListings = () => {
  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Bangalore, India',
      type: 'Full Time',
      description: 'We are looking for an experienced Full Stack Developer to join our core product team.'
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote',
      type: 'Full Time',
      description: 'Join our design team to create intuitive and engaging user experiences for our educational platform.'
    },
    {
      title: 'DevOps Engineer',
      location: 'Bangalore, India',
      type: 'Full Time',
      description: 'Help us build and maintain robust infrastructure for our growing educational technology platform.'
    },
    {
      title: 'Product Manager',
      location: 'Bangalore, India',
      type: 'Full Time',
      description: 'Lead product development initiatives and drive innovation in educational technology.'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-4 text-center">
          <Col lg={8} className="mx-auto">
            <h2>Current Openings</h2>
            <p className="mb-0">
              Join our team of passionate individuals working to transform education
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {jobs.map((job, index) => (
            <Col lg={6} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4>{job.title}</h4>
                  <div className="d-flex gap-3 text-body-secondary mb-3">
                    <div className="d-flex align-items-center">
                      <BsGeoAlt className="me-2" />
                      {job.location}
                    </div>
                    <div className="d-flex align-items-center">
                      <BsBriefcase className="me-2" />
                      {job.type}
                    </div>
                  </div>
                  <p>{job.description}</p>
                  <Button variant="primary-soft">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <p className="mb-0">
              Don't see a position that matches your skills?{' '}
              <a href="/help/contact-us" className="text-primary">Contact us</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobListings;
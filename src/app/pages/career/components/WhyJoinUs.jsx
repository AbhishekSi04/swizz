import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsPatchCheckFill, BsPeopleFill, BsRocketTakeoff, BsGlobe } from 'react-icons/bs';

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: BsPatchCheckFill,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development paths'
    },
    {
      icon: BsPeopleFill,
      title: 'Great Culture',
      description: 'Work with talented individuals in a collaborative environment'
    },
    {
      icon: BsRocketTakeoff,
      title: 'Innovation',
      description: 'Be part of cutting-edge educational technology solutions'
    },
    {
      icon: BsGlobe,
      title: 'Global Impact',
      description: 'Make a difference in education worldwide'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-4 text-center">
          <Col lg={8} className="mx-auto">
            <h2>Why Join Veltrix IT Solutions</h2>
            <p className="mb-0">
              We offer more than just a job - we offer a career with purpose and growth opportunities.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {benefits.map((benefit, index) => (
            <Col lg={3} sm={6} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <benefit.icon size={30} />
                  </div>
                  <h5>{benefit.title}</h5>
                  <p className="mb-0">{benefit.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyJoinUs;
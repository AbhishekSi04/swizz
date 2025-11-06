import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="text-center">
          <Col lg={8} className="mx-auto">
            <h1 className="display-6">Join Our Team</h1>
            <p className="lead mb-0">
              Be part of our mission to transform education through technology. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
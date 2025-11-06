import element5 from '@/assets/images/element/05.svg';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return <section className="position-relative overflow-hidden">
      <figure className="position-absolute top-50 end-0 translate-middle-y mt-n8">
        <svg className="rtl-flip" width="1360.5px" height="793px" viewBox="0 0 1360.5 793" xmlSpace="preserve">
          <path className="fill-primary opacity-1" d="M33.5,766.3c75.3-24.2,124.5-20.3,155.2-62.8c35.4-49,53.1-184.7,138-191.2s100.9,55.6,208.8-21.2 s44.5-134.3,166.4-174.9c121.8-40.6,177,80.1,279.6,36s122.1-248.4,178.8-290.9c49.3-37,171.2-56.7,200.2-61.1v793H33.5 C33.5,793-41.9,790.4,33.5,766.3z" />
        </svg>
      </figure>
      <Container className="position-relative mt-0 mt-sm-5 pt-5">
        <Row className="align-items-center">
          <Col lg={6} md={7} sm={12}>
            <div className="hero-content">
              <h1 className="mb-3 display-5 fw-bold">We will help you Grow your Knowledge and Skills</h1>
              <h6 className="mb-3 lead">1000+ professional Courses for Your Career</h6>
              <Button variant="primary" size="lg" className="mt-2">Get Started</Button>
            </div>
          </Col>
          <Col lg={6} md={5} sm={12} className="mt-5 mt-md-0">
            <div className="hero-image-wrapper position-relative">
              <img 
                src={element5} 
                className="position-absolute end-0 top-0 z-index-1" 
                alt="decorative-element"
                style={{ maxWidth: '85%', height: 'auto' }}
              />
              <img 
                src="/images/hero-image.png" 
                className="img-fluid position-relative z-index-2" 
                alt="hero-main-image"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;

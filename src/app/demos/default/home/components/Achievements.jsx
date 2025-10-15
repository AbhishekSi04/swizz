import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaRocket, FaBullseye, FaUsers, FaShieldAlt } from 'react-icons/fa';
import './Achievements.css';

const MILESTONES = [
  { year: '2016', text: 'Founded with a vision to bridge the gap between learning and employment.' },
  { year: '2017–2019', text: 'Established strong training programs in Java Fullstack, Salesforce, DevOps, AWS, Data Science, and Software Testing.' },
  { year: '2020', text: 'Enabled career gap students, household women, and non‑IT professionals to secure jobs in reputed companies.' },
  { year: '2021', text: 'Launched 100% Placement Assistance programs with mock interviews and real‑time projects.' },
  { year: '2022', text: 'Expanded reach via hybrid (offline + online) training, making IT education accessible to all.' },
  { year: '2023', text: 'Introduced weekly career counselling turning Swhizz into a trusted career coaching hub.' },
  { year: '2024', text: 'Crossed 5000+ successful job placements milestone with our mentor‑led guidance.' },
];

const HIGHLIGHTS = [
  { icon: <FaRocket />, title: 'Real‑world IT Exposure', text: 'Hands‑on training with experienced mentors and industry projects.' },
  { icon: <FaBullseye />, title: 'Custom Career Roadmaps', text: 'Step‑by‑step guidance tailored to your goals and background.' },
  { icon: <FaShieldAlt />, title: 'High Placement Success', text: 'Job readiness through mock interviews, resume prep, and referrals.' },
  { icon: <FaUsers />, title: 'Strong Community', text: 'Support system for career gap candidates to re‑enter the workforce.' },
];

const Achievements = () => {
  return (
    <section className="achievements-section py-5">
      <Container>
        <Row className="mb-4 text-center">
          <Col lg={10} className="mx-auto">
            <h2 className="section-title">Milestones of Excellence</h2>
            <p className="text-muted">Our journey towards empowering careers</p>
          </Col>
        </Row>

        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <Card className="shadow-sm h-100 card-dark">
              <Card.Body>
                <ul className="list-unstyled mb-0 milestones-list">
                  {MILESTONES.map((m, i) => (
                    <li key={i} className="d-flex align-items-start gap-3 mb-3">
                      <span className="check-icon"><BsCheck2Circle /></span>
                      <div>
                        <strong className="text-primary me-2">{m.year} –</strong>
                        <span className="text-body">{m.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="shadow-sm h-100 card-dark">
              <Card.Body>
                <h3 className="h4 mb-3">Why Swhizz?</h3>
                <ul className="list-unstyled mb-0 highlights-list">
                  {HIGHLIGHTS.map((h, i) => (
                    <li key={i} className="d-flex align-items-start gap-3 mb-3">
                      <div className="highlight-icon">{h.icon}</div>
                      <div>
                        <strong className="d-block">{h.title}</strong>
                        <span className="text-muted small d-block">{h.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Achievements;

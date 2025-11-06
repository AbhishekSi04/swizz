import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import './PopularCoursesGrid.css';

// Note: Using reliable image URLs. You can replace with local assets later if you add them to src/assets/images/courses/
const COURSES = [
  {
    id: 'advanced-java',
    title: 'Advanced Java (JDBC, Servlets and JSP)',
    bullets: [
      'Java Fullstack Development',
      'Weekdays/Weekends',
      'Hands-on with JDBC and Servlets',
      'Real-world project using JSP'
    ],
    img: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
  },
  {
    id: 'manual-automation',
    title: 'Manual and Automation',
    bullets: [
      'Software Testing',
      'Weekdays/Weekends',
      'Automation with Selenium',
      'Manual Testing Fundamentals'
    ],
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'devops',
    title: 'DevOps',
    bullets: [
      'DevOps Practices and Tools',
      'Weekdays/Weekends',
      'CI/CD Pipeline Implementation',
      'Docker and Kubernetes Training'
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg',
  },
  {
    id: 'salesforce-admin',
    title: 'Salesforce Admin',
    bullets: [
      'Salesforce CRM',
      'Weekdays/Weekends',
      'Workflow and Process Automation',
      'Admin Certification Preparation'
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
  },
  {
    id: 'networking',
    title: 'Networking Training',
    bullets: [
      'Networking Fundamentals',
      'Weekdays/Weekends',
      'CCNA/Network Security Concepts',
      'Practical Router and Switch Setup'
    ],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'data-science',
    title: 'Data Science (AI+ML)',
    bullets: [
      'Data Science and Analytics',
      'Weekdays/Weekends',
      'Machine Learning Projects',
      'Python for Data Analysis'
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    bullets: [
      'Cybersecurity Fundamentals',
      'Weekdays/Weekends',
      'Ethical Hacking Techniques',
      'Network and Cloud Security'
    ],
    img: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'core-java',
    title: 'Core Java',
    bullets: [
      'Java Fullstack Development',
      'Weekdays/Weekends',
      'OOPs and Exception Handling',
      'Java Collections and Threads'
    ],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
];


const CoursesGridCard = ({ course }) => (
  <Card className="course-card h-100 shadow-sm">
    <div className="course-card-img-wrap">
      <img src={course.img} className="card-img-top" alt={course.title} />
    </div>
    <Card.Body>
      <Card.Title className="fw-semibold text-dark-mode-white">{course.title}</Card.Title>
      <ul className="list-unstyled text-theme-muted mb-3 small">
        {course.bullets.map((b, i) => (
          <li key={i} className="d-flex align-items-center gap-2">
            <FaPlay size={10} className="text-primary" />
            <span className="text-theme-body">{b}</span>
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>
);

const PopularCoursesGrid = () => {
  return (
    <section id="popular-courses" className="popular-courses-section pt-5" style={{ scrollMarginTop: '100px' }}>
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title text-dark-mode-white">POPULAR COURSES</h2>
          <p className="text-theme-muted mb-0">Explore our best online programs</p>
        </div>
        <Row className="g-4">
          {COURSES.map((c) => (
            <Col key={c.id} sm={6} lg={4} xl={3}>
              <CoursesGridCard course={c} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularCoursesGrid;

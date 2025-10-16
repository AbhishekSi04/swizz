import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './styles.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const coursesDropdown = [
    { id: 'data-science', label: 'Data Science' },
    { id: 'salesforce', label: 'Salesforce CRM' },
    { id: 'java-fullstack', label: 'Java Fullstack' },
    { id: 'devops', label: 'DevOps' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'networking', label: 'Networking' },
    { id: 'software-testing', label: 'Software Testing' },
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <Container>
          <div className="d-flex justify-content-between align-items-center py-2">
            <div className="contact-info">
              <span className="me-3">
                <i className="bi bi-envelope me-1"></i>  connect.veltrixit.inexample.com
              </span>
              <span>
                <i className="bi bi-phone me-1"></i> +1 234 567 8900
              </span>
            </div>
            <div className="social-links">
              <a href="#" className="me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="me-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="me-2"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="me-2"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </Container>
      </div>

      <Navbar expand="lg" className="main-navbar" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Container>
          <Link to="/" className="navbar-brand" />
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navItems.map((item) => (
                <div key={item.id} className="nav-item-wrapper">
                  {item.id === 'courses' ? (
                    <NavDropdown 
                      title={
                        <>
                          {item.label}
                          <FaChevronDown className="ms-1" style={{ fontSize: '12px' }} />
                        </>
                      } 
                      id="courses-dropdown"
                      className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                      show={expanded && activeNav === item.id}
                      onMouseEnter={() => setActiveNav(item.id)}
                      onMouseLeave={() => setActiveNav('')}
                      onClick={() => setExpanded(false)}
                    >
                      <div className="dropdown-menu-mega">
                        <Container>
                          <div className="row">
                            <div className="col-md-3">
                              <h6>Popular Courses</h6>
                              {coursesDropdown.slice(0, 4).map((course) => (
                                <NavDropdown.Item key={course.id} as={Link} to={`/courses/${course.id}`}>
                                  {course.label}
                                </NavDropdown.Item>
                              ))}
                            </div>
                            <div className="col-md-3">
                              <h6>Trending Now</h6>
                              {coursesDropdown.slice(3, 7).map((course) => (
                                <NavDropdown.Item key={course.id} as={Link} to={`/courses/${course.id}`}>
                                  {course.label}
                                </NavDropdown.Item>
                              ))}
                            </div>
                            <div className="col-md-6">
                              <div className="p-3 bg-light rounded">
                                <h5>Special Offer</h5>
                                <p>Get 20% off on all courses this month. Use code: <strong>LEARN20</strong></p>
                                <Button variant="primary" size="sm">Enroll Now</Button>
                              </div>
                            </div>
                          </div>
                        </Container>
                      </div>
                    </NavDropdown>
                  ) : (
                    <Nav.Link 
                      as={Link} 
                      to={`/${item.id === 'home' ? '' : item.id}`}
                      className={activeNav === item.id ? 'active' : ''}
                      onClick={() => {
                        setActiveNav(item.id);
                        setExpanded(false);
                      }}
                    >
                      {item.label}
                      {item.id === 'services' && <FaChevronDown className="ms-1" style={{ fontSize: '12px' }} />}
                    </Nav.Link>
                  )}
                </div>
              ))}
            </Nav>
            
            <div className="header-actions">
              <button className="btn btn-link search-btn">
                <FaSearch />
              </button>
              <button className="btn btn-link cart-btn position-relative">
                <FaShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </button>
              <Button variant="outline-primary" className="ms-2">
                <FaUser className="me-1" /> Login
              </Button>
              <Button variant="primary" className="ms-2">
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

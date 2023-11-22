// Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav components
import './Landing.css';

const Landing = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1 className="site-name">GLAP</h1>
      </header>

      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/teachers">Teachers</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/admission">Online Admission</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Custom Carousel */}
      <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Carousel Slide 1" />
            <div className="carousel-caption text-start">
              <h5 className="text-dark">Slide 1 Title</h5>
              <p className="text-dark">Slide 1 Description</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Carousel Slide 2" />
            <div className="carousel-caption text-start">
              <h5 className="text-dark">Slide 2 Title</h5>
              <p className="text-dark">Slide 2 Description</p>
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;

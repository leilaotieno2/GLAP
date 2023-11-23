// Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav components
import './Landing.css';

const Landing = () => {
  return (
    <div>
      <header className="header">
        <h1 className="site-name">GLAP</h1>
      </header>

      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            {/* Navigation Links */}
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

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Carousel Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            {/* Image */}
            <img className="d-block w-100 custom-img" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First slide" />
            <div className="container">
              {/* Carousel Caption */}
              <div className="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>Your carousel content here.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <img className="d-block w-100 custom-img" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Second slide" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Your carousel content here.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>

          {/* Carousel Item 3 */}
          <div className="carousel-item">
            <img className="d-block w-100 custom-img" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Third slide" />
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Your carousel content here.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to GLAP</h1>
            <p className="hero-subtitle">Your Gateway to Learning Excellence</p>
          </div>
        </div>
      </section>

      {/* Featurette Section */}
      <section className="featurette-section">
        <div className="container">
          {/* Featurette 1 */}
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Your featurette content here.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Generic placeholder" />
            </div>
          </div>

          {/* Featurette Divider */}
          <hr className="featurette-divider" />

          {/* Featurette 2 */}
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Your featurette content here.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="featurette-image img-fluid mx-auto" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Generic placeholder" />
            </div>
          </div>

          {/* Featurette Divider */}
          <hr className="featurette-divider" />

          {/* Featurette 3 */}
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">Your featurette content here.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Generic placeholder" />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="marketing-section">
        <div className="container">
          {/* Marketing Section Row */}
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Generic placeholder" width="140" height="140" />
              <h2>Heading 1</h2>
              <p>Your content for the first column.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>

            {/* Column 2 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Generic placeholder" width="140" height="140" />
              <h2>Heading 2</h2>
              <p>Your content for the second column.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>

            {/* Column 3 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Generic placeholder" width="140" height="140" />
              <h2>Heading 3</h2>
              <p>Your content for the third column.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

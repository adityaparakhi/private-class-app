import React from "react";
import { Carousel } from "react-bootstrap";

function Services() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Our Services</h2>
      
      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://picsum.photos/1200/400?random=20" alt="Learning Programs"/>
          <Carousel.Caption>
            <h3>Learning Programs</h3>
            <p>Structured study programs for all levels.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://picsum.photos/1200/400?random=21" alt="Workshops"/>
          <Carousel.Caption>
            <h3>Workshops</h3>
            <p>Hands-on training and skill development.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://picsum.photos/1200/400?random=22" alt="Online & Offline"/>
          <Carousel.Caption>
            <h3>Online & Offline Classes</h3>
            <p>Flexible learning options for every student.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <ul>
        <li>Personalized Learning Programs</li>
        <li>Workshops & Skill Development</li>
        <li>Expert Faculty Guidance</li>
        <li>Smart Classrooms</li>
        <li>Online + Offline Sessions</li>
      </ul>
    </div>
  );
}

export default Services;

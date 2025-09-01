import React from "react";
import { Carousel } from "react-bootstrap";
import MapComponent from "./MapComponent";

function Home() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome to My Private Class</h2>

      {/* Our Services Carousel */}
      <h3 className="mt-5 mb-3 text-center">Our Services</h3>
      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://picsum.photos/1200/400?random=10" alt="Personalized Learning"/>
          <Carousel.Caption>
            <h3>Personalized Learning</h3>
            <p>Every student gets customized study plans.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://picsum.photos/1200/400?random=11" alt="Expert Faculty"/>
          <Carousel.Caption>
            <h3>Expert Faculty</h3>
            <p>Guidance from highly experienced teachers.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 rounded" src="https://picsum.photos/1200/400?random=12" alt="Modern Facilities"/>
          <Carousel.Caption>
            <h3>Modern Facilities</h3>
            <p>Smart classrooms with interactive technology.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Maps for branches */}
      <h4 className="mt-5 mb-3">Our Branches</h4>
      <MapComponent />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Achievements.css";

// Import all images using Vite's import.meta.glob (must be static)
const teacherImages = import.meta.glob("../assets/Teachers/*.{png,jpg,jpeg,svg}", { eager: true });
const varshikImages = import.meta.glob("../assets/Varshik_Paritoshik/*.{png,jpg,jpeg,svg}", { eager: true });
const classTestImages = import.meta.glob("../assets/Class_Test/*.{png,jpg,jpeg,svg}", { eager: true });

// Helper: convert object into array with src + description
const formatImages = (images) =>
  Object.entries(images).map(([filePath, module]) => ({
    src: module.default,
    desc: filePath.split("/").pop().split(".")[0], // filename without extension
  }));

// Albums
const albums = {
  Teachers: formatImages(teacherImages),
  Varshik_Paritoshik: formatImages(varshikImages),
  Class_Test: formatImages(classTestImages),
};

const Achievements = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Achievements</h2>

      {/* Show album grid */}
      {!selectedAlbum ? (
        <div className="row album-grid">
          {Object.keys(albums).map((album, idx) => (
            <div key={idx} className="col-md-4 col-sm-6 mb-4">
              <div
                className="card shadow-sm h-100 album-card"
                onClick={() => setSelectedAlbum(album)}
              >
                <img
                  src={albums[album][0]?.src}
                  className="card-img-top album-cover"
                  alt={album}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{album.replace("_", " ")}</h5>
                  <p className="text-muted">
                    {albums[album].length} Photos – Click to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Show carousel */
        <div>
          <h3 className="text-center mb-4">{selectedAlbum.replace("_", " ")}</h3>

          <div
            id="albumCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {albums[selectedAlbum].map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={img.src}
                    className="d-block w-100 album-image"
                    alt={img.desc}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <p>{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#albumCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#albumCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          {/* Back */}
          <div className="text-center">
            <button
              className="btn btn-primary back-btn"
              onClick={() => setSelectedAlbum(null)}
            >
              Back to Albums
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;

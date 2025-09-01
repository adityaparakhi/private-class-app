import React from "react";

// Utility to load images from a folder
function importAll(r) {
  return r.keys().map(r);
}

// Albums (separate folders under /src/assets/achievements/)
const TeacherImages = importAll(require.context("../assets/Teachers", false, /\.(png|jpe?g|svg)$/));
const VarshikParitoshikImages = importAll(require.context("../assets/Varshik_Paritoshik", false, /\.(png|jpe?g|svg)$/));
const ClassTestImages = importAll(require.context("../assets/Class_Test", false, /\.(png|jpe?g|svg)$/));

function Album({ title, images }) {
  return (
    <div className="mb-5">
      <h3 className="mb-3">{title}</h3>
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-md-4 mb-3 text-center">
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "250px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🏆 Our Achievements</h2>

      {/* Teachers Album */}
      <Album title="Teacher" images={TeacherImages} />

      {/* Varshik Paritoshik Album */}
      <Album title="Varshik Paritoshik" images={VarshikParitoshikImages} />

      {/* Class test Album */}
      <Album title="Class Test" images={ClassTestImages} />
    </div>
  );
}

export default Achievements;

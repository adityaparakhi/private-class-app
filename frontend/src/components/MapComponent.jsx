import React from "react";

function MapComponent() {
  return (
    <div className="d-flex flex-column gap-4">
      {/* Branch 1 */}
      <iframe
        title="Branch 1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.9603013033307!2d74.1722075!3d17.6993354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2348a18d8be35%3A0x17cfb39c061b1705!2sParkhi%20Dnyandeep%20Coaching%20Classes%20Branch%201!5e0!3m2!1sen!2sin!4v1755993154070!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapComponent;

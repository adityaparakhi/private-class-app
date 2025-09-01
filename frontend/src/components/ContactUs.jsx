import React from "react";

function ContactUs() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Contact Us</h2>
      <div className="row g-4">
        {/* Contact Info */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 h-100">
            <h4 className="mb-3">Get in Touch</h4>
            <p>
              <strong>📍 Address:</strong> Parkhi Dnyandeep Coaching Classes Branch 1, 123 Education Lane, City, State
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>📧 Email:</strong> info@myprivateclass.com
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="col-md-6">
          <div className="card shadow-sm p-0 h-100">
            <iframe
              title="Branch 1 Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.9603013033307!2d74.1722075!3d17.6993354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2348a18d8be35%3A0x17cfb39c061b1705!2sParkhi%20Dnyandeep%20Coaching%20Classes%20Branch%201!5e0!3m2!1sen!2sin!4v1755993154070!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

import { useState } from "react";
import { sendContact } from "../utils/api";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContact(formData);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      alert("❌ Error sending message");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Contact Us</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Send Message
        </button>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getAboutInfo } from "../utils/api";

export default function AboutUs() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAboutInfo();
        setAboutData(res.data);
      } catch (err) {
        console.error("Error fetching About info:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">About Us</h2>

      {aboutData ? (
        <div className="row">
          <div className="col-md-6 mb-3">
            <h4>Our Address</h4>
            <p>{aboutData.address}</p>
            <h5>Contact Info</h5>
            <p>📞 {aboutData.phone}</p>
            <p>📧 {aboutData.email}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h4>Find Us on Map</h4>
            <iframe
              title="Google Map"
              src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
                aboutData.address
              )}&key=YOUR_GOOGLE_MAPS_API_KEY`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading About Info...</p>
      )}
    </div>
  );
}

import axios from "axios";

// ✅ Create axios instance with Spring Boot backend base URL
const API = axios.create({
  baseURL: "http://localhost:8080/api", // change this for deployment
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Define endpoints
export const endpoints = {
  feedback: "/feedback",
  contact: "/contact",
  achievements: "/achievements",
  about: "/about", // 🔥 new endpoint for address/contact info
};

// ✅ API functions
export const sendFeedback = (data) => API.post(endpoints.feedback, data);

export const sendContact = (data) => API.post(endpoints.contact, data);

export const getAchievements = () => API.get(endpoints.achievements);

export const getAboutInfo = () => API.get(endpoints.about); // 🔥 new function

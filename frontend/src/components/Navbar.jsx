import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About Us</h2>} />
        <Route path="/details" element={<h2>Details</h2>} />
        <Route path="/terms" element={<h2>Terms & Conditions</h2>} />
        <Route path="/privacy" element={<h2>Privacy Policy</h2>} />
        <Route path="/feedback" element={<h2>Feedback</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

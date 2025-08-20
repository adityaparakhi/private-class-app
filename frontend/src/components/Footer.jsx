export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Private Class. All rights reserved.</p>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

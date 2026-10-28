import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark">DIET</span>
        <span>
          <strong>DIET Meerut</strong>
          <small>Delhi Institute of Engineering and Technology</small>
        </span>
      </Link>

      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        
        <Link to="/enquiry">Enquiry</Link>
        <Link to="/jobs">Jobs At DIET</Link>
        <Link to="/updates">Alerts & Updates</Link>
        <Link className="nav-button" to="/admissions">
          Admissions
        </Link>
      </nav>
    </header>
  );
}

export default Header;

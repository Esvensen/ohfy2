import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src="/assets/img/ohfy.svg" alt="Only Here For You" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-trigger">TATTOO</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/tattoo" className="dropdown-link">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/studio" className="dropdown-link">
                  STUDIO
                </Link>
              </li>
              <li>
                <Link to="/artists" className="dropdown-link">
                  ARTISTS
                </Link>
              </li>
              <li>
                <Link to="/booking" className="dropdown-link">
                  BOOKING
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="dropdown-link">
                  FAQS
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/records" className="nav-link">
              RECORDS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">
              EVENTS
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://onlyhereforyou.bigcartel.com/"
              className="nav-link"
            >
              MERCH
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

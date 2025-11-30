import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  // hide on homepage
  if (pathname === "/") return null;

  const dark = pathname === "/records";
  return (
    <footer className={`footer ${dark ? "footer-dark" : ""}`}>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Only Here For You</p>
        <Link to="/policy" className="footer-link">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

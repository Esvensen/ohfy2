import { Link, useLocation } from "react-router-dom";

const TattooTopNav = () => {
  const { pathname } = useLocation();
  const tattooRoutes = ["/tattoo", "/studio", "/artists", "/booking", "/faqs"];
  if (!tattooRoutes.some((r) => pathname.startsWith(r))) return null;

  return (
    <nav className="tattoo-top-nav">
      <Link to="/tattoo" className={pathname === "/tattoo" ? "active" : ""}>
        ABOUT
      </Link>
      <Link to="/studio" className={pathname === "/studio" ? "active" : ""}>
        STUDIO
      </Link>
      <Link
        to="/artists"
        className={pathname.startsWith("/artists") ? "active" : ""}
      >
        ARTISTS
      </Link>
      <Link to="/booking" className={pathname === "/booking" ? "active" : ""}>
        BOOKING
      </Link>
      <Link to="/faqs" className={pathname === "/faqs" ? "active" : ""}>
        FAQ
      </Link>
    </nav>
  );
};

export default TattooTopNav;

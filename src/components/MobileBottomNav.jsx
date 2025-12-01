import { Link, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="mobile-bottom-nav">
      <Link
        to="/tattoo"
        className={`mobile-nav-item ${
          ["tattoo", "studio", "artists", "booking", "faqs"].some((s) =>
            pathname.startsWith("/" + s)
          )
            ? "active"
            : ""
        }`}
      >
        <img src="/assets/img/tattoo.png" alt="Tattoo" />
        <span>Tattoo</span>
      </Link>
      <Link
        to="/events"
        className={`mobile-nav-item ${
          pathname.startsWith("/events") ? "active" : ""
        }`}
      >
        <img src="/assets/img/events.png" alt="Events" />
        <span>Events</span>
      </Link>
      <Link
        to="/records"
        className={`mobile-nav-item ${
          pathname.startsWith("/records") ? "active" : ""
        }`}
      >
        <img src="/assets/img/records.png" alt="Records" />
        <span>Records</span>
      </Link>
      <a
        href="https://onlyhereforyou.bigcartel.com/"
        className={`mobile-nav-item ${pathname === "/" ? "active" : ""}`}
      >
        <img src="/assets/img/merch.png" alt="Merch" />
        <span>Merch</span>
      </a>
    </nav>
  );
};

export default MobileBottomNav;

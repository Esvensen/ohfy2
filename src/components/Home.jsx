import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const setVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", setVH);
    setVH();

    return () => window.removeEventListener("resize", setVH);
  }, []);

  return (
    <main>
      <section className="splash">
        <div className="corner-links">
          <a
            className="link corner-link top-left"
            href="https://onlyhereforyou.bigcartel.com/"
          >
            MERCH
          </a>
          <Link className="link corner-link top-right" to="/events">
            EVENTS
          </Link>
          <Link className="link corner-link bottom-left" to="/records">
            RECORDS
          </Link>
          <Link className="link corner-link bottom-right" to="/tattoo">
            TATTOO
          </Link>
        </div>
        <div className="reaper-container">
          <img src="/assets/img/Reaper.png" alt="Reaper" />
        </div>
      </section>
    </main>
  );
};

export default Home;

import { useState } from "react";
import { Link } from "react-router-dom";
import { artists as allArtists } from "../data/artists";

const Artists = () => {
  const [filter, setFilter] = useState("all");
  const [bgUrl, setBgUrl] = useState(null);

  /* hardcoded backup removed – using markdown-loaded data */
  /* const artists = [
    {
      id: "elliott-lane",
      name: "Elliott Lane",
      instagram: "elliottlane",
      resident: true,
      bio: "Originally from Llanidloes, Mid Wales, Elliott is the Co-owner of OHFY. Apprenticing and learning his craft at The Lacemakers Sweatshop under his mentors Delphine Noizetoy, Mimissikuite and Gordo Letters.",
      thumbnail: "/assets/uploads/img_9853.jpeg",
      email: "hello@onlyhereforyou.com",
    },
    {
      id: "daniela-sagel",
      name: "Daniela Sagel",
      instagram: "danielasageltattoo",
      resident: false,
      bio: "Originally from Austria, Daniela has been tattooing for 10+ years. A true lover of tattooing and everything tattooing means.",
      thumbnail: "/assets/uploads/daniela-healed-img_4129.jpg",
      email: "tattoos@danielasagel.com",
    },
    {
      id: "gordo-letters",
      name: "Gordo Letters",
      instagram: "gordoletters",
      resident: false,
      bio: "Hailing from Portugal, tattooing since 2008, Gordo learned his craft the old school way. A traditional apprentice at a traditional tattoo shop.",
      thumbnail: "/assets/uploads/gordo.jpg",
      email: "gordoletters@gmail.com",
    },
    {
      id: "ruby-bird",
      name: "Ruby Bird",
      instagram: "rubybird",
      resident: true,
      bio: "Resident artist with unique style.",
      thumbnail: "/assets/uploads/ruby-1.jpg", // This exists!
      email: "hello@onlyhereforyou.com",
    },
    {
      id: "delphine",
      name: "Delphine",
      instagram: "delphine",
      resident: false,
      bio: "Guest artist and mentor.",
      thumbnail: "/assets/uploads/delphine.jpg", // This exists!
      email: "hello@onlyhereforyou.com",
    },
    {
      id: "biko",
      name: "Biko",
      instagram: "biko",
      resident: false,
      bio: "Guest artist.",
      thumbnail: "/assets/uploads/biko.jpg", // This exists!
      email: "hello@onlyhereforyou.com",
    },
    // Remove the artists with non-existent thumbnails for now
  ];*/

  const filteredArtists = allArtists.filter((artist) => {
    if (filter === "residents") return artist.resident;
    if (filter === "guests") return !artist.resident;
    return true;
  });

  return (
    <main>
      <section className="artists">
        <div className="selector">
          <a
            className={`option all ${filter === "all" ? "selected" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </a>
          <a
            className={`option residents ${
              filter === "residents" ? "selected" : ""
            }`}
            onClick={() => setFilter("residents")}
          >
            Residents
          </a>
          <a
            className={`option guests ${filter === "guests" ? "selected" : ""}`}
            onClick={() => setFilter("guests")}
          >
            Guests
          </a>
        </div>

        <div className="names">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className={`name ${artist.instagram} ${
                artist.resident ? "true" : "false"
              }`}
              onMouseEnter={() => setBgUrl(artist.thumbnail)}
              onMouseLeave={() => setBgUrl(null)}
            >
              <p className="artist-status">
                {artist.resident ? "(RESIDENT)" : "(GUEST)"}
              </p>
              <Link to={`/artists/${artist.id}`}>
                <h4>{artist.name}</h4>
              </Link>
            </div>
          ))}
        </div>
        {bgUrl && (
          <div className="artist-image-overlay">
            <img src={bgUrl} alt="artist" />
          </div>
        )}
      </section>
    </main>
  );
};

export default Artists;

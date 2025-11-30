// src/components/ArtistDetail.jsx
import { useParams, Link } from "react-router-dom";
import { artists as allArtists } from "../data/artists";

const ArtistDetail = () => {
  const { artistId } = useParams();
  const artist = allArtists.find((a) => a.id === artistId);

  if (!artist) return <div>Artist not found</div>;

  const galleryImages = artist.gallery || artist.galleryImages || [];

  return (
    <main>
      <section className="row imageText">
        <div className="imageBox">
          <img className="image" src={artist.thumbnail} alt={artist.name} />
        </div>
        <div className="padding"></div>
        <div className="copy">
          <Link to="/artists">← Back</Link>
          <h2 style={{ marginBottom: 0 }}>{artist.name}</h2>
          {artist.instagram && (
            <a
              href={`https://instagram.com/${artist.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{artist.instagram}
            </a>
          )}
          <p style={{ marginTop: 20 }}>{artist.bio}</p>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="additionalImages">
          {galleryImages.map((img, i) => (
            <div key={i} className="imgholder">
              <img src={img} alt="" />
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default ArtistDetail;

import { useState } from "react";
import studioData from "../../_data/studio.json";

const Studio = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const images = studioData.images;

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  // Handle already-cached images on iOS Safari
  const handleImageRef = (img, index) => {
    if (
      img &&
      img.complete &&
      img.naturalHeight !== 0 &&
      !loadedImages[index]
    ) {
      setLoadedImages((prev) => ({ ...prev, [index]: true }));
    }
  };

  return (
    <main>
      <section className="additionalImages">
        {images.map((src, index) => (
          <div className="imgholder" key={index}>
            <img
              ref={(el) => handleImageRef(el, index)}
              src={src}
              alt=""
              className={loadedImages[index] ? "loaded" : ""}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Studio;

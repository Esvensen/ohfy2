import { useState } from "react";

const studioImages = [
  "/assets/img/studio (1).jpeg",
  "/assets/img/studio (2).jpeg",
  "/assets/img/studio (3).jpeg",
  "/assets/img/studio (4).jpeg",
  "/assets/img/studio (5).jpeg",
  "/assets/img/studio (6).jpeg",
  "/assets/img/studio (7).jpeg",
  "/assets/img/studio (8).jpeg",
  "/assets/img/studio (9).jpeg",
  "/assets/img/studio (10).jpeg",
];

const Studio = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <main>
      <section className="additionalImages">
        {studioImages.map((src, index) => (
          <div className="imgholder" key={index}>
            <img
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

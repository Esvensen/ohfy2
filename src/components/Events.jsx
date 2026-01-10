import { useState, useRef, useEffect } from "react";
import eventsData from "../../_data/events.json";

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const canvasRef = useRef(null);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (selectedImage && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        canvas.width = 50;
        canvas.height = 50;
        ctx.drawImage(img, 0, 0, 50, 50);
      };
      img.src = selectedImage;
    }
  }, [selectedImage]);

  return (
    <main>
      <section className="events-images">
        {eventsData.images.map((image, index) => (
          <div
            key={index}
            className="imgholder"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt="Event"
              className={loadedImages[index] ? "loaded" : ""}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </section>

      {selectedImage && (
        <div
          className={`lightbox-overlay ${isClosing ? "closing" : ""}`}
          onClick={handleClose}
        >
          <div className="lightbox-background">
            <img src={selectedImage} alt="" />
          </div>
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <button className="lightbox-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Event" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Events;

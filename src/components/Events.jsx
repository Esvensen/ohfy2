import { useState, useRef, useEffect, useCallback } from "react";
import eventsData from "../../_data/events.json";

const Events = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const canvasRef = useRef(null);

  const images = eventsData.images;
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

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

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedIndex(null);
      setIsClosing(false);
    }, 300);
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  // Touch/swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    setTouchStart(null);
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
        {images.map((image, index) => (
          <div
            key={index}
            className="imgholder"
            onClick={() => handleImageClick(index)}
          >
            <img
              ref={(el) => handleImageRef(el, index)}
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
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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

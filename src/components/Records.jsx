import { useEffect } from "react";

const Records = () => {
  useEffect(() => {
    // Add dark theme class to body when component mounts
    document.body.classList.add("records-dark-theme");

    // Remove dark theme class when component unmounts
    return () => {
      document.body.classList.remove("records-dark-theme");
    };
  }, []);

  return (
    <main className="records-page">
      <div className="records-container">
        {/* Header Logo */}
        <div className="records-header">
          <div className="records-logo">
            <img
              src="/assets/img/record-logo.png"
              alt="Only Here For You Records"
            />
          </div>
        </div>

        {/* Main Album Display */}
        <div className="album-showcase">
          <div className="album-image">
            <img src="/assets/img/record.png" alt="Only Here For You Album" />
          </div>
          <a
            href="https://onlyhereforyou.bigcartel.com/product/volume-one-ohfy001"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-now-btn edda-font"
          >
            BUY NOW
          </a>
        </div>

        {/* Bundle Options */}
        <div className="bundles-section">
          <div className="bundle-card">
            <h3 className="bundle-title">BUNDLE ONE</h3>
            <h4 className="bundle-subtitle">STANDARD</h4>
            <p className="bundle-edition">LIMITED TO 200</p>
            <div className="bundle-items">
              <p>RECORD</p>
              <p>POSTER</p>
              <p>STICKERS</p>
            </div>
          </div>

          <div className="bundle-card">
            <h3 className="bundle-title">BUNDLE TWO</h3>
            <h4 className="bundle-subtitle">DELUXE</h4>
            <p className="bundle-edition">LIMITED TO 50</p>
            <div className="bundle-items">
              <p>RECORD</p>
              <p>POSTER</p>
              <p>STICKERS</p>
              <p>LONG SLEEVE</p>
            </div>
          </div>

          <div className="bundle-card">
            <h3 className="bundle-title">BUNDLE THREE</h3>
            <h4 className="bundle-subtitle">PRIMO</h4>
            <p className="bundle-edition">LIMITED TO 50</p>
            <div className="bundle-items">
              <p>RECORD</p>
              <p>POSTER</p>
              <p>STICKERS</p>
              <p>LONG SLEEVE</p>
              <p>GIG TICKET</p>
            </div>
          </div>
        </div>

        {/* Bottom Buy Now Button */}
        <div className="bottom-buy-section">
          <a
            href="https://onlyhereforyou.bigcartel.com/product/volume-one-ohfy001"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-now-btn edda-font"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </main>
  );
};

export default Records;

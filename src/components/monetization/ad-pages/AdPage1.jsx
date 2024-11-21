import { useEffect } from "react";
import "../../../styles/ad-page.css";

function AdPage1() {
  // Create reusable components for each ad type
  const renderAds = (path, className, count) => {
    return Array(count)
      .fill(null)
      .map((_, index) => (
        <iframe
          key={`${className}-${index}`}
          src={`/ads/adsterra/${path}`}
          className={className}
        />
      ));
  };

  useEffect(() => {
    const startDelay = 2000;
    const scrollSpeed = 20;
    const scrollStep = 2;

    let timeoutId;
    let intervalId;

    const startScrolling = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      let currentPosition = window.scrollY;

      intervalId = setInterval(() => {
        if (currentPosition >= maxScroll) {
          window.scrollTo(0, 0);
          currentPosition = 0;
        } else {
          window.scrollTo(0, currentPosition);
          currentPosition += scrollStep;
        }
      }, scrollSpeed);
    };

    timeoutId = setTimeout(startScrolling, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="ad-page">
      <section className="native-banners-container">
        <h2>Native Banners</h2>
        {renderAds("native-banner", "native-banner", 12)}
      </section>

      <section className="banners-300x250">
        <h2>300x250 Banners</h2>
        {renderAds("banner-300-250", "banner-300x250", 8)}
      </section>

      <section className="banners-160-600">
        <h2>160x600 Banners</h2>
        {renderAds("banner-160-600", "banner-160-600", 7)}
      </section>

      <section className="banners-728-90">
        <h2>728x90 Banners</h2>
        {renderAds("banner-728-90", "banner-728-90", 4)}
      </section>
    </div>
  );
}

export default AdPage1;

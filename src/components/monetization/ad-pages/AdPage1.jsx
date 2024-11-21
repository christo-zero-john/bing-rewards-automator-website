import "../../../styles/ad-page.css";
import { useEffect } from "react";

function AdPage1() {
  useEffect(() => {
    const startDelay = 3000;

    const scrollSpeed = 30;

    const scrollStep = 1;

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
    <div>
      native-banners*12
      <div className="native-banners-container">
        <iframe
          src="/ads/adsterra/native-banner"
          class="native-banner"
        ></iframe>
        <iframe
          src="/ads/adsterra/native-banner"
          class="native-banner"
        ></iframe>
        <iframe
          src="/ads/adsterra/native-banner"
          class="native-banner"
        ></iframe>
      </div>
      banners-300x250*8
      <div className="banners-300x250">
        <iframe
          src="/ads/adsterra/banner-300-250"
          class="banner-300x250"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-300-250"
          class="banner-300x250"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-300-250"
          class="banner-300x250"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-300-250"
          class="banner-300x250"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-300-250"
          class="banner-300x250"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-300-250"
          class="banner-300x250"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-300-250"
          class="banner-300x250"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-300-250"
          class="banner-300x250"
        ></iframe>
      </div>
      banners-160-600*7
      <div className="banners-160-600">
        <iframe
          src="/ads/adsterra/banner-160-600"
          className="banner-160-600"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-160-600"
          className="banner-160-600"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-160-600"
          className="banner-160-600"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-160-600"
          className="banner-160-600"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-160-600"
          className="banner-160-600"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-160-600"
          className="banner-160-600"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-160-600"
          className="banner-160-600"
        ></iframe>
      </div>
      banners-728-90*4
      <div className="banners-728-90">
        <iframe
          src="/ads/adsterra/banner-728-90"
          className="banner-728-90"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-728-90"
          className="banner-728-90"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-728-90"
          className="banner-728-90"
        ></iframe>
        <iframe
          src="/ads/adsterra/banner-728-90"
          className="banner-728-90"
        ></iframe>
      </div>
    </div>
  );
}

export default AdPage1;

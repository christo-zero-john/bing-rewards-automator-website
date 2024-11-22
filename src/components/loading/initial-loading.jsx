import { useEffect, useState } from "react";

function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    document.getElementById("continue-btn").disabled = true;
    setTimeout(() => {
      document.getElementById("continue-btn").disabled = false;
      return () => clearTimeout(timer);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(showLoading);
  }, [showLoading]);

  function hideLoading() {
    console.log("Hiding loader");
    setShowLoading(false);
  }

  return (
    <div
      className={`${
        !showLoading && "hidden"
      } initial-loading w-100 h-100 bg-dark overflow-auto no-scrollbar`}
    >
      <h2 className="fs-6 fw-100 p-2 text-center text-capitalize">
        Scrolldown and click <span className="text-info">continue</span> or
        <a href="/get-premium" className="link-warning p-2 fw-700">
          Buy Premium
        </a>
      </h2>
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar"
      ></iframe>
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="d-none d-md-block banner-468-60 no-scrollbar"
      ></iframe>
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="d-none d-md-block banner-468-60 no-scrollbar"
      ></iframe>
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar"
      ></iframe>{" "}
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar d-none d-md-inline"
      ></iframe>{" "}
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar d-none d-md-inline "
      ></iframe>
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar"
      ></iframe>
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar"
      ></iframe>{" "}
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar"
      ></iframe>{" "}
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar"
      ></iframe>{" "}
      <iframe
        src="/ads/adsterra/banner-468-60"
        className="banner-468-60 no-scrollbar"
      ></iframe>
      <div className="text-capitalize small p-3">
        Wait 10 seconds and click continue
        <button
          id="continue-btn"
          className="btn btn-info float-end"
          onClick={hideLoading}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Loading;

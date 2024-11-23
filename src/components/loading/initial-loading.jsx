import { useEffect, useState } from "react";

function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    document.getElementById("continue-btn").disabled = true;
    setTimeout(() => {
      document.getElementById("continue-btn").disabled = false;
      return () => clearTimeout(timer);
    }, 100);
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
      } bg-dark fixed-top initial-loading w-100 h-100 bg-dark overflow-auto no-scrollbar col-12`}
    >
      <h2 className="fs-6 fw-100 p-2 text-center text-capitalize">
        Scrolldown and click <span className="text-info">continue</span> or
        <a href="/get-premium" className="link-warning p-2 fw-700">
          Buy Premium
        </a>
      </h2>
      <iframe src="/ads" className="mx-auto col-11 hd-100 no-scrollbar"></iframe>
      <div className="text-capitalize small p-3">
        Wait for all AD's to load. Then click Continue
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

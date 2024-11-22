import { useEffect } from "react";
import "../../../styles/ad-page.css";

function AdPage() {
  // Create reusable components for each ad type
  const renderAds = (path, className, count) => {
    return (
      <iframe
        src="/ads/adsterra/native-banner"
        className="native-banner"
      ></iframe>
    );
  };

  return <div className="ad-page">{renderAds()}</div>;
}

export default AdPage;

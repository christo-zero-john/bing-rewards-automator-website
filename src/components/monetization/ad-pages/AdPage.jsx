import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/ad-page.css";

function AdPage() {
  const [randomIndex, setRandomIndex] = useState(1);

  function generateNewAd() {
    const randomNum = Math.floor(Math.random() * 10);
    let randomTime = Math.random() * 60 + 15;

    setRandomIndex(randomNum);

    return setTimeout(() => {
      console.log("Loading new AD, timeout: ", randomTime);
      generateNewAd();
    }, randomTime * 1000);
  }

  useEffect(() => {
    console.log("Setting up AD rotation");
    const timeoutId = generateNewAd();

    return () => {
      console.log("Cleaning up AD rotation");
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const avoidedIndexes = [2, 6, 10];
    if (avoidedIndexes.includes(randomIndex)) {
      setRandomIndex(Math.floor(Math.random() * 10));
    }
  }, [randomIndex]);

  const adTypes = {
    1: {
      type: "native-banner",
      count: 2,
      element: (index) => {
        return (
          <iframe
            src="/ads/adsterra/native-banner"
            className="d-inline-block native-banner"
            key={index}
          ></iframe>
        );
      },
    },

    2: {
      type: "popunder",
      count: 1,
      element: (index) => {
        return <Link key={index} />;
      },
    },

    3: {
      type: "banner-468-60",
      count: 7,
      element: (index) => {
        return (
          <iframe
            src="/ads/adsterra/banner-468-60"
            className="d-inline-block banner-468-60"
            key={index}
          ></iframe>
        );
      },
    },

    4: {
      type: "banner-300-250",
      count: 6,
      element: (index) => {
        return (
          <iframe
            src="/ads/adsterra/banner-300-250"
            className="d-inline-block banner-300-250"
            key={index}
          ></iframe>
        );
      },
    },

    5: {
      type: "banner-320-50",
      count: 6,
      element: (index) => {
        return (
          <iframe
            src="/ads/adsterra/banner-320-50"
            className="d-inline-block banner-320-50"
            key={index}
          ></iframe>
        );
      },
    },

    6: {
      type: "direct-link",
      count: 1,
      element: (index) => {
        return <Link key={index} />;
      },
    },

    7: {
      type: "banner-160-300",
      count: 6,
      element: (index) => {
        return (
          <iframe
            src="/ads/adsterra/banner-160-300"
            className="d-inline-block banner-160-300"
            key={index}
          ></iframe>
        );
      },
    },

    8: {
      type: "banner-160-600",
      count: 6,
      element: (index) => {
        return (
          <iframe
            src="/ads/adsterra/banner-160-600"
            className="d-inline-block banner-160-600"
            key={index}
          ></iframe>
        );
      },
    },

    9: {
      type: "banner-728-90",
      count: 6,
      element: (index) => {
        return (
          <iframe
            src="/ads/adsterra/banner-728-90"
            className="d-inline-block banner-728-90"
            key={index}
          ></iframe>
        );
      },
    },

    10: {
      type: "social-icon",
      count: 1,
      element: (index) => {
        return <Link key={index} />;
      },
    },
  };

  const renderAds = (ctx) => {
    let count = adTypes[ctx].count;
    console.log(
      `Index: ${ctx} Rendering ${adTypes[ctx].type} advertisement ${count} times`
    );

    let ads = [];
    for (let x = 0; x < count; x++) {
      ads.push(adTypes[ctx].element(x));
    }
    return ads;
  };

  return (
    <div className="no-scrollbar text-light">{renderAds(randomIndex)}</div>
  );
}

export default AdPage;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./src/App";
import About from "./src/components/About";
import AdPage1 from "./src/components/monetization/ad-pages/AdPage1";
import Banner320x50 from "./src/components/monetization/adsterra/Banner-320x50";
import Banner468x60 from "./src/components/monetization/adsterra/Banner-468x60";
import Banner160x300 from "./src/components/monetization/adsterra/Banner160x300";
import Banner160x600 from "./src/components/monetization/adsterra/Banner160x600";
import Banner300x250 from "./src/components/monetization/adsterra/Banner300x250";
import Banner728x90 from "./src/components/monetization/adsterra/Banner728x90";
import NativeBanner from "./src/components/monetization/adsterra/NativeBanner";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/ads/p1" element={<AdPage1 />} />
        <Route path="/ads/adsterra/banner-320-50" element={<Banner320x50 />} />
        <Route path="/ads/adsterra/banner-468-60" element={<Banner468x60 />} />

        <Route
          path="/ads/adsterra/banner-160-300"
          element={<Banner160x300 />}
        />

        <Route
          path="/ads/adsterra/banner-160-600"
          element={<Banner160x600 />}
        />
        <Route
          path="/ads/adsterra/banner-300-250"
          element={<Banner300x250 />}
        />
        <Route path="/ads/adsterra/banner-728-90" element={<Banner728x90 />} />
        <Route path="/ads/adsterra/native-banner" element={<NativeBanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

import { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Automation from "./components/Automation/Automation";
import Visitors from "./components/visitors-count/visitors";
import GlobalStats from "./components/global-stats/global-stats";
import UserStats from "./components/user-stats/user-stats";

import getSettings from "./localstore/get-settings";
import putSettings from "./localstore/put-settings";

import { Analytics } from "@vercel/analytics/react";
import MiningStats from "./components/Automation/mining-stats/mining-stats";
import AdDisplayOffcanvas from "./components/monetization/ad-pages/AdDisplayOffcanvas";

function App() {
  // localStorage.clear();
  // Fetch settings from local storage
  if (!getSettings()) {
    console.log("Saving Settings to local storage");
    putSettings({ count: 30, delay: 15 });
  }

  const adDisplayOffcanvasRef = useRef(null);
  function showAdOffcanvas() {
    adDisplayOffcanvasRef.current.show();
  }

  function hideAdOffcanvas() {
    adDisplayOffcanvasRef.current.hide();
  }

  const [settings, updateSettings] = useState(getSettings());

  console.log("settings", settings);
  const iframeRef = useRef(null);
  const [bool, setBool] = useState({
    showSettings: false,
    is_automating: false,
    showSearchResult: false,
    showMyStats: false,
  });

  return (
    <div className="bg-dark text-light text-uppercase en-Oxanium">
      <AdDisplayOffcanvas
        adDisplayOffcanvasRef={adDisplayOffcanvasRef}
        settings={settings}
        bool={bool}
      />
      <Analytics />
      <Navbar />
      <Visitors />
      <GlobalStats />
      <Automation
        iframeRef={iframeRef}
        bool={bool}
        setBool={setBool}
        settings={settings}
        updateSettings={updateSettings}
        showAdOffcanvas={showAdOffcanvas}
        hideAdOffcanvas={hideAdOffcanvas}
      />
      {/* <MiningStats settings={settings} bool={bool} /> */}
      <div className="checkboxes">
        <label className="m-3 fs-5 fw-100" htmlFor="showStatsCheckbox">
          My Stats
        </label>
        <input
          id="showStatsCheckbox"
          type="checkbox"
          className="m-2 checkbox"
          onClick={(e) => {
            setBool({ ...bool, showMyStats: e.target.checked });
          }}
        />

        <label className="m-3 fs-5 fw-100" htmlFor="showSearchResultCheckBox">
          Search Results
        </label>
        <input
          id="showSearchResultCheckBox"
          type="checkbox"
          className="m-2 checkbox"
          onClick={(e) => {
            setBool({ ...bool, showSearchResult: e.target.checked });
          }}
        />
        <p className="text-center">SHOW LOGS and know whats happening</p>
      </div>
      {bool.showMyStats && <UserStats />}
      <iframe
        src="/ads/adsterra/banner-728-90"
        className="banner-728-90 no-scrollbar"
      ></iframe>
      <iframe
        className={`${
          !bool.showSearchResult && "hidden"
        } webView w-100 no-scrollbar`}
        ref={iframeRef}
        src="https://www.bing.com/search?FORM=U523DF&PC=U523&q=bing-rewards-automator-website.vercel.app"
      ></iframe>
      <iframe
        src="/ads/adsterra/banner-728-90"
        className="banner-728-90 no-scrollbar"
      ></iframe>{" "}
      <iframe
        src="/ads/adsterra/banner-728-90"
        className="banner-728-90 no-scrollbar"
      ></iframe>{" "}
      <iframe
        src="/ads/adsterra/banner-728-90"
        className="banner-728-90 no-scrollbar"
      ></iframe>{" "}
      <iframe
        src="/ads/adsterra/banner-728-90"
        className="banner-728-90 no-scrollbar"
      ></iframe>
    </div>
  );
}

export default App;

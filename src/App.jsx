import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Automation from "./components/automation/Automation";
import Visitors from "./components/visitors-count/visitors";
import GlobalStats from "./components/global-stats/global-stats";
import UserStats from "./components/user-stats/user-stats";

import { Analytics } from "@vercel/analytics/react";

function App() {
  // localStorage.clear();
  const iframeRef = useRef(null);
  const [bool, setBool] = useState({
    showSettings: false,
    is_automating: false,
    showSearchResult: false,
    showMyStats: false,
  });

  return (
    <div className="bg-dark text-light text-uppercase en-Oxanium">
      <Analytics />
      <Navbar />
      <Visitors />
      <GlobalStats />
      <Automation iframeRef={iframeRef} bool={bool} setBool={setBool} />

      <div className="checkboxes">
        <label className="m-3 fs-5 fw-100" id="showStats">
          My Stats
          <input
            type="checkbox"
            className="m-2 checkbox"
            onClick={(e) => {
              setBool({ ...bool, showMyStats: e.target.checked });
            }}
          />
        </label>

        <label className="m-3 fs-5 fw-100" id="showSearchResults">
          Show Search Results
          <input
            type="checkbox"
            className="m-2 checkbox"
            onClick={(e) => {
              setBool({ ...bool, showSearchResult: e.target.checked });
            }}
          />
        </label>
        <p className="text-center">SHOW LOGS and know whats happening</p>
      </div>

      {bool.showMyStats && <UserStats />}

      <iframe
        className={`${
          !bool.showSearchResult && "hidden"
        } webView w-100 no-scrollbar`}
        ref={iframeRef}
        src="https://www.bing.com/search?FORM=U523DF&PC=U523&q=bing-rewards-automator-website.vercel.app"
      ></iframe>
    </div>
  );
}

export default App;

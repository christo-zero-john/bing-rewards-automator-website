import { useRef, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Automation from "./components/Automation/Automation";
import Visitors from "./components/visitors-count/visitors";
import GlobalStats from "./components/global-stats/global-stats";
import UserStats from "./components/user-stats/user-stats";

import getSettings from "./localstore/get-settings";
import putSettings from "./localstore/put-settings";

import { Analytics } from "@vercel/analytics/react";

import AdDisplayOffcanvas from "./components/monetization/ad-pages/AdDisplayOffcanvas";
import Loading from "./components/loading/initial-loading";

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

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      console.log("DOM loaded");
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const adContainer = [...mutation.addedNodes].find(
            (node) => node.id && node.id.startsWith("atContainer-")
          );
          if (adContainer) {
            adContainer.style.backgroundColor = "#212529";
            adContainer.style.color = "#fff";
            adContainer.style.margin = "0";
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });

    const iframes = document.getElementsByTagName("iframe");
    console.log(iframes);
  }, []);

  return (
    <div className="bg-dark text-light text-uppercase en-Oxanium position-relative min-vh-100">
      <Loading />
      <AdDisplayOffcanvas
        adDisplayOffcanvasRef={adDisplayOffcanvasRef}
        settings={settings}
        bool={bool}
      />
      <div className="content-wrapper">
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
          className={`${
            !bool.showSearchResult && "hidden"
          } webView w-100 no-scrollbar`}
          ref={iframeRef}
          src="https://www.bing.com/search?FORM=U523DF&PC=U523&q=bing-rewards-automator-website.vercel.app"
        ></iframe>
      </div>
    </div>
  );
}

export default App;

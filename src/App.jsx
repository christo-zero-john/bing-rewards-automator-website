import { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Automation from "./components/automation/automation";
import Stats from "./components/statistics/stats";
import Visitors from "./components/visitors-count/visitors";
import GlobalStats from "./components/global-stats/global-stats";

function App() {
  // localStorage.clear();
  const iframeRef = useRef(null);
  const [automationStatus, setAutomationStatus] = useState(false);
  return (
    <div className="bg-dark text-light text-uppercase en-Oxanium">
      <Navbar />
      <Visitors />
      <GlobalStats />
      <Automation
        automationStatus={automationStatus}
        setAutomationStatus={setAutomationStatus}
        iframeRef={iframeRef}
      />

      <div className="">
        <label className="m-3 fs-5" id="showStats">
          Show Statistics
          <input type="checkbox" className="m-2 checkbox" id="showStats" />
        </label>

        <label className="m-3 fs-5" id="showSearchResults">
          Show Search Results
          <input
            type="checkbox"
            className="m-2 checkbox"
            id="showSearchResults"
          />
        </label>
      </div>

      <Stats automationStatus={automationStatus} />

      <iframe
        className="webView"
        ref={iframeRef}
        src="https://www.bing.com/search?FORM=U523DF&PC=U523&q=bing-rewards-automator-website.vercel.app"
      ></iframe>
    </div>
  );
}

export default App;

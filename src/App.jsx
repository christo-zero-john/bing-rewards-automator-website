import React, { useRef, useState } from "react";
import "./App.css";
import Automation from "./components/Automation/Automation";
import Stats from "./components/Statistics/Stats";

function App() {
  // localStorage.clear();
  const iframeRef = useRef(null);
  const [automationStatus, setAutomationStatus] = useState(false);
  return (
    <div>
      <Automation
        automationStatus={automationStatus}
        setAutomationStatus={setAutomationStatus}
        iframeRef={iframeRef}
      />

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

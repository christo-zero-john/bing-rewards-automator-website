import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Automation from "./components/Automation/automation";
import Stats from "./components/Statistics/Stats";

function App() {
  const iframeRef = useRef(null);

  const [settings, changeSettings] = useState({ count: 2, delay: 10 * 1000 });

  return (
    <div>
      <Automation
        settings={{ settings, changeSettings }}
        iframeRef={iframeRef}
      />

      <Stats />

      <iframe
        className="webView"
        ref={iframeRef}
        src="https://www.bing.com/search?q=bing+rewards+automator+website&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=bing+automator+websit&sc=8-21&sk=&cvid=0DE08CFD7AE74266A2FE8C42FF1644AA&ghsh=0&ghacc=0&ghpl="
      >
        {" "}
      </iframe>
    </div>
  );
}

export default App;

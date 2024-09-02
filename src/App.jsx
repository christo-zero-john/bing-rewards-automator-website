import React, { useRef } from "react";
import "./App.css";
import Automation from "./components/Automation/Automation";
import Stats from "./components/Statistics/Stats";

function App() {
  const iframeRef = useRef(null);

  return (
    <div>
      <Automation iframeRef={iframeRef} />

      <Stats />

      <iframe
        className="webView"
        ref={iframeRef}
        src="https://www.bing.com/search?FORM=U523DF&PC=U523&q=bing-rewards-automator-website.vercel.app"
      >
      </iframe>
    </div>
  );
}

export default App;

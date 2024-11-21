import { useEffect } from "react";

function PopOver() {
  useEffect(() => {
    let script = document.createElement("script");
    script.src =
      "https://beatforumsubstitute.com/60/1d/a2/601da261a143f5bb54dd9af2e76649df.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="no-scrollbar"></div>;
}

export default PopOver;

import { useEffect } from "react";

function Banner320x50() {
  useEffect(() => {
    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.text = `
        atOptions = {
          'key': '2ffca080aef63c2f902b566fca65a7e6',
          'format': 'iframe',
          'height': 50,
          'width': 320,
          'params': {}
        };
      `;
    document.body.appendChild(optionsScript);

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://beatforumsubstitute.com/2ffca080aef63c2f902b566fca65a7e6/invoke.js";
    document.body.appendChild(invokeScript);

    return () => {
      document.body.removeChild(optionsScript);
      document.body.removeChild(invokeScript);
    };
  }, []);

  return <div className="no-scrollbar">{/* Ad content will load here */}</div>;
}

export default Banner320x50;

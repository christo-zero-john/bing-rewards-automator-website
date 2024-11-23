import { useEffect } from "react";

function Banner160x300() {
  useEffect(() => {
    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.text = `
        atOptions = {
          'key': 'b2ac8f18072d77699c6581a6e3862ffc',
          'format': 'iframe',
          'height': 300,
          'width': 160,
          'params': {}
        };
      `;
    document.body.appendChild(optionsScript);

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://beatforumsubstitute.com/b2ac8f18072d77699c6581a6e3862ffc/invoke.js";
    document.body.appendChild(invokeScript);

    return () => {
      document.body.removeChild(optionsScript);
      document.body.removeChild(invokeScript);
    };
  }, []);

  return <div className="no-scrollbar banner-160-300 bg-transparent">{/* Ad content will load here */}</div>;
}

export default Banner160x300;

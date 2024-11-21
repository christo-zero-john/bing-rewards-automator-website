import { useEffect } from "react";

function Banner160x600() {
  useEffect(() => {
    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.text = `
        atOptions = {
          'key': 'fa3cc7cd086647141ae6dbfe8be422ac',
          'format': 'iframe',
          'height': 600,
          'width': 160,
          'params': {}
        };
      `;
    document.body.appendChild(optionsScript);

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "//beatforumsubstitute.com/fa3cc7cd086647141ae6dbfe8be422ac/invoke.js";
    document.body.appendChild(invokeScript);

    return () => {
      document.body.removeChild(optionsScript);
      document.body.removeChild(invokeScript);
    };
  }, []);

  return <div className="no-scrollbar">{/* Ad content will load here */}</div>;
}

export default Banner160x600;

import { useEffect } from "react";

function Banner300x250() {
  useEffect(() => {
    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.text = `
        atOptions = {
          'key': 'bd380e702e08c2f819b48d707bd0d438',
          'format': 'iframe',
          'height': 250,
          'width': 300,
          'params': {}
        };
      `;
    document.body.appendChild(optionsScript);

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://beatforumsubstitute.com/bd380e702e08c2f819b48d707bd0d438/invoke.js";
    document.body.appendChild(invokeScript);

    return () => {
      document.body.removeChild(optionsScript);
      document.body.removeChild(invokeScript);
    };
  }, []);

  return <div className="no-scrollbar banner-300-250">{/* Ad content will load here */}</div>;
}

export default Banner300x250;

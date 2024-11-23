import { useEffect } from "react";

function Banner728x90() {
  useEffect(() => {
    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.text = `
        atOptions = {
          'key': '0201c9fc10dfa8fba9bb426cb9ba613c',
          'format': 'iframe',
          'height': 90,
          'width': 728,
          'params': {}
        };
      `;
    document.body.appendChild(optionsScript);

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://beatforumsubstitute.com/0201c9fc10dfa8fba9bb426cb9ba613c/invoke.js";
    document.body.appendChild(invokeScript);

    return () => {
      document.body.removeChild(optionsScript);
      document.body.removeChild(invokeScript);
    };
  }, []);

  return (
    <div className="no-scrollbar banner-728-90 bg-transparent">
      {/* Ad content will load here */}
    </div>
  );
}

export default Banner728x90;

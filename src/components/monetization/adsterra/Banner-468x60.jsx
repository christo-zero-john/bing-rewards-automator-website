import { useEffect } from "react";

function Banner468x60() {
  useEffect(() => {
    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.text = `
        atOptions = {
          'key': '3e11e8c367d69bf9ed998aacdb666555',
          'format': 'iframe',
          'height': 60,
          'width': 468,
          'params': {}
        };
      `;
    document.body.appendChild(optionsScript);

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://beatforumsubstitute.com/3e11e8c367d69bf9ed998aacdb666555/invoke.js";
    document.body.appendChild(invokeScript);

    return () => {
      document.body.removeChild(optionsScript);
      document.body.removeChild(invokeScript);
    };
  }, []);

  return (
    <div className="no-scrollbar bg-transparent">
      {/* Ad content will load here */}
    </div>
  );
}

export default Banner468x60;

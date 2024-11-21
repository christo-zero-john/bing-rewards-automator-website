import { useEffect } from "react";

function NativeBanner() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.src =
      "//beatforumsubstitute.com/702b3c3e998058f2e03bcbe99aca826b/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      className="no-scrollbar"
      id="container-702b3c3e998058f2e03bcbe99aca826b"
    ></div>
  );
}

export default NativeBanner;

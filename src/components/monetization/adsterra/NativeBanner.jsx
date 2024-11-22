import { useEffect } from "react";

function NativeBanner() {
  useEffect(() => {
    
    const script = document.createElement("script");
    script.src =
      "https://beatforumsubstitute.com/702b3c3e998058f2e03bcbe99aca826b/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <div
      className="no-scrollbar native-banner"
      id="container-702b3c3e998058f2e03bcbe99aca826b"
    ></div>
  );
}

export default NativeBanner;

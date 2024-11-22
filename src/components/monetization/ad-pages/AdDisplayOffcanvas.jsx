import { useEffect } from "react";
import { Offcanvas } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MiningStats from "../../Automation/mining-stats/mining-stats";

function AdDisplayOffcanvas({ adDisplayOffcanvasRef, settings, bool }) {
  useEffect(() => {
    let adOffcanvasDiv = document.getElementById("adOffcanvas");
    let adOffcanvas = new Offcanvas(adOffcanvasDiv);
    adDisplayOffcanvasRef.current = adOffcanvas;
  }, []);

  return (
    <>
      <div className="">
        <div
          ref={adDisplayOffcanvasRef}
          className="bg-dark text-light fw-100 offcanvas offcanvas-start"
          tabIndex="-1"
          id="adOffcanvas"
          aria-labelledby="adOffcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="adOffcanvasLabel small">
              While we mine your points, watch soem ads or{" "}
              <a href="/get-premium" className="link-warning">
                Go AD Free
              </a>
            </h5>
          </div>
          <div className="offcanvas-body no-scrollbar">
            <MiningStats settings={settings} bool={bool} />
            <iframe
              src="/ads/adsterra/native-banner"
              className=" no-scrollbar m-3 native-banner"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdDisplayOffcanvas;

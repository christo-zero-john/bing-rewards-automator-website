import { useEffect } from "react";
import "../../../boostrap/js/bootstrap.bundle";
import MiningStats from "../../Automation/mining-stats/mining-stats";

function AdDisplayOffcanvas({ adDisplayOffcanvasRef, settings, bool }) {
  useEffect(() => {
    let adOffcanvasDiv = document.getElementById("adOffcanvas");
    let adOffcanvas = new bootstrap.Offcanvas(adOffcanvasDiv);
    adDisplayOffcanvasRef.current = adOffcanvas;
  }, []);

  return (
    <>
      <div className="">
        <div
          ref={adDisplayOffcanvasRef}
          className="offcanvas ofcanvas-lg bg-dark text-light fw-100 show"
          tabIndex="-1"
          id="adOffcanvas"
          aria-labelledby="adOffcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="small" id="adOffcanvasLabel">
              While we mine your points, go through these advertisements or{" "}
              <span className="text-warning">Go AD Free</span>
            </h5>
          </div>
          <div className="offcanvas-body no-scrollbar p-0">
            <MiningStats settings={settings} bool={bool} />

            <iframe
              src="/ads/p1"
              className="no-scrollbar overflow-auto m-0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdDisplayOffcanvas;
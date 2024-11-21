import AllTimeVisitors from "./all-time";
import DailyVisitors from "./daily-visitors";

function Visitors() {
  return (
    <>
      <div className="d-flex flex-row justify-centent-center align-items-center">
        <AllTimeVisitors />
        <DailyVisitors />
      </div>
      <div className="d-inline">
        <iframe
          src="/ads/adsterra/banner-468-60"
          className="banner-468-60 no-scrollbar wd-30"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-468-60"
          className="banner-468-60 no-scrollbar d-none d-md-inline"
        ></iframe>{" "}
        <iframe
          src="/ads/adsterra/banner-468-60"
          className="banner-468-60 no-scrollbar d-none d-md-inline "
        ></iframe>
      </div>
    </>
  );
}

export default Visitors;

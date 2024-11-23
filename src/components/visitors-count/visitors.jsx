import AllTimeVisitors from "./all-time";
import DailyVisitors from "./daily-visitors";

function Visitors() {
  return (
    <>
      <div className="d-flex flex-row justify-centent-center align-items-center">
        <AllTimeVisitors />
        <DailyVisitors />
      </div>
    </>
  );
}

export default Visitors;

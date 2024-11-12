import image from "../../images/24-hrs-users.png";
import VisitorsCard from "./visitors-card";
function DailyVisitors() {
  let count = 1094;
  return <VisitorsCard image={image} count={count} />;
}

export default DailyVisitors;

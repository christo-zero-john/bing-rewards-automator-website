import image from "../../images/all-time-users.png";
import VisitorsCard from "./visitors-card";

function AllTimeVisitors() {
  let count = 1094;
  return <VisitorsCard image={image} count={count} />;
}

export default AllTimeVisitors;

import AutomationsCount from "./automations-count";
import SearchesCount from "./searches-count";
import PointsMined from "./points-mined";

function UserStats({ stats }) {
  return (
    <div className="">
      <h2>Your Statistics</h2>
      <AutomationsCount />
      <SearchesCount />
      <PointsMined />
    </div>
  );
}

export default UserStats;

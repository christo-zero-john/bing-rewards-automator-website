import UserStatsCard from "./stats-card";
import deviceImage from "../../images/devices-count.png";
import automationsImage from "../../images/automations-count.png";
import searchesImage from "../../images/searches-count.png";
import pointsMinedImage from "../../images/start-automation.png";

function UserStats() {
  let count = {
    deviceCount: 210,
    automationsCount: 2100,
    searchesCount: 2100,
    pointsMined: 2100,
  };

  return (
    <div className="d-flex flex-row overflow-auto no-scrollbar user-stats">
      <UserStatsCard
        title="automations"
        image={automationsImage}
        count={count.automationsCount}
      />

      <UserStatsCard
        title="searches"
        image={searchesImage}
        count={count.searchesCount}
      />

      <UserStatsCard
        title="pointsMined"
        image={pointsMinedImage}
        count={count.pointsMined}
      />
    </div>
  );
}

export default UserStats;

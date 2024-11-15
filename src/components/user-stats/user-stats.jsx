import UserStatsCard from "./stats-card";
import automationsImage from "../../images/automations-count.png";
import searchesImage from "../../images/searches-count.png";
import pointsMinedImage from "../../images/start-automation.png";
import { getUserStats } from "../../modules/manage/user-stats";

function UserStats() {
  let userStats = getUserStats();

  return (
    <div className="d-flex flex-row overflow-auto no-scrollbar user-stats">
      <UserStatsCard
        title="automations"
        image={automationsImage}
        count={userStats.automationsCount}
      />

      <UserStatsCard
        title="searches"
        image={searchesImage}
        count={userStats.searchesCount}
      />

      <UserStatsCard
        title="pointsMined"
        image={pointsMinedImage}
        count={userStats.pointsMined}
      />
    </div>
  );
}

export default UserStats;

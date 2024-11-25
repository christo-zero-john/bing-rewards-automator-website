import UserStatsCard from "./stats-card";
import automationsImage from "../../images/automations-count.png";
import searchesImage from "../../images/searches-count.png";
import pointsMinedImage from "../../images/start-automation.png";
import { getUserStats } from "../../modules/manage/user-stats";

function UserStats() {
  let userStats = getUserStats();

  return (
    <>
      <iframe
        src="/ads/adsterra/banner-728-90"
        className="banner-728-90 no-scrollbar d-none d-md-inline"
      ></iframe>
      <div className="d-flex flex-row overflow-auto no-scrollbar user-stats">
        <UserStatsCard
          title="automations"
          image={automationsImage}
          count={userStats.totalTimesAutomated}
        />

        <UserStatsCard
          title="searches"
          image={searchesImage}
          count={userStats.totalSearches}
        />

        <UserStatsCard
          title="pointsMined"
          image={pointsMinedImage}
          count={userStats.totalPointsMined}
        />
      </div>
    </>
  );
}

export default UserStats;

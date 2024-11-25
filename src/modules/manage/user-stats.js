function updateUserStats(currentStats, ...ctx) {
  ctx.forEach((item) => {
    switch (item) {
      case 1: {
        currentStats.automationsCount++;
        break;
      }
      case 2: {
        currentStats.searchesCount++;
        break;
      }
      case 3: {
        currentStats.pointsMined += 3;
        break;
      }
    }
  });
  putUserStats(currentStats);
  return currentStats;
}

function getUserStats() {
  let userStatTemplate = {
    totalTimesAutomated: 0,
    totalSearches: 0,
    totalPointsMined: 0,
    lastLogin: new Date(),
  };

  let userStats = JSON.parse(localStorage.getItem("user-stats"));
  if (userStats) {
    return userStats;
  } else {
    putUserStats(userStatTemplate);
    return userStatTemplate;
  }
}

function putUserStats(currentStats) {
  localStorage.setItem("user-stats", JSON.stringify(currentStats));
}

export { updateUserStats, getUserStats, putUserStats };

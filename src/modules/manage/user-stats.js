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
    automationsCount: 0,
    searchesCount: 0,
    pointsMined: 0,
    lastLogin: new Date(),
  };

  let userStas = JSON.parse(localStorage.getItem("user-stats"));
  if (userStas) {
    return userStas;
  } else {
    putUserStats(userStatTemplate);
    return userStatTemplate;
  }
}

function putUserStats(currentStats) {
  localStorage.setItem("user-stats", JSON.stringify(currentStats));
}

export { updateUserStats, getUserStats, putUserStats };

function getSettings() {
  return JSON.parse(localStorage.getItem("settings"));
}

export default getSettings;

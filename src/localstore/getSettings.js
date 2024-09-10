function getSettings() {
  let data = JSON.parse(localStorage.getItem("settings"));
  data.searchLeft = data.count;
  return data;
}

export default getSettings;

import "../../styles/automations.css";

function Settings({ settings, updateSettings, bool }) {
  const handleSearchCountInput = (e) => {
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    if (e.target.value > 90) {
      e.target.value = 90;
    }
    console.log("changed count to ", e.target.value);
    updateSettings((currentSettings) => ({
      ...currentSettings,
      count: e.target.value,
      searchLeft: e.target.value,
    }));
  };

  return (
    <div className="mb-3">
      <p className="fs-3 text-center m-3 ">Settings</p>
      <div className="mx-auto w-fit mb-5">
        <label className="d-block mx-3 my-2 " htmlFor="count">
          Count
          <input
            disabled={bool.is_automating}
            id="count"
            type="number"
            min={1}
            value={settings.count}
            placeholder="Enter Count"
            onChange={handleSearchCountInput}
          />
        </label>

        <label className="d-block mx-3 my-2 " htmlFor="delay">
          Delay
          <input
            disabled={bool.is_automating}
            id="delay"
            type="number"
            value={settings.delay}
            placeholder="Enter delay in seconds"
            onChange={(e) => {
              if (e.target.value < 5) {
                e.target.value = 5;
              }
              if (e.target.value > 90) {
                e.target.value = 90;
              }
              console.log("changed delay to ", e.target.value, "seconds");
              updateSettings((currentSettings) => ({
                ...currentSettings,
                delay: e.target.value,
              }));
            }}
          />
          seconds
        </label>
      </div>
    </div>
  );
}

export default Settings;

import React from "react";
import "../../styles/automations.css";

function InputForms({ settings, updateSettings }) {
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
    <div>
      <label htmlFor="count">
        Number of Searches:
        <input
          disabled={settings.is_automating}
          id="count"
          type="number"
          min={1}
          value={settings.count}
          placeholder="Enter count"
          onChange={handleSearchCountInput}
        />
      </label>

      <label htmlFor="delay">
        Delay Between each Search:
        <input
          disabled={settings.is_automating}
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
  );
}

export default InputForms;

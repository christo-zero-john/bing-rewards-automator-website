import { useState, useCallback, useEffect } from "react";
import getSettings from "../../localstore/get-settings";
import putSettings from "../../localstore/put-settings";
import getJokes from "../../service-vendors/official-jokes-api";
import updateStats from "../../modules/update-stats";
import Settings from "../settings/settings";

import "../../styles/automations.css";
import btnImage from "../../images/start-automation.png";
import settingsImg from "../../images/settings.png";
import MiningStats from "./mining-stats/mining-stats";

function Automation({ iframeRef, bool, setBool }) {
  // localStorage.clear();

  // Fetch settings from local storage
  if (!getSettings()) {
    console.log("Saving Settings to local storage");
    putSettings({ count: 30, delay: 15 });
  }

  const [settings, updateSettings] = useState(getSettings());
  console.log("settings", settings);

  const people = [
    "Yang Kai",
    "Yu Ru Meng",
    "Qu Hua Chang",
    "Ru Meng",
    "Zhu Qing",
    "Xue Yue",
    "Tang san",
    "Xiao Wu",
    "Yu Xiaogang",
    "Hu Liena",
    "Zhu Zhu Qing",
    "Dai Mu Bai",
    "Liu Erlong",
    "Ma Hong Jun",
    "Bi Bidong",
    "Dugu Bo",
    "Xue Beng",
    "Su Yuntao",
    "Xue Qinghe",
    "Bu Le",
    "Ye Zhiqiu",
    "Ning Feng Zhi",
    "Tai Long",
    "Liu Long",
    "Jian Dou Luo",
    "Su Yun Tao",
    "Yu Tianheng",
    "Fei lan De",
    "Xiao Chenyu",
    "Dugu Ya",
  ];

  useEffect(() => {
    console.log("BOOL: ", bool);
  }, [bool]);

  let urlSet = [];

  useEffect(() => {
    console.log("search left updated");
    if (settings.searchLeft == 0) {
      props.setAutomationStatus(false);
    }
  }, [settings.searchLeft]);

  const startSearchAutomation = async () => {
    // set automation property as true.
    setBool({ ...bool, is_automating: true });
    console.log("Starting Search Automation");

    let jokes = new Array();
    jokes = await getJokes(settings.count);
    // console.log(settings);
    // stats.totalTimesAutomated++;
    updateStats(1);
    console.log("Jokes fetched successfully.");

    // Convert all jokes to search parameter format
    for (let x = 0; x < jokes.length; x++) {
      urlSet.push(convertToSearchParameter(jokes[x]));
    }
    console.log("converted to url format.");
    console.log("Sequencing Search Automation");
    sequenceSearchAutomation();
  };

  const convertToSearchParameter = (text) => {
    let textArray = text.split(" ");
    let link = new String("");
    for (let x = 0; x < textArray.length; x++) {
      link += textArray[x] + "+";
    }
    return link;
  };

  const sequenceSearchAutomation = async () => {
    console.log("Started automation with url set.");
    let x = 0;
    const sequence = () => {
      console.log("x ", x);
      updateSettings((prevSettings) => ({
        ...prevSettings,
        searchLeft: settings.count - x,
      }));
      if (x < settings.count) {
        iframeRef.current.src = `https://www.bing.com/search?FORM=U523DF&PC=U523&q=${urlSet[x]}?`;
        updateStats(2);
        updateStats(3);
        // stats.totalSearches++;
        // stats.totalPointsMined += 3;
        x++;
        setTimeout(sequence, settings.delay * 1000);
      }
    };
    sequence();
  };

  const handleSearchComplete = useCallback(() => {
    if (settings.searchLeft > 0) {
      updateSettings({
        ...settings,
        searchLeft: settings.searchLeft - 1,
      });
      // Here, you would also trigger the actual search functionality
      console.log("Performing search...");
    }
  }, [settings, updateSettings]);

  function openHideSettings() {
    setBool({ ...bool, showSettings: !bool.showSettings });
  }

  return (
    <div className="automation">
      <div className="row justify-content-around col-12 mx-auto">
        <div className="col-12 col-md-7 border-end border-dark settings">
          {
            // SHow or hide settings
            bool.showSettings && (
              <Settings
                settings={settings}
                updateSettings={updateSettings}
                bool={bool}
              />
            )
          }

          <div className=" mx-auto">
            <button
              className="start-btn btn btn-light col-10 text-start px-4 d-inline-block"
              onClick={startSearchAutomation}
              disabled={bool.is_automating}
            >
              <img
                src={btnImage}
                alt="Start Automation Image"
                className="icons-main"
              />
              <span className="ms-3">
                {(!bool.is_automating && "START SEARCHING") || "Mining Points"}{" "}
              </span>
            </button>
            <img
              src={settingsImg}
              alt=""
              className="settings-icon col-1 px-1  d-inline-block"
              onClick={openHideSettings}
            />
          </div>
        </div>

        <MiningStats
          settings={settings}
          handleSearchComplete={handleSearchComplete}
        />
      </div>
    </div>
  );
}

export default Automation;

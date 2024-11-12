import { useState, useCallback, useEffect } from "react";
import getSettings from "../../localstore/get-settings";
import putSettings from "../../localstore/put-settings";
import getJokes from "../../service-vendors/official-jokes-api";
import updateStats from "../statistics/update-stats";
import Navbar from "../common/navbar";
import Settings from "../settings/settings";
import SearchLeft from "./search-left";
import NextSearchIn from "./next-search-in";

import "../../styles/automations.css";

function Automation(props) {
  // localStorage.clear();

  // Fetch settings from local storage
  if (!getSettings()) {
    console.log("Saving Settings to local storage");
    putSettings({ count: 30, delay: 15 });
  }

  const [settings, updateSettings] = useState(getSettings());
  console.log("settings", settings);
  useEffect(() => {
    updateSettings({
      ...settings,
      is_automating: props.automationStatus,
    });
  }, []);

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

  let urlSet = [];

  useEffect(() => {
    console.log("search left updated");
    if (settings.searchLeft == 0) {
      props.setAutomationStatus(false);
    }
  }, [settings.searchLeft]);

  const startSearchAutomation = async () => {
    // set automation property as true.
    props.setAutomationStatus(true);
    console.log(props.automationStatus, settings);
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
        props.iframeRef.current.src = `https://www.bing.com/search?FORM=U523DF&PC=U523&q=${urlSet[x]}?`;
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

  return (
    <div className="automation">
      <Navbar />

      <div className="row justify-content-around border border-dark">
        <div className="col-12 col-md-5 border-end border-dark settings">
          <h1 className="">Settings</h1>
          <Settings
            automationStatus={settings.is_automating}
            settings={settings}
            updateSettings={updateSettings}
          />

          <button className="btn btn-success col-11 m-3 mx-auto text-center"
            onClick={startSearchAutomation}
            disabled={settings.is_automating}
          >
            START SEARCHING
          </button>
        </div>

        <div className="col-12 col-md-5 border-end">
          <h1 className="">Automation</h1>
          <SearchLeft settings={settings} />
          <NextSearchIn
            settings={settings}
            onSearchComplete={handleSearchComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default Automation;

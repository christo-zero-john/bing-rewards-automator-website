import React, { useEffect, useRef, useState } from "react";
import getSettings from "../../localstore/getSettings";
import putSettings from "../../localstore/putSettings";

function Automation(props) {
  if (!getSettings()) {
    console.log("Stats not find: Saving stats to local storage");
    putSettings({ count: 30, delay: 15 });
  }

  const [settings, changeSettings] = useState(getSettings());

  let stats = useState({
    visitorCount: 0,
    totalTimesAutomated: 0,
    totalSearches: 0,
    totalPointsMined: 0,
    totalDevices: 0,
  });

  const [searchLeft, setSearchLeft] = useState(settings.count);

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

  const startSearchAutomation = async () => {
    console.log("Starting Search Automation");
    let jokes = new Array();
    jokes = await getJokes(settings.count);
    console.log(settings);
    stats.totalTimesAutomated++;

    console.log(jokes);
    for (let x = 0; x < jokes.length; x++) {
      jokes[x] = convertToUrl(jokes[x]);
    }
    console.log("converted to url format", jokes);
    urlSet = jokes;
    console.log("Sequencing Search Automation");
    sequenceSearchAutomation();
  };

  const getJokes = async (num) => {
    console.log("Fetching Jokes from Jokes API");

    let link = `https://official-joke-api.appspot.com/jokes/random/${num || 2}`;
    console.log(link);
    let response = await fetch(link);
    let data = await response.json();
    let jokes = new Array();
    for (let i = 0; i < data.length; i++) {
      jokes.push(data[i].setup + " " + data[i].punchline);
    }
    return jokes;
  };

  const convertToUrl = (text) => {
    let textArray = text.split(" ");
    let link = new String("");
    for (let x = 0; x < textArray.length; x++) {
      link += textArray[x] + "+";
    }
    return link;
  };

  const sequenceSearchAutomation = async () => {
    console.log("Started with url set", urlSet);
    let x = 0;
    const sequence = () => {
      if (x < urlSet.length) {
        props.iframeRef.current.src = `https://www.bing.com/search?FORM=U523DF&PC=U523&q=${urlSet[x]}?`;
        searchLeft--;
        stats.totalSearches++;
        stats.totalPointsMined += 3;
        x++;
        searchLeft--;
        setTimeout(sequence, settings.delay * 1000);
      }
    };
    sequence();
  };

  return (
    <div className="automation">
      <label for="count">
        Number of Searches:
        <input
          id="count"
          type="number"
          min={1}
          value={settings.count}
          placeholder="Enter count"
          onChange={(e) => {
            if (e.target.value < 1) {
              e.target.value = 1;
            }
            if (e.target.value > 90) {
              e.target.value = 90;
            }
            console.log("changed count to ", e.target.value);
            changeSettings((currentSettings) => ({
              ...currentSettings,
              count: e.target.value,
            }));
            setSearchLeft(e.target.value);
          }}
        />
      </label>

      <label for="delay">
        Delay Between each Search:
        <input
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
            changeSettings((currentSettings) => ({
              ...currentSettings,
              delay: e.target.value,
            }));
          }}
        />
        seconds
      </label>

      <p>Number of Searches Left: {searchLeft}</p>

      <button onClick={() => startSearchAutomation()}>
        START SEARCH AUTOMATION
      </button>
    </div>
  );
}

export default Automation;

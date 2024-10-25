import React, { useEffect, useState, useRef } from "react";

function NextSearchIn({ settings, onSearchComplete }) {
  const [timeLeft, setTimeLeft] = useState(settings.delay);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(settings.delay);
  }, [settings.delay]);

  useEffect(() => {
    if (settings.is_automating && settings.searchLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // When the countdown reaches 0, trigger the next search
            onSearchComplete();
            return settings.delay;
          }
          return prevTime - 1;
        });
      }, 1000);

      console.log("New interval set");
    } else {
      // Clear the interval if automation is stopped or searches are complete
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        console.log("Interval cleared");
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        console.log("Interval cleared on cleanup");
      }
    };
  }, [settings.is_automating, settings.searchLeft, settings.delay, onSearchComplete]);

  return (
    <div className="">
      <p className="">Next Search In {timeLeft} secs</p>
    </div>
  );
}

export default NextSearchIn;

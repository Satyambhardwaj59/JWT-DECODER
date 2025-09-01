import React, { useEffect, useState } from "react";

const TimeWidget = () => {
  const [timeData, setTimeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const res = await fetch(
          "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata"
        );
        if (!res.ok) throw new Error("Failed to fetch time");
        const data = await res.json();
        setTimeData(data);
      } catch (err) {
        setError("Unable to fetch time. Please try again later.");
        console.error(err);
      }
    };

    fetchTime();

    // refresh every 60 seconds
    const interval = setInterval(fetchTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5 bg-gray-800 rounded-2xl shadow-md w-full max-w-md mx-auto text-center">
      <h2 className="text-lg font-semibold mb-2">Current Time</h2>
      {error && <p className="text-red-400">{error}</p>}
      {timeData ? (
        <div>
          <p className="text-xl font-bold">{timeData.time}</p>
          <p className="text-sm text-gray-400">{timeData.date}</p>
          <p className="text-sm text-gray-400">{timeData.timeZone}</p>
        </div>
      ) : (
        !error && <p className="text-gray-400">Loading...</p>
      )}
    </div>
  );
};

export default TimeWidget;

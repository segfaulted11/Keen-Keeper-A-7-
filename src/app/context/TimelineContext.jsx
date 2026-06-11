"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const savedActivities = localStorage.getItem("timeline");

    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(activities));
  }, [activities]);

  const addActivity = (friend, action) => {
    const alreadyExists = activities.some(
      (activity) =>
        activity.friendId === friend.id &&
        activity.action === action
    );

    if (alreadyExists) return;

    const newActivity = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      action,
      timestamp: new Date().toISOString(),
    };

    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <TimelineContext.Provider
      value={{
        activities,
        addActivity,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export const useTimeline = () => useContext(TimelineContext);
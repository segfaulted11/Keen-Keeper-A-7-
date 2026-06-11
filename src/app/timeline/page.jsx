"use client";

import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import { PhoneCall, MessageCircle, Camera } from "lucide-react";

const Timeline = () => {
  const { activities } = useTimeline();

  const getIcon = (action) => {
    switch (action) {
      case "call":
        return <PhoneCall size={40} />;
      case "text":
        return <MessageCircle size={40} />;
      case "video":
        return <Camera size={40} />;
      default:
        return null;
    }
  };

  const getTitle = (activity) => {
    switch (activity.action) {
      case "call":
        return `Call with ${activity.friendName}`;
      case "text":
        return `Text with ${activity.friendName}`;
      case "video":
        return `Video with ${activity.friendName}`;
      default:
        return "";
    }
  };

  const [filter, setFilter] = useState("all");
  const filteredActivities =
  filter === "all"
    ? activities
    : activities.filter(
        (activity) => activity.action === filter
      );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Timeline</h1>

      <div className="mb-6">
  <select
    className="select select-bordered"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="all">All Activities</option>
    <option value="call">Call</option>
    <option value="text">Text</option>
    <option value="video">Video</option>
  </select>
</div>

      {filteredActivities.length === 0 ? (
        <div className="bg-base-100 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold">
            No activities yet
          </h2>
          <p className="text-gray-500 mt-2">
            Start calling, texting, or video calling friends to see activities here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-base-100 rounded-2xl shadow-md p-5 flex items-center gap-5"
            >
              <div className="flex-shrink-0">
                {getIcon(activity.action)}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {getTitle(activity)}
                </h3>

                <p className="text-gray-500">
                  {new Date(activity.timestamp).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
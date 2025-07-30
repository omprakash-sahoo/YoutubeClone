import React from "react";
function formatViews(views) {
  if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + "M";
  if (views >= 1_000) return (views / 1_000).toFixed(1) + "K";
  return views;
}
function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "Just now";
}
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, localized, channelTitle } = snippet;
  console.log(info);
  // const { thumbnails } = snippet;
  return (
    <div className="h-full w-[401px]">
      <div>
        <img
          className="h-[226px] w-[401px] object-cover rounded-3xl p-2 hover:rounded-none transition-all duration-500"
          src={thumbnails.high.url}
        ></img>
      </div>
      <div>
        <div>
          <p className="font-semibold">{localized.title}</p>
          <p className="text-gray-500">{channelTitle}</p>
          <p className="text-gray-500">
            {formatViews(statistics.viewCount)}
            <span className="ml-2">{timeAgo(snippet.publishedAt)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

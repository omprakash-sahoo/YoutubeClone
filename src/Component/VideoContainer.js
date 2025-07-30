import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constant";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    // const data = await fetch(YOUTUBE_VIDEO_API);
    // const json = await data.json();
    // console.log(json);
  };
  return (
    <div>
      <h1></h1>
      <VideoCard />
    </div>
  );
};

export default VideoContainer;

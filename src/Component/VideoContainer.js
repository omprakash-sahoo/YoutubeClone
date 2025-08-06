import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { Link } from "react-router";
import { openMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(openMenu());
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json.items);
  };
  return (
    <div className="ml-4 mt-4 flex flex-wrap">
      <h1></h1>
      {video.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

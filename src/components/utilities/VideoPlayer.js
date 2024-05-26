"use client";
import YouTube from "react-youtube"

export default function VideoPlayer({ytid}){

    const options = {
        width: "100%",
        height: "384"
    }
  return (
      <>
        <div className="">
        <YouTube videoId={ytid} onReady={(e) => e.target.pauseVideo()} opts={options}/>
        </div> 
    </>
)
}
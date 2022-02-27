"use strict";

import newElement from "./newElement";

function addVideo(source) {
  const sourceDiv = newElement("source", {src: source, type: "video/mp4"}, []);
  const video =  newElement("video", {class: "myVideo"}, [sourceDiv]);

  video.autoplay = true;
  video.muted = true;
  video.loop = true;

  return video;
}

const video = addVideo("./bg_video.mov");

export default video;
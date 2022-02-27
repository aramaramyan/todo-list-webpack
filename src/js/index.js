"use strict";

import "../css/style.css";
import videoFile from "../media/bg_video.mov"
import video from "./video";
import todo from "./createTodo";

function main() {
  const root = document.getElementById("root");

  root.append(video, todo);
}

main();
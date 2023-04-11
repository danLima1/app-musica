import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";
import { Songs } from "./Songs";

function audioList() {
  return (
    <div className='audioList'>
<h2 className='title'> a lista<span>12 musicas</span></h2>
<div className="songsContainer"></div>
    </div>
  )
}

export  {audioList}
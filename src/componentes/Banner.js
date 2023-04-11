import React from "react";
import artist from "../img/artist.png";
import check from "../img/check.png";
import '../styles/MainContainer.css'
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className='banner'>
<img src={artist} alt="" className="bannerImg" />
<div className="content">
  <div className="breadCrump">
    <p>home <span>/Artista Popular</span></p>
    <i><FaEllipsisH/></i>
  </div>
  <div className="artist">
    <div className="left">
      <div className="name">
        <h2>Lana Del Rey</h2>
        <img src={check}/>
      </div>
<p><i><FaHeadphones/></i>43,298,712 <span>ouvintes mensais</span></p>
    </div>
    <div className="right">
      <a href="#">Play</a>
      <a href="#"><i><FaCheck/></i>following</a>
    </div>
  </div>
</div>
<div className="bottom"></div>
    </div>
  )
}

export  {Banner}
import React from "react";
import artist from "../img/artist.png";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className='banner'>
<img src={artist} alt="" className="bannerImg" />
<div className="content">
  <div className="text">
    <p>home <span>/Artista Popular</span></p>
    <i><FaEllipsisH/></i>
  </div>
  <div className="artist">
    <div className="esquerda">
      <div className="nome">
        <h2>Lana Del Rey</h2>
        <img src={check}/>
      </div>
<p><i><FaHeadphones/></i>42,345,1811 <span>ouvintes mensaiss</span></p>
    </div>
    <div className="direita"></div>
  </div>
</div>
    </div>
  )
}

export  {Banner}
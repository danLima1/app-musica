import React from 'react'
import '../styles/MainContainer.css'
import { FaUsers } from "react-icons/fa";
// import { AudioList } from "./AudioList";
 import { Banner } from "./Banner";
function MainContainer() {
  return (
    <div className='mainContainer'>
        <Banner />
      <div className='menuList'>
<ul>
  <li><a href='#'>Popular</a></li>
  <li><a href='#'>albuns</a></li>
  <li><a href='#'>musicas</a></li>
  <li><a href='#'>fans</a></li>
  <li><a href='#'>sobre</a></li>
</ul>
      </div>
</div>
  )
}

export {MainContainer}
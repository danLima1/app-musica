import React from 'react'
import '../styles/MainContainer.css'
import { FaUsers } from "react-icons/fa";
// import { AudioList } from "./AudioList";
 import { Banner } from "./Banner";
function MainContainer() {
  // useEffect(() => {
  //   const allLi = document.querySelector(".menuList").querySelectorAll("li");

  //   function changePopularActive() {
  //     allLi.forEach((n) => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  // }, []);
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
<p>
  <i>
    <FaUsers/>
  </i>
  80.3m<span>seguidores</span>
</p></div>
 <audioList/> 
</div>
  )
}

export {MainContainer}
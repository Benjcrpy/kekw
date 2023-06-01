import React from 'react'
import Navbar from './Navbar'
import Banner from "../Assets/bg-home.png"
import Kekw from "../Assets/KEKW1.mp4"
import kek from "../Assets/haha.png"
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
         <video src={Kekw} autoPlay loop muted/>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            THE FAMOUS EMOJI MEME TOKEN
          </h1>
          <p className="primary-text">
          $KEKW is based on a popular Twitch emote that is used to express laughter. 
          It originated from a viral video of a Spanish comedian named Juan Joya Borja, 
          who is known as "El Risitas" (The Giggles). In the video, Borja is laughing 
          uncontrollably while telling a story. The KEKW emote is a still image of Borja's 
          face during his laughter. inherent joy it brings to its holders.
          </p>
          <a href="https://etherscan.io/" target="_blank" rel="noreferrer">
          <button className="secondary-button" >
            ETH CONTRACT <FiArrowRight/>
          </button>
          </a>

        </div>
        <div className="home-image-container">
         <img src={kek} alt=""/>
        </div>
      </div>  
    </div>
  )
}

export default Home
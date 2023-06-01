import React from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs"
import ab from "../Assets/about.png"

const About = () => {
  return (
    <div className="about-section-container">
     <div className="about-background-image-container">
        {/* <img src={} atl={} /> */}
     </div>
     <div className="about-section-image-container">
     <img src={ab} alt=""/>
     </div>
     <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Our mission is to establish KEKW as the ultimate meme emoji token,
        </h1>
        <p className="primary-text">
        The "KEKW" emoji is an emote commonly used on the streaming platform Twitch. It depicts a person, usually depicted as the character "John Wick" from the movie series of the same name, laughing with a wide grin and closed eyes.
        </p>
        <p className="primary-text">
        The term "KEKW" itself is derived from the slang term "LOL" or "laugh out loud." This emote is often used to indicate amusement or to express that something is funny.
        </p>
        <div className="about-buttons-container">
         <a href='https://web.telegram.org/a/'>
           <button className="secondary-button">Join Us</button> 
         </a>
         
         <a href='https://www.youtube.com/watch?v=mKue4WuagL8'>
           <button className="watch-video-button">
            {" "}
            <BsFillPlayCircleFill/> Watch Video
         </button> 
         </a>
         
        </div>
     </div>
    </div>
  )
}

export default About
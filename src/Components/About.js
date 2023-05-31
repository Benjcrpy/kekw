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
        Our mission is to establish Alien Popoy as the ultimate meme token,
        </h1>
        <p className="primary-text">
        We strive to create a vibrant and engaged community that celebrates the dancing green alien’s infectious spirit. 
        Through our social media presence, meme contests, and interactive
        </p>
        <p className="primary-text">
        events, we aim to foster creativity, encourage meme creation, and provide a platform for fans to showcase their talent and love for Alien Popoy.
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
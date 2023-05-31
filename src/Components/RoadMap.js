import React from 'react'
import k1 from "../Assets/k1.png"
import k2 from "../Assets/k2.png"
import k3 from "../Assets/k3.png"

const RoadMap = () => {
    const workInfoData = [
        {
          image: k1,
          title: "LIQUIDITY LOCK",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          image: k2,
          title: "CONTRACT RENOUNCE",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
          image: k3,
          title: "ETH TRENDING",
          text: "Contract Renounce",
        },
        {
          image: k1,
          title: "CG LISTING",
          text: "Contract Renounce",
        },    
        {
            image: k2,
            title: "CMC LISTING",
            text: "Contract Renounce",
        },    
              
        
    ];
  return (
 
    <div className="work-section-wrapper">
        <div className="work-section-top">
        <h1 className="primary-heading">ROADMAP</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
         
          </div>
        ))}
      </div>
    </div>

  )
}

export default RoadMap
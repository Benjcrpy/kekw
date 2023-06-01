import React from 'react'
import k1 from "../Assets/k1.png"
import k2 from "../Assets/k2.png"
import k3 from "../Assets/k3.png"

const RoadMap = () => {
    const workInfoData = [
        {
          image: k1,
          title: "LIQUIDITY LOCK",
          text: "Liq Lock for the 30 DAYS! LOL!",
        },
        {
          image: k2,
          title: "CONTRACT RENOUNCE",
          text: "Contract Renounce from the owner! NICE NICE!",
        },
        {
          image: k3,
          title: "ETH TRENDING",
          text: "Let's us be trending on ETH which is all goods!",
        },
        {
          image: k1,
          title: "CG LISTING",
          text: "Come on my community want thats!",
        },    
        {
            image: k2,
            title: "CMC LISTING",
            text: "Also this one CMC make it faster sir!",
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
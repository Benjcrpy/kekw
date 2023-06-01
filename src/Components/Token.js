import React from "react";
import hand from "../Assets/hand.png"
import hand1 from "../Assets/1.png"
import hand3 from "../Assets/2.png"


const Work = () => {
  const workInfoData = [
    {
      image: hand,
      title: "0% TEAM TOKEN",
      text: "0 Token for the team that's so sad!",
    },
    {
      image: hand1,
      title: "100% GOES TO LIQUIDITY",
      text: "One hundred percentage for the liq that's good guys?",
    },
    {
      image: hand3,
      title: "0/0 TAX",
      text: "Biggest WOW!",
    },

    
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Tokenomics</p>
        <h1 className="primary-heading">$KEKW</h1>
        <p className="primary-text">
         The famous kek token, with the ticker symbol $KEKW, is built on the
         ETH NETWORK as a ERC20 token. The total supply of $KEKW is set at 1 billion
         tokens,
        </p>
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
  );
};

export default Work;
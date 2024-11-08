import React from "react";
import BuffyBanner from "/workspaces/jjmorenosound-react-landing-page/src/img/buffybanner.jpg"; 

const jumbo = {
  imageUrl: BuffyBanner,
  title: "Buffy the Vampire Slayer",
  description: "This the greatest show of all time. More than the Wire, the Sopranos and Breaking Bad. Come at me bros",
  buttonUrl: "https://www.youtube.com/@buffythevampireslayerstar",
  buttonLabel: "Check it"
};

export const JumboTron = () => {
  return (
    <div className="jumbotron-container card text-bg-dark">
      <img src={jumbo.imageUrl} className="card-img" alt="..." />
      <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
        <h5 className="jumbotron-title text-center">{jumbo.title}</h5>
        <p className="jumbotron-text text-center">{jumbo.description}</p>
        <a href={jumbo.buttonUrl} className="btn btn-primary">{jumbo.buttonLabel}</a>
      </div>
    </div>
  );
};
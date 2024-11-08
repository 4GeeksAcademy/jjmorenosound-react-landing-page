import React from "react";
import AngelImage from "/workspaces/jjmorenosound-react-landing-page/src/img/angeluscard.jpg"; 

const jumbo = {
  imageUrl: AngelImage,
  title: "Angel",
  description: "The baddest vampire if soulless",
  buttonUrl: "https://www.youtube.com/watch?v=vpAol_17mO0&pp=ygULYW5nZWwgaW50cm8%3D",
  buttonLabel: "Check it"
};

export const JumboTron = () => {
  return (
    <div className="card text-bg-dark">
      <img src={jumbo.imageUrl} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">{jumbo.title}</h5>
        <p className="card-text">{jumbo.description}</p>
        <a href={jumbo.buttonUrl} className="btn btn-primary">{jumbo.buttonLabel}</a>
      </div>
    </div>
  );
};
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"; 
import AngelImage from "../../img/angeluscard.jpg";
import BuffyImage from "../../img/buffycard.jpg";
import SpikeImage from "../../img/spikecard.jpg";
import WillowImage from "../../img/willowbadcard.jpg";


const cards = [
  {
    imageUrl: AngelImage,
    title: "Angel",
    description: "The baddest vampire if soulless",
    buttonUrl: "https://www.youtube.com/watch?v=vpAol_17mO0&pp=ygULYW5nZWwgaW50cm8%3D",
    buttonLabel: "Check it"
  },
  {
    imageUrl: BuffyImage,
    title: "Buffy",
    description: "The vampire slayer",
    buttonUrl: "https://www.youtube.com/watch?v=EsFPbVwNJi8&pp=ygUZYnVmZnkgdGhlbWUgc29uZyBzZWFzb24gMw%3D%3D",
    buttonLabel: "Check it"
  },
  {
    imageUrl: SpikeImage,
    title: "Spike",
    description: "The meanest vampire with a soul",
    buttonUrl: "https://www.youtube.com/watch?v=HAdndhd8OsE&pp=ygUUb3V0IGZvciBhIHdhbGsgc3Bpa2U%3D",
    buttonLabel: "Check it"
  },
  {
    imageUrl: WillowImage,
    title: "Willow",
    description: "The big bad witch", 
    buttonUrl: "https://www.youtube.com/watch?v=FWvpx7l-Fa8&pp=ygUMd2lsbG93IGJ1ZmZ5",
    buttonLabel: "Check it"
  }
];


export const BootstrapCard = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {cards.map((obj, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src={obj.imageUrl} className="card-img-top" alt={obj.title} />
              <div className="card-body">
                <h5 className="card-title">{obj.title}</h5>
                <p className="card-text">{obj.description}</p>
                <a href={obj.buttonUrl} className="btn btn-primary">
                  {obj.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


BootstrapCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string
};
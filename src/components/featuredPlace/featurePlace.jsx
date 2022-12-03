import React from "react";
import "./featurePlace.css";

const FeaturedPlace = () => {
  const placelist = [
    {
      picture:
        "https://pix8.agoda.net/hotelImages/525/5252020/5252020_18070611020066690671.jpg?ca=0&ce=1&s=1024x768",
      name: "Parc Borough City Resort",
      location: " Chiangmai ",
      price: " Starting from THB 2,619 ",
      rate: " 9.2 ",
    },
    {
      picture:
        "https://pix8.agoda.net/hotelImages/243/24333220/24333220_21051909190097422801.jpg?ca=19&ce=1&s=1024x768",
      name: "Naga Tara Boutique Resort",
      location: " Phayao ",
      price: " Starting from THB 1,999 ",
      rate: " 8.0 ",
    },
    {
      picture:
        "https://pix8.agoda.net/hotelImages/5710036/-1/27f8a12d8be491e174582d052dc03dfb.jpg?ca=7&ce=1&s=1024x768",
      name: " B2 Phrae Boutique Hotel ",
      location: " Phrae ",
      price: "Starting from THB 599 ",
      rate: " 8.0 ",
    },
    {
      picture:
        "https://pix8.agoda.net/hotelImages/2598442/-1/7947e8d15072dc5b54fdb6e4107fafdb.jpg?ca=7&ce=1&s=1024x768",
      name: " GLOW Ao Nang Krabi ",
      location: " Krabi ",
      price: " Starting from THB 889 ",
      rate: " 8.5 ",
    },
  ];
  return (
    <div className="placeList">
      {placelist.map((item) => (
        <div className="placeListContainer">
          <img src={item.picture} alt="" className="placeImage" />
          <span className="placeName">{item.name} </span>
          <p className="placeLocation">{item.location}</p>
          <p className="placePrice">{item.price}</p>
          <button className="rating">{item.rate}</button>
          <span> Exellent </span>
        </div>
      ))}
    </div>
  );
};
export default FeaturedPlace;

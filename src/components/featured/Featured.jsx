import "./Featured.css";

const Featured = () => {
  const picturelist = [
    {
      name: "Chiangmai",
      property: "552 Property",
      url: "https://media.cntraveller.in/wp-content/uploads/2022/07/shutterstock_1307758597.jpg",
    },
    {
      name: "Phayao",
      property: "203 Property",
      url: "https://i.pinimg.com/originals/e9/83/e3/e983e3f08a61df44d9e3e78a2bf4829a.jpg",
    },
    {
      name: "Krabi",
      property: "623 Property",
      url: "https://a.cdn-hotels.com/gdcs/production82/d183/f8382092-5689-463d-b693-42331d2eaa66.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    },
  ];

  return (
    <div className="featuredContainer">
      {picturelist.map((picture, index) => (
        <div className="featuredPictureContainer" key={index+picture.name}>
          <img src={picture.url} alt="" className="featuredImage" />
          <h2 className="featuredName">{picture.name}</h2>
          <h3 className="featuredProperty">{picture.property}</h3>
        </div>
      ))}
    </div>
  );
};
export default Featured;

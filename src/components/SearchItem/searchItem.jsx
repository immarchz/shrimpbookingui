import "./searchItem.css";

const SearchItem = () => {
  const siData = [
    {
      pic: "https://t-cf.bstatic.com/xdata/images/hotel/square200/373035435.webp?k=ef03f8abba058a2f000f18f2b21eee67975e9cf790c221847f7c3e651f961082&o=&s=1",
      name: "SummerTime清迈 cozy pool Villa/8rooms",
      location: "Chang Phueak, Chiang Mai",
      distance: "3.9 km from centre",
      info: "SummerTime清迈 cozy pool Villa/8rooms in Chiang Mai features accommodation with free WiFi, 5 km from Chiang Mai International Convention and Exhibition Centre, 5.3 km from Kad Suan Kaew Shopping Centre...",
      rating: "9.0",
      ratingscore: "Superb",
    },
    {
      pic: "https://t-cf.bstatic.com/xdata/images/hotel/square200/383749495.webp?k=73201e78ca7905dad7b51f1b1abeff1f375a778c5a6f304d6f620d7c0190d5e3&o=&s=1",
      name: "Stay @ Na Maeping",
      location: "Chang Moi, Chiang Mai",
      distance: "2.2 km from centre",
      info: "Set in Chiang Mai, 1.6 km from Chiang Mai Night Bazaar and 1.8 km from Tha Pae Gate, Stay @ Na Maeping offers accommodation with free WiFi, air conditioning, a shared lounge...",
      rating: "10",
      ratingscore: "Exceptional",
    },
    {
      pic: "https://t-cf.bstatic.com/xdata/images/hotel/square200/407777525.webp?k=de68df2a6c5a6d166db4cde9b0f910735dcc09df4ad47f3d637763d8c8f5ba2d&o=&s=1",
      name: "Tolani Southgate Villa Chiang MaiOpens in new window",
      location: "Hai ya, Chiang Mai",
      distance: "1.9 km from centre",
      info: "Located in the heart of Chiang Mai, Tolani Souththgate Villa Chiang Mai boasts three luxurious villas with 6 bedrooms and a private outdoor pool. Free bicycle rental and free WiFi are available.",
      rating: "9.2",
      ratingscore: "Superb",
    },
    {
      pic: "https://t-cf.bstatic.com/xdata/images/hotel/square200/284236996.webp?k=8c0e929c874d1829d95dacb03ef7f708f2b40880ffcdd9fdd49b79fe95f07402&o=&s=1",
      name: "Stay in Style at Nimman R918",
      location: "Nimmanhaemin, Chiang Mai",
      distance: "1.8 km from centre",
      info: "Located in Chiang Mai, 1.4 km from Kad Suan Kaew Shopping Centre and 2.6 km from Chang Puak Market, Stay in Style at Nimman R918 offers free WiFi and air conditioning.",
      rating: "9.9",
      ratingscore: "Exceptional",
    },
    {
      pic: "https://t-cf.bstatic.com/xdata/images/hotel/square200/284235763.webp?k=74a07bea99d88b5109eec8e7ca35b1a36ad3950202151c4a54ce5dac75a4d5a2&o=&s=1",
      name: "Stay in Style, Stay On The Cloud RS504",
      location: "Wat Ket, Chiang Mai",
      distance: "4.1 km from centre",
      info: "Featuring an outdoor swimming pool, a fitness centre, and a garden, Stay in Style, Stay On The Cloud RS504 provides accommodation in Chiang Mai with free WiFi and mountain views.",
      rating: "9.7",
      ratingscore: "Superb",
    },
  ];
  return (
    <div className="searchItem">
      {siData.map((item) => (
        <div className="siContainer">
          <img src={item.pic} alt="" className="searchPic" />
          <div className="siDsc">
            <div className="siTitle">{item.name} </div>
            <span className="siLocation">{item.location}</span>
            <span className="siDistance">{item.distance} </span>
            <span className="siInfo">{item.info} </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{item.ratingscore} </span>
              <button className="Rating">{item.rating}</button>
            </div>
            <div className="detail">
              
              <button className="showPrice">Show Prices</button>
            </div> 
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchItem;

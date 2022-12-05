import "./searchItem.css";

const SearchItem = () => {
  const siData = [
    {
      pic: "",
      name: "",
      location: "Chang Khlan, Chiangmai",
      distance: "",
      info: "",
    },
    {
      pic: "",
      name: "",
      location: "Suthep, Chiangmai",
      distance: "",
      info: "",
    },
    {
      pic: "",
      name: "",
      location: "Chang Moi , Chiangmai",
      distance: "",
      info: "",
    },
    {
      pic: "",
      name: "",
      location: "",
      distance: "",
      info: "",
    },
    {
      pic: "",
      name: "",
      location: "",
      distance: "",
      info: "",
    },
  ];
  return (
    <div className="searchItem">
      {siData.map((item) => (
        <div className="siInfo">
          <img src="" 
          alt="" 
          className="searchPic" 
          />
          <div className="siDsc">
            <div className="siTitle"></div>
            <div className="siLocation">{item.location}</div>
            <div className="siDistance"></div>
            <div className="siInfo"></div>
          </div>
        </div>
      ))}

      <div className="siDetails">

      </div>
    </div>
  );
};
export default SearchItem;

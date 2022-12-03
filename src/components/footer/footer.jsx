import "./footer.css";

const Footer = () => {
  const footerList = [
    {
      f1: "Country",
      f2: "Regions",
      f3: "Cities",
      f4: "Districts",
      f5: "Airports",
      f6: "Hotels",
      f7: "Places of interest",
      
    },
    {
      f1: "Homes",
      f2: "Apartments",
      f3: "Resorts",
      f4: "Villas",
      f5: "Hostels",
      f6: "B&Bs",
      f7: "Guest houses",
    },
    {
      f1: "Unique places to stay",
      f2: "All destinations",
      f3: "Discover",
      f4: "Reviews",
      f5: "Unpacked: Travel articles",
      f6: "Travel Communities",
      f7: "Seasonal and holiday deals",
    },
    {
      f1: "Country",
      f2: "Car hire",
      f3: "Flight finder",
      f4: "Restaurant reservations",
    },
    {
      f1: "About Shrimp Booking",
      f2: "Customer Service help",
      f3: "Partner help",
      f4: "Careers",
      f5: "Sustainability",
      f6: "Press centre",
      f7: "Terms & Conditions",
    },
  ];
  return (
    <div className="footerList">
      {footerList.map((item) => (
        <div className="flists">
          <ul className="fContainer">
            <li className="fListItem">{item.f1}</li>
            <li className="fListItem">{item.f2}</li>
            <li className="fListItem">{item.f3}</li>
            <li className="fListItem">{item.f4}</li>
            <li className="fListItem">{item.f5}</li>
            <li className="fListItem">{item.f6}</li>
            <li className="fListItem">{item.f7}</li>
            
          </ul>
          
        </div>
       
      ))}
    </div>
  );
};

export default Footer;

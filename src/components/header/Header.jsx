import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";

const Header = () =>{
    const [openDate,setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    return(
        <div className="Header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon="fa-solid fa-bed" />
                    <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon="fa-solid fa-car" />
                    <span>Car Rent</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon="fa-solid fa-plane" />
                    <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon="fa-solid fa-bed" />
                    <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon="fa-solid fa-taxi" />
                    <span>Taxi</span>
                    </div>
                </div>
                <h1 className="headerTitle">Save 30% or more with Black Friday Deals</h1>
                <p className="headerDesc">
                From seaside villas to city homes, book the perfect stay for less
                </p>
                <button className="headerBTN"> Find deals</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon="fa-solid fa-bed" className="headerIcon"/>
                        <input 
                        type="text" 
                        placeholder="Where are you going?" 
                        className="headerSearchInput"
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon="fa-solid fa-calendar-days" className="headerIcon"/>
                        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchtext">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")} `}</span>
                        {openDate &&<DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon="fa-solid fa-user" className="headerIcon"/>
                        <span className="headerSearchtext" >20 adults 20 childern 5 room eieieieiei</span>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBTN">Search</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Header;
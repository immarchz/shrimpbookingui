import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";

const Header = ({type}) =>{
    const [openDate,setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions,setOpenOptions] = useState(false)
      const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1,
      });

    const handleOption = (name, operation)=> {
        setOptions(prev=>{
            return{
                ...prev, [name]: operation === "increase" ? options[name]+1 : options[name]-1
            }})
    }

    return(
        <div className="Header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer" } >
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
                { type !=="list" && 
                <>
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
                        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchtext" >{`${options.adult} adult · ${options.children} children · ${options.room} room `}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                <button disabled={options.adult<=0}
                                className="optionCounterButton" onClick={()=>handleOption("adult","decrease")} >
                                -
                                </button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("adult","increase")} >+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                <button disabled={options.children<=0}
                                className="optionCounterButton" onClick={()=>handleOption("children","decrease")} >
                                -
                                </button>
                                <span className="optionCounterNumber"> {options.children} </span>
                                <button className="optionCounterButton" onClick={()=>handleOption("children","increase")} >+</button>
                                </div>
                                
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                <button disabled={options.room<=0}
                                className="optionCounterButton" onClick={()=>handleOption("room","decrease")}>
                                -
                                </button>
                                <span className="optionCounterNumber"> {options.room} </span>
                                <button className="optionCounterButton" onClick={()=>handleOption("room","increase")} >+</button>
                                </div>
                            </div>
                        </div>}
                        
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBTN">Search</button>
                    </div>
                </div></>}
                
            </div>
        </div>
    );
}

export default Header;
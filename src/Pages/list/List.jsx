import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import { useState } from "react";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import "./List.css";
import { DateRange } from "react-date-range";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import SearchItem from "../../components/SearchItem/searchItem";





const List = () => {
  const location = useLocation();
  const [destination, setDestiantion] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [acceptTnc, setAcceptTnc] = useState(false);
  console.log({ acceptTnc });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.defaultChecked);
  };

  return (
    <div className="">
      
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input
                placeholder={destination}
                type="text"
                className="Iteminput"
              />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">

              <div className="personsOption">
                <span className="personNumber">Adult</span>
                <input type="number" min={1} className="pnInput" placeholder={options.adult}/>
                <span className="personNumber">Children</span>
                <input type="number" min={0}className="pnInput" placeholder={options.children}/>
                <span className="personNumber">Room</span>
                <input type="number" min={1} className="pnInput" placeholder={options.room}/>
              </div>
              

              <div className="lsOptionItem">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={acceptTnc}
                        onChange={handleChange}
                        sx={{
                          "&.MuiCheckbox-root":{
                            color:"white"
                          }
                        }}
                      />
                    }
                    label="Entire homes & apartments"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={acceptTnc}
                        onChange={handleChange}
                        sx={{
                          "&.MuiCheckbox-root":{
                            color:"white"
                          }
                        }}
                      />
                    }
                    label="I'm travelling for work"
                  />
                </FormGroup>
              </div>
            </div>
            <button className="sButton">Search</button>
          </div>
          <div className="listResult">
          <SearchItem/>
          </div>
            
        </div>
      </div>
    </div>
  );
};
export default List;

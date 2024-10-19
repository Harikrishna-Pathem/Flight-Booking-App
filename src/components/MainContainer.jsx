import CitiesContainer from "./CitiesContainer";
import Footer from "./Footer";
import FromTo from "./FormTo";
import Header from "./Header";
import IntContainer from "./IntContainer";
import SignupContainer from "./SignupContainer";
import { useState } from "react";
import TicketContainer from "./TicketContainer";


function MainContainer() {

   let[fromVal, setFromVal] = useState("")
   let[toVal, setToVal] = useState("")
   let[search, setSearch] = useState("")
   let[dep, setDep] = useState("")
   let[pasn, setPasn] = useState(0)
   let[econ, setEcon] = useState("")


   function onSearch(from, to, depart, pass, eco){
      setFromVal(from)
      setToVal(to)
      setDep(depart)
      setPasn(pass)
      setEcon(eco)

   }

   
   let info = {
    from : fromVal,
    to : toVal,
    dep : dep,
    pas : pasn,
    eco : econ
  };
  
   
  const tickets = [
    {
      flight: "Air India",
      start: "09:00",
      end: "11:30",
      time: "2h30m",
      price: 1299,
    },
    {
      flight: "IndiGo",
      start: "10:45",
      end: "12:00",
      time: "1h05m",
      price: 1999,
    },
    {
      flight: "GoFirst",
      start: "18:00",
      end: "19:00",
      time: "1h",
      price: 1264,
    },
    {
      flight: "Hindusthan",
      start: "22:00",
      end: "23:10",
      time: "1h10m",
      price: 1056,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <FromTo setSearch={setSearch} onSearch={onSearch}/>
         {(search === ""  && <CitiesContainer/>)}
         {(search === "" && <IntContainer/>)}
         {(search === "search" && <TicketContainer info={info} tickets={tickets} />)}
        <SignupContainer />
        <Footer />
        
      </div>
    </div>
  );
}

export default MainContainer;

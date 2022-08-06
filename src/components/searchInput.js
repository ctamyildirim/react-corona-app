import React from "react";
import "./searchInput.css";
import { CoronaContext, useContext } from "../context";


const SearchInput = () =>{

    const {setSelected, selected, setInfo, setallCountries} = useContext(CoronaContext);

    const gettingValue = () =>{
        fetch("https://coviddata.github.io/coviddata/v1/countries/stats.json")
        .then(response => response.json())
        .then(data => {
            const country = data.find(country => country.country.name == selected);
            var current_info = Object.keys(country.dates).pop();
            var current_total_info = country.dates[current_info].cumulative;
            console.log(current_total_info)
            let arr = [];
            arr.push(current_total_info)
            let arr2 = [];
            arr2[0] = country.country.name;
            setInfo(arr)
            setallCountries(arr2)
        })
    }
    return(
        <>  
            <div className="search_input_inclusive">
                <i className="fa-solid fa-magnifying-glass" onClick={gettingValue}></i>
                <input className="search_input" placeholder="Search Country..."
                onChange={(e)=> setSelected(e.target.value)} value={selected}></input>
            </div>
        </>
    )

}
export default SearchInput
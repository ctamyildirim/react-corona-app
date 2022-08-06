import React, { useEffect } from "react";
import "./content.css"
import SearchInput from "./searchInput";
import Card from "./card";
import { CoronaContext, useContext } from "../context";



const Content = () => {
    const {info, all_countries,setInfo,setallCountries, setSelected, loading, setReset, setLoading} = useContext(CoronaContext);
    console.log(all_countries[1])

    
const fetchData = async () =>{
    setLoading(true);
    const response = await fetch("https://coviddata.github.io/coviddata/v1/countries/stats.json")
    .then(response => response.json())
    .then(data => {
      data.map((value,index) => {
        var current_info = Object.keys(value.dates).pop();
        var current_total_info = value.dates[current_info].cumulative;
        let info_arr= info;
        info_arr.push(current_total_info);
        setInfo(info_arr);
        let arr = all_countries;
        let current_country = value.country.name;
        arr.push(current_country)
        setallCountries(arr)
      })
    })
    .then(()=> {
        setSelected("")
        setLoading(false)
        setReset(true)
    })
  }
    const reset = () =>{
        fetchData()
    
    }
    return(
        <>
            <div className="content_inclusive">
                <div className='head_title'><h1>Show Corona Istatistics of My Country</h1></div>
                <SearchInput></SearchInput>
                <button onClick={reset}>Reset</button>
                <div className="content-cards">
                    {
                    info.map((value,index) => {
                        if(loading){
                            <p>Loading</p>
                        }
                        else
                            return(
                                <Card key={index}
                                    country = {all_countries[index]}
                                    totalcases = {value.cases}
                                    totaldeath = {value.deaths}
                                    totalrecoveries = {value.recoveries}
                                ></Card>
                                )
                            })
                        
                    }
                </div>

            </div>
        </>
    )
}
export default Content
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Content from './components/content';
import './App.css';
import { CoronaContext } from './context';


function App() {
  
const[selected, setSelected] = useState();
const[info , setInfo] = useState([])
const[all_countries, setallCountries] = useState([])
const[loading , setLoading] =useState (false)
const[reset , setReset] =useState (false)

const data = {
  selected,
  setSelected,
  info,
  setInfo,
  all_countries,
  setallCountries,
  loading,
  setLoading,
  setReset
}

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
  .then(()=> setLoading(false))
}


useEffect(()=>{
  fetchData();
},[setReset])

  return (
    <CoronaContext.Provider value={data}>
      <Header></Header>
      <Content></Content>
    </CoronaContext.Provider>
  );
}


export default App

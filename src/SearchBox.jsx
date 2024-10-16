import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setDataProp}) => {
    const [city,setCity]=useState('');
    const KEY="73455440a56303169cd733f7dd6d08cd"
    const getWeatherData=async()=>{
        console.log(city)
       const isName = false
        const final_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
        const res=await axios.get(final_url);
        console.log(res)
        const weatherData = {
          temp:res.data.main.temp,
          temp_max:res.data.main.temp_max,
          temp_min:res.data.main.temp_min,
          humidity:res.data.main.humidity,
          icon:res.data.weather[0].icon,
          city_name:res.data.name,
          isName:true
        };
        setCity('');
        // console.log(weatherData);
        setDataProp(weatherData)
    };
  return (
    <div>
    <TextField value={city}id="outlined-basic" label="Enter City Name" variant="outlined" onChange={(e)=>setCity(e.target.value)} />
    <br />
    <br />
    <Button onClick={getWeatherData} variant="outlined" startIcon={<SearchIcon />}>
        Get Weather
      </Button>
    </div>
  )
}

export default SearchBox

import React from 'react'
import SearchBox from './SearchBox'
import { useState } from 'react';
import InfoBox from './InfoBox';
const WeatherApp = () => {
  const [data,setData]=useState({
    city_name:""
  });
  return (
    <div>
      <h1>Welcome to Gargi Weather App</h1>
      <SearchBox  setDataProp={setData}/>
      <InfoBox data={data}/>
    </div>
  )
}

export default WeatherApp

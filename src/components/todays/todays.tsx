import React, { createRef, useRef } from "react";
import './todays.css';
import { useState } from 'react';
import Button from "@mui/material/Button";
import {SearchCountries} from "../general scripts/FetchAPI";
import {returnOnlyNamesJSON, returnAllCityFields, returnCurrentCityName} from '../general scripts/ManageJSONS'
/*Image Imports*/

import thermometer from '../images/thermometer.png';
import waterDrop from '../images/water-drop.png';
import cloud from '../images/cloud-computing.png';
import InformationCard from './informationCard/informationCard';
import humidity from '../images/humidity.png';
import uv from '../images/uv.png';
import wind from '../images/wind.png';
import windDirection from '../images/wind-direction.png';

/*---------*/

import './informationCard/informationCard.css';
import Tooltip from "@mui/material/Tooltip";
import { json } from "stream/consumers";





function Todays () {

  const inputRef = useRef<HTMLInputElement>(null);

  const [location,updateLocation] = useState({country: "",lat: 0, localtime: "", localtime_epoch: 0, lon: 0, name: "",  region: "",  tz_id: ""});
  const [countriesList, getCountries] = useState<JSX.Element[]>([])
  const [countriesListVisibility, updateVisibility] = useState("cities-visible-false");
  const [WeatherVariables, updateWeatherVariables] = useState({cloud:0,condition:{},humidity:0,is_day:0,last_updated:"",precip_mm:0,temp_c:0,uv:0,wind_dir:"none",wind_kph:"0"})

  
  
  const checkIfBrowserSupportsGeoLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getCurrentUserLocation, userDontAllowGetHisPosition);
    } else {
      console.log("{Temp} This browser does not support Geolocation")
    }
  }
  
  const userDontAllowGetHisPosition = () => {
    console.log('We need to know your location to show the weather metrics!');
    /*In the future I need to add a screen above the main indicating the user that they need to enable the location permission*/
  }


  const getCurrentUserLocation = (position :any) => {
    //console.log(position.coords.latitude, position.coords.longitude);
    getCurrentCity(String(position.coords.latitude) + " " + String(position.coords.longitude))

  }

  window.addEventListener("load", () => {
    checkIfBrowserSupportsGeoLocation();
  })


  const getCurrentCity= (cityname : string) => {
    let searchCityInformation = SearchCountries(`https://api.weatherapi.com/v1/current.json?key=2c7f6b3c0e8f4044a81175517220503&q=${cityname}&aqi=no`).then(data => {
      updateWeatherVariables(returnAllCityFields(data));
      updateLocation(returnCurrentCityName(data));
    }) //We recieve an array with all the weather information of the city that the user selected
    getCountries([]);
    updateVisibility("cities-visible-false");
  }

  const HandleCitySelected = (event : any) => {
    inputRef.current!.value = event.target.innerHTML; //change the input value with the value that the user selected
    getCountries([]);
    updateVisibility("cities-visible-false");
  }

  const HandleInputWriting = (event:any) => {
    if(event.currentTarget.value.length > 4){
      let result = SearchCountries(`https://api.weatherapi.com/v1/search.json?key=2c7f6b3c0e8f4044a81175517220503&q=${event.currentTarget.value}`).then(data => returnOnlyNamesJSON(data)); //We search for the specific cities depending on what the user wrote

    result.then(data => {
      let formatArray = [];

      for(let i = 0; i < data.length; i++){
        formatArray.push(<li key={i} onClick={(event) => {HandleCitySelected(event)}}>{data[i]}</li>)
      }
      
      //console.log(formatArray)
      getCountries([]);
      getCountries(formatArray)
      updateVisibility("cities-visible-true");
    })
    } else {
      getCountries([]);
      updateVisibility("cities-visible-false");
    }
    
    
  }
  
  return (
    <main>
      <h2>Today's Metrics</h2>
      <p>Actually showing {`${location.name}, ${location.region}, ${location.country}`}'s metrics </p>
      <input ref={inputRef} type="text" className="location-input" id="new-location-input" placeholder="Search for a new location" onKeyDown={(event) => {HandleInputWriting(event)}}/>
      <Button variant="contained" className="search-button" onClick={() => getCurrentCity(inputRef.current!.value)}>Search</Button>
      <article className={countriesListVisibility}>
        <ul>
          {countriesList}
        </ul>
      </article>
      <Tooltip title="Last Update (click here to check for updates)">
        <article className="weather-property-article" onClick={() => checkIfBrowserSupportsGeoLocation()}>
          <p>Last Update</p>
          <p>{`${WeatherVariables.last_updated.slice(0,10)}`}</p>
          <p className="less-margin-top">{`${WeatherVariables.last_updated.slice(11,16)}`}</p>
        </article>    
      </Tooltip>
      
      <InformationCard image={thermometer} parameter={`${WeatherVariables.temp_c}°C`} tooltipName="Temperature"/>
      <InformationCard image={wind} parameter={`${WeatherVariables.wind_kph} Km/h`} tooltipName="Wind Speed"/>
      <InformationCard image={windDirection} parameter={`${WeatherVariables.wind_dir}`} tooltipName="Wind Direction"/>
      <InformationCard image={humidity} parameter={`${WeatherVariables.humidity}%`} tooltipName="Humidity"/>
      <InformationCard image={cloud} parameter={`${WeatherVariables.cloud}%`} tooltipName="Cloudiness"/>
      <InformationCard image={uv} parameter={`${WeatherVariables.uv}`} tooltipName="UV Probabilty"/>
    </main>
  );
  
  
}


export default Todays;

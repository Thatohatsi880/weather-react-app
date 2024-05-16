import React from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner'

axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
    }
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return(
        <Audio
        height="80"
        width="80"
        radius="9"
       color="green"
       ariaLabel="loading"
       wrapperStyle
      wrapperClass
    />
    );
}
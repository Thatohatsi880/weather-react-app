import React from 'react';
import axios from 'axios';


export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
    }
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/Weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return<h3> After a very long time coming!!</h3>;
}
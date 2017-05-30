import React from 'react';
 
// import $ from "jquery";

import WeatherBloc from './WeatherBloc';
import AddWeather from './AddWeather';

import weatherIconsJson from '../json/icons.json';

class ContainerBloc extends React.Component{
	
    constructor() {
        super();
        this.state = { 
			weather : []
		}
    }
  

		// Localisation
		// $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        //     console.log(data)
        // });


	// Ajoute les données de la ville au state
	addCity = (city) => {
      
        // fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&types=geocode&language=fr&key=AIzaSyDS3yPivP2sEbU6LZLJ68XnaE98Zoib6QM`)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a34bcd3cecfa10f366f8415e8201f435`)
		.then((response) => response.json())
		.then((data) => { 

			console.log(data);
			var prefix = 'wi wi-';
			var code = data.weather[0].id;
  			var icon = weatherIconsJson[code].icon;

			if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
				icon = 'day-' + icon;
			}	else {
				icon = 'night-' + icon;
			}
 			icon = prefix + icon; 

			this.setState((prevState, props) => ({
				weather: prevState.weather.concat({
					city: 	      data.name, 
					country: 	  data.sys.country, 
					temp: 		  data.main.temp, 
					weatherMain:  data.weather[0].main, 
					icon: 	      icon, 
					id: 		  data.id
				})
			}));
		})	        
		.catch((error) => {
			console.error(error);
		});
    }

	render(){
		return(
			<div>				
				{
					this.state.weather.map((elem, i) => {
						return <WeatherBloc key={elem.id} city={elem.city} country={elem.country} temp={elem.temp} weatherMain={elem.weatherMain} icon={elem.icon} />
					})
				}
				<AddWeather onSbmt={this.addCity} />
			</div>
		)
	}
}

export default ContainerBloc;
import React from 'react';

import WeatherBloc from './WeatherBloc';
import AddWeather from './AddWeather';


class ContainerBloc extends React.Component{
	
    constructor() {
        super();
        this.state = { 
			weather : []
		}
    }
 
	// Ajoute les données de la ville au state
	addCity = (city) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a34bcd3cecfa10f366f8415e8201f435`)
		.then((response) => response.json())
		.then((data) => { 
			console.log(data);				
				this.setState((prevState, props) => ({
				weather: prevState.weather.concat({city:data.name, temp:data.main.temp})
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
						return <WeatherBloc key={i} city={elem.city} temp={elem.temp} />
					})
				}
				<AddWeather onSbmt={this.addCity} />
			</div>
		)
	}
}

export default ContainerBloc;
import React from 'react';

class ContainerBloc extends React.Component{
	
    constructor() {
        super();
        this.state = { 
			weather : [ {city:"new york", temp:"200"} ]
		}
    }


  	componentDidMount() { 
	    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=a34bcd3cecfa10f366f8415e8201f435`)
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
		const listWeather = this.state.weather.map( (establishment) => {
            return (
                <div>
					<p className="city">Ville : {establishment.city}</p>
					<p className="temp">Température : {establishment.temp}</p>
				</div>
            )
        })

		return(
			<div>				
				{ listWeather }
			</div>
		)
	}
}

export default ContainerBloc;
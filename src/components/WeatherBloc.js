import React from 'react';

class WeatherBloc extends React.Component{
    render() {
        return(
            <div className="bloc">
                <p className="city">Ville : {this.props.city}</p>
				<p className="temp">Température : { Math.round(this.props.temp / 32) }°</p>
            </div>
        )
    }
}

export default WeatherBloc;

 
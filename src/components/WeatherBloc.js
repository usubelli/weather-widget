import React from 'react';
import PropTypes from 'prop-types'; 
import '../css/weather-icons.css';



class WeatherBloc extends React.Component{
    render() {
        return(
            <div className="bloc">
                <p className="city">{this.props.city}</p>
				<p className="temp"><span className={this.props.icon} ></span> Température : { Math.round(this.props.temp - 273.15 ) }°</p>
            </div>
        )
    }

    
}


// PropType required
WeatherBloc.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};

export default WeatherBloc;

 
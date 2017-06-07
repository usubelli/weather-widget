import React from 'react';
// import fetchJsonp from 'fetch-jsonp';




class AddWeather extends React.Component {

    constructor() {
        super();
        this.state = { 
			city : []
		}
    }


    submitForm = e => {
        e.preventDefault();
        if(this.cityInput.value) {
            this.props.onSbmt(this.cityInput.value.split(',')[0]);
            console.log(this.cityInput.value);
            this.cityInput.value = "";  
            this.setState({ city : [] });
        }
    }


    autoCompleteCity = (event) => {

        const city = this.cityInput.value;
        
        //  fetchJsonp(`http://autocompletecity.geobytes.com/AutoCompleteCity?filter=fr&q=${city}`)
        fetch(`https://api.teleport.org/api/cities/?search=${city}`)
            .then((response) => response.json())
            .then((data) => { 

                let arrayCity = data._embedded['city:search-results'];
                this.setState({ city : arrayCity });
                
            })	        
            .catch((error) => {
                console.error(error);
            });
    }


    changeInput = (event) => {
        document.querySelector('.searchCity').value = event.currentTarget.textContent;
        this.setState({ city : [] });
    }


    render() {
        return (
            <form>
                <h2>Ajouter une ville :</h2>
                <input 
                    className="searchCity"
                    ref={(input) => { this.cityInput = input }} 
                    onChange={(e) => this.autoCompleteCity(e)} 
                    placeholder="Nom de la ville ..."
                />
                <ul id="tag-id">
                    {
                        this.state.city.map((city, i) => {
                            if ( i < 5 )
                                return <li onClick={(e) => this.changeInput(e)} >{city.matching_full_name}</li>
                             
                        })
                    }
                </ul>
                <button onClick={this.submitForm} >Ajouter</button>
            </form>
        );
    }
}

export default AddWeather;



 
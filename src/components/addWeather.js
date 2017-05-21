import React from 'react';

class AddWeather extends React.Component {

    submitForm = e => {
        e.preventDefault();
        this.props.onSbmt(this.cityInput.value);
        this.cityInput.value = "";  
    }

    render() {
        return (
            <form>
                <h2>Ajouter une ville :</h2>
                <input ref={(input) => { this.cityInput = input; }} placeholder="Nom de la ville ..." />
                <button onClick={this.submitForm} >Ajouter</button>
            </form>
        );
    }
}

export default AddWeather;

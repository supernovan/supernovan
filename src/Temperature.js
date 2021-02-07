import React from 'react'
import axios from 'axios'

class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {humidity: 35.0, celsius: 20.0};
    }

    async componentDidMount(){
        this.intervalId = setInterval(
            () => this.fetchReadings(),
            5*1000)
    }

    async fetchReadings() {
        const apiUrl = 'http://localhost:4000/readings/';
        axios.get(apiUrl)
            .then((response) => {
                this.setState({
                    humidity: response.data.data.humidity,
                    celsius: response.data.data.celsius
                })
            })
            .then((data) => console.log('This is your data', data));
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>Humidity {this.state.humidity}.</h2>
                <h2>Celcius {this.state.celsius}.</h2>
            </div>
        );
    }
}

export default Temperature;
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import PlantDisplay from './PlantDisplay';
import axios from 'axios';


export default class Home extends Component{
    state={
        plantOfTheDay: {},
        plantsArray: []
    }

    componentDidMount(){
        axios.get('/api/plants')
        .then(res => {
            let randomIndex= this.getRandomNum(res.data.length);
            let randomPlant= res.data[randomIndex];
            this.setState({
            plantsArray: res.data,
            plantOfTheDay: randomPlant
        })})

        // this.setState({plantOfTheDay: randomPlant});
    }

    getRandomNum(max){
        //this will return a random number between 0 and max, but not including max.
        return Math.floor(Math.random() * Math.floor(max));
    }

    render(){
        const{plantOfTheDay}= this.state;
        return(
            <div>
                <section>
                    <h2>Plant of The Day!</h2>
                    {plantOfTheDay?(
                        <PlantDisplay plant={plantOfTheDay}/>
                    ): null}
                    
                </section>
            </div>
        );
    }
}
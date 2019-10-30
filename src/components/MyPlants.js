import React, {Component} from 'react';
import PlantDisplay from './PlantDisplay';
import axios from 'axios';
// const myPlants= require('../plants.json');

export default class MyPlants extends Component{
    constructor(){
        super();
        this.state={
           plants: []
        }
        this.updateName= this.updateName.bind(this)
        this.deletePlants=
        this.deletePlants.bind(this)
        // console.log(myPlants)
    }

    componentDidMount(){
        axios
        .get('/api/plants')
        .then(res => {
            this.setState({
                plants: res.data
            })
        })
    }

    // toggleEdit(){
    //     this.setState({
    //         editToggle: !this.state.editToggle
    //     })
    //     if (this.state.editToggle && 
    //         this.state.nickname) {
    //             this.props.updateNameFn
                
    //         }
    // }

    updateName(id, body){
        axios
        .get('/api/plants')
        .then(res => {
            this.setState({
                nickname: res.data
            })
        })
    }

    deletePlants(id){
        axios
        .delete(`/api/plants/${id}`)
        .then(res => {
        this.setState({
            plants: res.data
        })
        })
    }
    
    render(){
        return(
            <div className='add'>
                {this.state.plants.map(p => <PlantDisplay plant={p}/>)}

            </div>
        );
    }
}
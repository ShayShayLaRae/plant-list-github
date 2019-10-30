import React, {Component} from 'react';
import PlantDisplay from './PlantDisplay';
import axios from 'axios';



export default class Wishlist extends Component{
    constructor(){
        super()
        this.state={
            wishlist: []
            // editToggle: false
        }
        this.updateName= this.updateName.bind(this)
    }

    componentDidMount(){
        axios.get('/api/wishlist')
        .then(res => {
            this.setState({wishlist: res.data})
        })
    }

    updateName(id, newNickname){
        console.log('updateName', id, newNickname);
        axios
        .put(`/api/wishlist/${id}`, {nickname: newNickname})
        .then(res => {
            this.setState({
                wishlist: res.data
            })
        })
    }

    render(){
        return(
            <div className='plantPos'>
                {this.state.wishlist.map(p => <PlantDisplay plant={p}
                key={p.id}
                updateName={this.updateName}
                />
                )}
                
            </div>
        );
    }
}
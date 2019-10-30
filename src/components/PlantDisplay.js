import React, {Component} from 'react';


export default class PlantDisplay extends Component{
    constructor(){
        super();
        this.state= {tempNickname: ''}
        console.log(this.state.tempNickname);
    }
    render(){
        //What if I want to declare all my props variables with just one line of code? Deconstruct!!!
        const {plant, updateName} = this.props; //deconstruction is shorthand for declaring multiple variables at once
        //Deconstruction takes an object and breaks out the properties as variables ready for you to use. 
        const {id, image, my_nickname, common_name, scientific_name, hardiness_zones} = plant;
        const {tempNickname} = this.state;
        return(
            <div className='plantPosition'>
                <div className='plantCont'>
                    <div className='plantImg'><img src={image} alt='plant'/></div>
                    <div className='plantSpecs'>
                        {/* Conditionally render a div */}
                        {/* {plant.my_nickname !== "" &&  */}
                        <div><strong>Nickname:</strong> {my_nickname}
                        <input placeholder={'give me a nickname!'} onChange={ event => this.setState({tempNickname: event.target.value})} />
                        <button onClick={() => updateName(id, tempNickname)}>Change nickname</button>
                        </div>
                        {/* } */}
                        <div><strong>Common Name: </strong>{common_name}</div>
                        <div><strong>Scientific Name: </strong>{scientific_name}</div>
                        <div><strong>Hardiness Zones: </strong>{hardiness_zones}</div>

                    </div>
                </div>
            </div>
            
        );
    }//end of the "render" function
}
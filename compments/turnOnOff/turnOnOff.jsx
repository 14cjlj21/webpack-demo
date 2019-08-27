import React from 'react';
class TurnOnOff extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOn:true
        }
        this.turnOn=this.turnOn.bind(this);
    }


    turnOn(){
        this.setState(prevState=>({
            isOn:!prevState.isOn
        }))
    }
    render(){
        return(
            <div>
                <button onClick={this.turnOn}>{this.state.isOn ? "on" : "off"}</button>
            </div>
        )
    }
};
export default TurnOnOff;
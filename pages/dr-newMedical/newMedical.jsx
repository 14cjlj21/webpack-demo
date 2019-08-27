import React from 'react';
import Title from "../../compments/title/title.jsx";
import Clock from "../../compments/clock/clock.jsx";
import TurnOnOff from '../../compments/turnOnOff/turnOnOff.jsx';
class NewMedical extends React.Component{
    render(){
        return(
            <div>
                <h1>这是新建病历页</h1>
                <Title title='首页1232324324535435435454657'/>
                <Clock />
                <TurnOnOff/>
            </div>
        )
    }
}
export default NewMedical;
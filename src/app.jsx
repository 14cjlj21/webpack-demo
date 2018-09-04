import React from 'react';
import Header from '../layout/header/header.jsx';
import Slider from '../layout/silder/silder.jsx';

import '../asset/style/common.scss';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    };
  
    render(){
        return(
            <div>
                <Header/>
                <div className='main-content'>
                   <Slider/>
                   <div>{this.props.children}</div> 
                </div>
            </div>
        )
    }
   
}

export default App;
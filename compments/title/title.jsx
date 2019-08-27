import React from 'react';
class Title extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         title:this.props.title
    //     }
    // }

    render(){
       // let {title}=this.state;
        return(
            <div>
                <h1>标题是：{this.props.title}</h1>
            </div>
        )
    }
}
export default Title;
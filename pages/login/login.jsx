import React from 'react';
import './login.scss'
class Login extends React.Component{
    constructor(props){
        super(props);

        this.goLogin=this.goLogin.bind(this)
    }
    goLogin(){
        this.props.history.push({pathname:`/ct-history`})
    }
    render(){
        return(
            <div>
                <button onClick={this.goLogin}>登录</button>
            </div>
        )
    }
}
export default Login;
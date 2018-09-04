import React from 'react';
import './header.scss'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.LoginOut=this.LoginOut.bind(this);
    }
    
    LoginOut(){
        location.hash="/login" ;  
    }
    render(){
        return(
            <div className='header'>
                <div >
                    <ul>
                        <li>Logo</li>
                        <li>HYAK 后台系统</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>头像图片</li>
                        <li>HYAK</li>
                        <li>修改密码</li>
                        <li onClick={this.LoginOut}>退出</li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default Header;
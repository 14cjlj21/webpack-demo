import React from 'react';
import { HashRouter as Router, Route,Link,Switch} from 'react-router-dom';
import  App  from "../src/app.jsx";
import CtHistory from '../pages/dr-ctHistory/ctHistory.jsx';    //历史CT
import NewMedical from '../pages/dr-newMedical/newMedical.jsx'; //新建病历
import Login from '../pages/login/login.jsx';                   //登录页面
class Routers extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router> 
                <Switch>
                    <Route exact path="/login" component={Login}/>  
                    <App>
                        {/* 历史CT查看 */}
                        <Route exact path="/ct-history" component={CtHistory}/> 
                        {/* 新建病历   */}
                        <Route exact path="/newMedical" component={NewMedical}/>   
                    </App>
                </Switch> 
            </Router>
        )
    }
}
export default Routers;
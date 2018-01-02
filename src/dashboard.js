import React from 'react';
import {Link,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../redux/auth.redux';
import App from './app';
function Erying(){
    return <h2>无状态组件2</h2>
}
function Qi() {
    return <h2>无状态组件3</h2>
}

@connect(
    state=>state.auth,
    {logout}
    )


class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const redirectorToLogin=<Redirect to="./login"></Redirect>
        const app=(<div>
                <div>page </div>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
            <ul>
                <li>
                    <Link to="/dashboard" >1</Link>
                </li>
                <li>
                    <Link to="/dashboard/erying" >2</Link>
                </li>
                <li>
                    <Link to="/dashboard/qibinglian" >3</Link>
                </li>
                <Route path="/dashboard/" exact component={App}></Route>
                <Route path="/dashboard/erying" component={Erying}></Route>
                <Route path="/dashboard/qibinglian" component={Qi}></Route>
            </ul>
        </div>);



      /*  return this.props.isAuth ? app : redirectorToLogin*/
        return app
    }

}


export default Dashboard;


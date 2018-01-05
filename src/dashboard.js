import React from 'react';
import {Link, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../redux/auth.redux';
import App from './app';
function Erying() {
    return <h2>无状态组件2</h2>
}
function Qi() {
    return <h2>无状态组件3</h2>
}
function Test() {

    return <h2>1223</h2>

}
@connect(
    state=>state.auth,
    {logout}
    )

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const redirectorToLogin = <Redirect to="/login"></Redirect>
        const match=this.props.match;
        console.log(match)
        const app = (<div>
            <div>page</div>
            {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
            <ul>
                <li>
                    <Link to={`${match.url}`}>1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/erying`}>2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/qibinglian`}>3</Link>
                </li>

                    <Route path={`${match.url}`}  exact component={App}></Route>
                    <Route path={`${match.url}/erying`} component={Erying}></Route>
                    <Route path={`${match.url}/qibinglian`} component={Qi}></Route>
                    <Route path="/:location" component={Test}></Route>

            </ul>
        </div>);


          return this.props.isAuth ? app : redirectorToLogin

    }

}


export default Dashboard;


import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../redux/auth.redux';
import {Button} from 'antd-mobile';

@connect(
    state=>state.auth,
    {login}
)
class Auth extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return  (
                <div>
                    {this.props.isAuth ? <Redirect to="/dashboard"/> : null}
                   <h2>你没有权限需要登入才能看</h2>
                    <Button onClick={this.props.login}>登入</Button>

               </div>
          )
    }
}


export default Auth;

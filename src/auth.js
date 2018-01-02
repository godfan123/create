import React from 'react';
import {connect} from 'react-redux';
import {login} from '../redux/auth.redux';


class Auth extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return <h2>auth page</h2>

    }
}



Auth=connect()(Auth);


export default Auth;
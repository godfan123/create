import React from 'react';
import {connect} from 'react-redux';
import {addGun,removeGun,addGunAsync} from '../redux/index.redux';
class App extends React.Component{
    render(){
        return (
        <div>
            <h1>现在数{this.props.num}</h1>
            <button onClick={this.props.addGun}>增加</button>
            <button onClick={this.props.removeGun}>减少</button>
            <button onClick={this.props.addGunAsync}>过2秒加</button>
        </div>
        )
    }
}

const mapStatetoProps=(state)=>{
      return {num: state}
};

const actionCreators={addGun,removeGun,addGunAsync};
App=connect(mapStatetoProps,actionCreators)(App);
/*@connect(mapStatetoProps,actionCreators)*/


export default App


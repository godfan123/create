import React from 'react';
import {connect} from 'react-redux';
import {add,remove,removeTime} from '../redux/index.redux';
import {Button} from 'antd-mobile';
const mapStatetoProps=(state)=>{
    console.log(state.auth);
    return {num: state.counter}
};

const actionCreators={add,remove,removeTime};
@connect(state=>({num:state.counter}),actionCreators)

class App extends React.Component{
        render(){
            return (
        <div>
            <h1>现在数{this.props.num}</h1>
            {/* add已经自动有了dispatch的功能 */}
            <button onClick={this.props.add}>增加</button>
            <button onClick={this.props.remove}>减少</button>
            <button onClick={this.props.removeTime}>过2s加</button>
            <Button type="primary">click</Button>
        </div>
        )
    }
}


/*App=connect(mapStatetoProps,actionCreators)(App);*/



export default App


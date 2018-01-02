import React from 'react';
import {Link,Route} from 'react-router-dom';
import App from './app';
function Erying(){
    return <h2>无状态组件2</h2>
}
function Qi() {
    return <h2>无状态组件3</h2>
}

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <div>
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
           </div>

        )

    }

}


export default Dashboard;


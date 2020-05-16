import React, { Component } from 'react'
import Dashboard from '../components/Dashboard'

class Bilateral extends Component {
    state = { 
        dashboard:false
     }

     returnDashboard = () =>{
         this.setState({dashboard:true})
     }
    render() { 
        if(this.state.dashboard){
            return (<Dashboard/>)
        }
        return ( 
            <div>
                {this.state.dashboard ? <Dashboard/> : (
                    <div>
                        Bilateral is currently under construction. We'll have it up soon :-/
                        <button onClick={this.returnDashboard}>Dashboard</button>
                    </div>
                )}
            </div>
         );
    }
}
 
export default Bilateral;
import React, { Component } from 'react'
import backDrop from '../imgs/backDrop.png'
import Signup from './Signup'
import firebase from '../FireConfig'
import remixfour from '../imgs/remixfour.png'
import Logstyle from '../css/Logstyle.css'


class Login extends Component {
    constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    this.state={
        email : "",
        password : "",
        create : false
        
    }
}
create=()=>{
    this.setState({create: true})
}

login(e){
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        alert(err);
    })
}

handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}


    render() { 
        if(!this.state.create){return (
            <div id="backdrop" style={{
                display: 'flex',
                    justifyContent:'center', 
                    alignItems:'center',                     
                    maxWidth: '100%',
                    maxHeight: '100%'
            }}>
            <form onSubmit={this.login} className="logintable">
                <a href="https://github.com/coltonnewton89/hackTeck.git">To see github, click here.</a>
            <img src={remixfour} style={{
                marginTop:'-150px',
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}/>
                <div className="customInput">
                    <input
                    name="email"
                    type="text"
                    onChange={this.handleChange}
                    id="uemail"
                    value={this.state.email}
                    required
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>            
                    </div>

                <div className="customInput">
                    <input
                    name="password"
                    type= "password"
                    onChange={this.handleChange}
                    id="upassword"
                    value={this.state.password}
                    required
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Password</label>
                    </div>
                
                <button id="logBtn" type='submit'>Login</button>
                <input type="button" onClick={this.create} id="createNewUser" value="Create New User"/>
            </form>
            <img src={backDrop} style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    zIndex: -1,
                }}/>
        </div>
          )}else{
              return (<Signup/>)
          }
        
    }
}
 
export default Login;
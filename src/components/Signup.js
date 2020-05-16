import React , { Component } from "react";
import firebase from '../FireConfig';
import backDrop from '../imgs/backDrop.png'
import Logstyle from '../css/Logstyle.css'
import remixfour from '../imgs/remixfour.png'

class Signup extends Component {
    constructor(props)
{
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : "",
        confirm : "",
        err: null,
        checked: false
    }
}
clicked = () => {
    if(this.state.password == this.state.confirm && this.state.checked){
        this.signup()
    }else if(this.state.password == this.state.confirm && !this.state.checked){
        alert("Please check that you have read Terms and Conditions")
    }else if(this.state.password !== this.state.confirm && this.state.checked){
        alert("Your password did not agree with your confirm password. Please try again!")
    }
}

terms = ()=>{
    alert("Please note that you are responsible for your own posts and I accept no association to any posts submitted by anyone.\
    Further terms and conditions would go here.")
}

checked=()=>{
    this.setState({checked: true})
}

signup(e){
    
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then( authRes => {
        const userObj = {
            email: authRes.user.email
        }
        firebase.firestore().collection('users')
        .doc(this.state.email).set(userObj)
    }).catch((err)=>{
        this.setState({err: err});
    })
}

handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
    render() { 
        return ( 
            <div id="backdrop" style={{
                display: 'flex',
                    justifyContent:'center', 
                    alignItems:'center', 
                    
                    maxWidth: '100%',
                    maxHeight: '100%'
            }}>
                <form onSubmit={this.clicked} className="createUserTable">
                <img src={remixfour} style={{
                marginTop:'-150px',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    zIndex: -1,
                }}/>

                    <div className="customInput">
                    <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    required/>
                    <span class="highlight"></span>
                    <label>Email</label>
                    <span class="bar"></span>
                    </div>

                    <div className="customInput">
                    <input
                    name="password"
                    type= "password"
                    onChange={this.handleChange}
                    id="password"
                    value={this.state.password}
                    required/>
                    <span class="highlight"></span>
                    <label>Password</label>
                    <span class="bar"></span>
                    </div>
                    <div className="customInput">
                    <input
                    name="confirm"
                    type= "password"
                    onChange={this.handleChange}
                    id="confirm"
                    value={this.state.cornfirm}
                    required/>
                    <span class="highlight"></span>
                    <label>Confirm Password</label>
                    <span class="bar"></span>
                    <p>{this.state.err}</p>
                    </div>
                    <p onClick={this.terms} id="termsAndConditions">Click Here To Read Terms and Conditions</p>
                    <div id="terms" style={{display: "flex"}}>                    
                    <input type="checkbox" name="checkBox" id="agree" onChange={this.checked} style={{height:"15px", marginLeft:"-120px", marginRight:"5px"}}/>
                    <p style={{marginLeft:"-140px", marginTop:"-.1px", height:"15px"}}>I agree to the Terms and Conditions</p>
                    
                    </div>
                    <button id="createUser" type='submit'>Signup</button>
                
            </form>
            
            <img src={backDrop} style={{maxWidth: '100%',
                    maxHeight: '100%',
                    zIndex: -1,}}/>
            </div>
            

        
         );
    }
}
 
export default Signup;
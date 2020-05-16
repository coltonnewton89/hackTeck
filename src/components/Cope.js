import React, { Component } from 'react';
import firebase from '../FireConfig'
import backDrop from '../imgs/backDrop.png'

class Cope extends Component {

constructor(props){
    super(props)
    this.state = {
      copeArr: [],
      _copeArr: '',
      viewCope: false
    }
    this.pushCustomChoice = this.pushCustomChoice.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({_copeArr: e.target.value});
  }
  

   pushCustomChoice(e){
    e.preventDefault()
    if(this.state.copeArr.length <=1){
      this.setState({copeArr: this.state.copeArr.concat(this.state._copeArr + ', ')})
     }
     if(this.state.copeArr.length === 2){
      this.setState({copeArr: this.state.copeArr.concat('and ' + this.state._copeArr)})
     }
     document.getElementById('custom').value = ''

     console.log(this.state.copeArr)
   }

   pushChoice =(e)=>{
     if(this.state.copeArr.length <=1){
      this.setState({copeArr: this.state.copeArr.concat(e.target.value + ', ')})
     }
     if(this.state.copeArr.length === 2){
      this.setState({copeArr: this.state.copeArr.concat('and ' + e.target.value)})
     }
    
    console.log(this.state.copeArr)
   }

   clearAll = () =>{
     this.setState({copeArr: []})
   }   
   
  render() {
    const currentUser = firebase.auth().currentUser.uid.toString()
      const {toggleCope} = this.props
    if(this.state.copeArr.length === 3){
      firebase.firestore().collection('usercycle').doc(`${currentUser}_copeArr`)
      .set({
        copeArr: this.state.copeArr
    })
      console.log('should have sent to database')
      this.props.toggleCope()            
    }
    return ( 
      
        <div id='btnBackdrop' style={{backgroundImage: `url(${backDrop})`, backgroundSize:'cover',position:'relative', display: 'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center',
        alignItems:'center', overflow:'hidden', color:'white'}}>
          <h5>choose three coping mechanisms. "I want to or I get: _____ when I'm in pain"</h5>
        <div id='button-container' style={{color:'white', height:'100vh', width:'100vw', overflow:'scroll'}}>
        <button className='wordbank' value="Criticize" onClick={this.pushChoice} >Criticize</button>        
        <button className='wordbank' value="Angry" onClick={this.pushChoice} >Angry</button>
        <button className='wordbank' value="Become Sarcastic" onClick={this.pushChoice} >Become Sarcastic</button>     
        <button className='wordbank' value="Aggressive" onClick={this.pushChoice} >Aggressive</button>        
        <button className='wordbank' value="Hold a Grudge" onClick={this.pushChoice} >Hold a Grudge</button>        
        <button className='wordbank' value="Withdraw" onClick={this.pushChoice} >Withdraw</button>
        <button className='wordbank' value="Self Shame" onClick={this.pushChoice} >Self Shame</button>
        <button className='wordbank' value="Depressed" onClick={this.pushChoice} >Depressed</button>
        <button className='wordbank' value="Anxious" onClick={this.pushChoice} >Anxious</button>
        <button className='wordbank' value="Inconsolable" onClick={this.pushChoice} >Inconsolable</button>
        <button className='wordbank' value="Exagerate" onClick={this.pushChoice} >Exagerate</button>       
        <button className='wordbank' value="Self-Harmful" onClick={this.pushChoice} >Self-Harmful</button>
        <button className='wordbank' value="Performance Driven" onClick={this.pushChoice} >Performance Driven</button>
        <button className='wordbank' value="Defensive" onClick={this.pushChoice} >Defensive</button>        
        <button className='wordbank' value="Demanding" onClick={this.pushChoice} >Demanding-</button>        
        <button className='wordbank' value="Numb" onClick={this.pushChoice} >Numb</button>
        <button className='wordbank' value="Selfish" onClick={this.pushChoice} >Selfish</button>
        <button className='wordbank' value="Obsessed" onClick={this.pushChoice} >Obsessed</button>
        <button className='wordbank' value="Be Irresponsible" onClick={this.pushChoice} >Be Irresponsible-</button>
        <button className='wordbank' value="Impulsive" onClick={this.pushChoice} >Impulsive</button>        
        <button className='wordbank' value="Avoidant" onClick={this.pushChoice} >Avoidant</button>
        <button className='wordbank' value="Minimize" onClick={this.pushChoice} >Minimize</button>
        
        <form  onSubmit={this.pushCustomChoice}>
          <input type="text" id='custom' placeholder="Type Custom Cope Here" value={this.state.value} onChange={this.handleChange}/>
        <button type="submit" className='wordbank'>Add Cope</button>
        </form>
        
        <br/>
        <button className='wordbank' onClick={this.clearAll}>Clear All</button>
        </div>
    </div>
      
     );
  }
}
 
export default Cope;
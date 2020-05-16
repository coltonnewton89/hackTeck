import React, { Component } from 'react';
import firebase from '../FireConfig'
import backDrop from '../imgs/backDrop.png'

class Truth extends Component {

  constructor(props){
    super(props)
    this.state = {
      truthArr: [],
      _truthArr: '',
      viewTruth: false
    }
    this.pushCustomChoice = this.pushCustomChoice.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({_truthArr: e.target.value});
  }
  

   pushCustomChoice(e){
    e.preventDefault()
    if(this.state.truthArr.length <=1){
      this.setState({truthArr: this.state.truthArr.concat(this.state._truthArr + ', ')})
     }
     if(this.state.truthArr.length === 2){
      this.setState({truthArr: this.state.truthArr.concat('and ' + this.state._truthArr)})
     }
     document.getElementById('custom').value = ''

     console.log(this.state.truthArr)
   }

   pushChoice =(e)=>{
     if(this.state.truthArr.length <=1){
      this.setState({truthArr: this.state.truthArr.concat(e.target.value + ', ')})
     }
     if(this.state.truthArr.length === 2){
      this.setState({truthArr: this.state.truthArr.concat('and ' + e.target.value)})
     }
    
    console.log(this.state.truthArr)
   }

   clearAll = () =>{
     this.setState({truthArr: []})
   }   
   
  render() {
    const {toggleTruth} = this.props
    const currentUser = firebase.auth().currentUser.uid.toString()
    if(this.state.truthArr.length === 3){firebase.firestore().collection('usercycle').doc(`${currentUser}_truthArr`)
    .set({
      truthArr: this.state.truthArr
  })
    alert('should have sent to database') 
    this.props.toggleTruth()           
  }
    return ( 
      
        <div id='btnBackdrop'  style={{backgroundImage: `url(${backDrop})`, backgroundSize:'cover',position:'relative', display: 'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center',
        alignItems:'center', overflow:'hidden', color:'white'}}>  
        <h5>Try to take your "Pain" words and replace them with Truths. "I am: _____"</h5>
        <div id='button-container'  style={{color:'white', height:'100vh', width:'100vw', overflow:'scroll'}}>
        <button className='wordbank' value="Loved" onClick={this.pushChoice} >Loved</button>
        <button className='wordbank' value="Worthy" onClick={this.pushChoice} >Worthy</button>
        <button className='wordbank' value="Significant" onClick={this.pushChoice} >Significant</button>
        <button className='wordbank' value="Accomplished/Not Alone" onClick={this.pushChoice} >Accompanied/Not Alone</button>
        <button className='wordbank' value="Valuable" onClick={this.pushChoice} >Valuable</button>
        <button className='wordbank' value="Wanted" onClick={this.pushChoice} >Wanted</button>
        <button className='wordbank' value="Hopeful" onClick={this.pushChoice} >Hopeful</button>
        <button className='wordbank' value="Respected" onClick={this.pushChoice} >Respected</button>
        <button className='wordbank' value="Liberalized" onClick={this.pushChoice} >Liberalized</button>
        <button className='wordbank' value="Safe" onClick={this.pushChoice} >Safe</button>
        <button className='wordbank' value="Secure" onClick={this.pushChoice} >Secure</button>        
        <button className='wordbank' value="Capable" onClick={this.pushChoice} >Capable</button>
        <button className='wordbank' value="Empowered" onClick={this.pushChoice} >Empowered</button>        
        <button className='wordbank' value="In Control" onClick={this.pushChoice} >In Control</button>
        <button className='wordbank' value="Free" onClick={this.pushChoice} >Free</button>
        <button className='wordbank' value="Protected" onClick={this.pushChoice} >Protected</button>
        <button className='wordbank' value="Connected" onClick={this.pushChoice} >Connected</button>        
        <button className='wordbank' value="Known" onClick={this.pushChoice} >Known</button>
        <button className='wordbank' value="Strong" onClick={this.pushChoice} >Strong</button>
        <form  onSubmit={this.pushCustomChoice}>
          <input type="text" id='custom' placeholder="Type Custom Truth Here" value={this.state.value} onChange={this.handleChange}/>
        <button type="submit" className='wordbank'>Add Truth</button>
        </form>
        
        <br/>
        <button className='wordbank' onClick={this.clearAll}>Clear All</button>
        <p className='list'>
             <span>  
               {this.state.truthArr}
             </span>
           </p>
        </div>   
        
    </div>
      
     );
  }
}
 
export default Truth;
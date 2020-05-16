import React, { Component } from 'react';
import backDrop from '../imgs/backDrop.png'

import Pain from './Pain'
import Cope from './Cope'
import Truth from './Truth'
import Response from './Response'
import firebase from '../FireConfig'

class Cycle extends Component{
  state={
    isPainVisible: false,
    isCopeVisible: false,
    isTruthVisible: false,
    isResponseVisible: false,
    priArr: 'Pain array, pain, array',
    copeArr: 'cope array, cope, array',
    truthArr: 'truth array, truth, array',
    responseArr: 'response array, response, array'
  }

  

  render(){

    return(
      <div>
        {this.state.isPainVisible ? <Pain togglePain={this.togglePain}/> : this.state.isCopeVisible ? <Cope toggleCope={this.toggleCope}/> : this.state.isTruthVisible ? <Truth toggleTruth={this.toggleTruth}/> : this.state.isResponseVisible ? <Response toggleResponse={this.toggleResponse}/> : 
        (
          <div style={{backgroundImage: `url(${backDrop})`, backgroundSize:'cover', display: 'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center',
      alignItems:'center', overflow:'hidden'}} onChange={this.componentDidMount}>
        <button onClick={this.alert}>Click here for instructions</button>
        <div style={{color:'white', height:'102vh', width:'102vw', overflow:'scroll'}}>


      <div id='painCycle'>
      <h5>You feel</h5>
        <h2 onClick={this._togglePain}>{this.state.priArr}</h2>

    {/* mini red arrows go here */}

    <h5>which makes you want to or get </h5>
    <h2 onClick={this._toggleCope}>{this.state.copeArr}</h2>
      </div>
    
    
    {/* large circle gif goes here */}

    <div id='peaceCycle'>
    <h5>but you are ACTUALLY: </h5>
      <h2 onClick={this._toggleTruth}>{this.state.truthArr}</h2>
      {/* mini green arrows go here */}
      <h5>which now makes you: </h5>
    <h2 onClick={this._toggleResponse}>{this.state.responseArr}</h2>
    </div>
    <p> Although we try to stay in our peace cycle, sometimes we get off balance. Do NOT feel bad if this happens. Just go through the process again!
          Pain, Cope, Truth, and Response. New events can trigger new things so feel free to update these as often as you please. To edit them, just click
          where your old Pain, Cope, Truth or Response words are. 
        </p>
        </div>
      </div>
        )
        }
      </div>
      
    )
  }
  alert = () =>{
    alert("Welcome to your Cycle. No matter how hard we try to run away from it, pain is inevitable. The onnset can be quick, powerful, slow to leave, and occasionally become an overwhelming element all on it's own. This element is called the pain cycle.\
 The pain cycle develops when negative circumstances or thoughts conflict with what we inherently aspire for... Peace.\
 Although it can be difficult, once our pain cycle is broken, it can bring us a new cycle, this cycle is called the Truth Cycle. To begin click on one of cycle components: \
Pain, Cope, Truth, and Response. Further instructions will be presented at that time. Once you return to the 'full cycle' screen, click on the next one until finished. (Ex: if I just finished the Pain section, I would move \
on to the Cope section) Remember, DO NOT give up on yourself and good luck!")
  }
  
  togglePain = () => {
    this.setState({isPainVisible: !this.state.isPainVisible})
    console.log('toggled pain back')
    this.componentDidMount()
  }

  _togglePain = () =>{
    this.setState({isPainVisible: !this.state.isPainVisible})
  }

  toggleCope = () => {
    this.setState({isCopeVisible: !this.state.isCopeVisible})
    console.log('cope was toggled')
    this.componentDidMount()
  }

  _toggleCope = () =>{
    this.setState({isCopeVisible: !this.state.isCopeVisible})
  }

  toggleTruth = () => {
    this.setState({isTruthVisible: !this.state.isTruthVisible})
    console.log('truth was toggled')
    this.componentDidMount()
  }

  _toggleTruth = () =>{
    this.setState({isTruthVisible: !this.state.isTruthVisible})
  }

  toggleResponse = () => {
    this.setState({isResponseVisible: !this.state.isResponseVisible})
    console.log('response was toggled.')
    this.componentDidMount()
  }

  _toggleResponse = () =>{
    this.setState({isResponseVisible: !this.state.isResponseVisible})
  }

  //firestore stuff

  componentDidMount = () =>{  
    const currentUser = firebase.auth().currentUser.uid.toString()  
    
    var priArrRef = firebase.firestore().collection('usercycle').doc(`${currentUser}_priArr`)

      priArrRef.get().then(doc =>{
        if(doc.exists){
            this.setState({priArr: doc.data().priArr})
            console.log('pain snapped')
        }else{
          this.setState({priArr: 'Pain'})
        }
        }
      )
      

      var copeArrRef = firebase.firestore().collection('usercycle').doc(`${currentUser}_copeArr`)
      copeArrRef.get().then(doc =>{
        if(doc.exists){
          this.setState({copeArr:doc.data().copeArr})
        }else{
          this.setState({copeArr: 'Cope'})
        }
      })

      var truthArrRef = firebase.firestore().collection('usercycle').doc(`${currentUser}_truthArr`)
      truthArrRef.get().then(doc =>{
        if(doc.exists){
          this.setState({truthArr: doc.data().truthArr})
        }else{
          this.setState({truthArr: 'Truth'})
        }
      })
      
      var responseArrRef = firebase.firestore().collection('usercycle').doc(`${currentUser}_responseArr`)
      responseArrRef.get().then(doc =>{
        if(doc.exists){
          this.setState({
            responseArr: doc.data().responseArr
          })
        }else{
          this.setState({responseArr: 'Response'})
        }
      })
  }
}

export default Cycle;
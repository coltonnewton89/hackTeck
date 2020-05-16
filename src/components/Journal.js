import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard'
import backDrop from '../imgs/backDrop.png'



const Journal = () => {


  const instructions = ()=>{
    alert('Journal is designed to search for "pain" words through out your entry. Saving entries option is coming very soon.')
  }
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

    //setting up hook for journal input with function
  const [userText, setUserText] = useState('');
  const updateUserText = event => {
   setUserText(event.target.value);
   var keywords = ['unloved', 'unworthy', 'insignificant', 'alone', 'worthless', 'devalued', 'defective', 'inadequate', 'rejected', 'unacceptable', 'hopeless', 'unwanted', 'abandoned', 'unsafe', 'insecure', 'a failure', 'fearful', 'powerless', 'out of control', 'controlled', 'vulnerable', 'disconnected', 'betrayed', 'invalidated', 'not good enough']
     const userWords = userText.split(' ');
     if(keywords.some((w)=>userWords[userWords.length - 1].indexOf(w)!=-1)){
      alert('you might be in your pain! It might benefit you to visit your pain cycle');
      userWords.push(null)
      }

  

  
  }

  if (isToggled === false){return (

    <div id="backdrop" style={{backgroundImage: `url(${backDrop})`, backgroundSize:'cover', display: 'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center',
      alignItems:'center', overflow:'hidden'}}>
        <div style={{color:'white', height:'100vh'}}>
        <h2>Journal</h2>
        <p onClick={instructions}>tap Here For Instructions</p>
        <div className="customInput">
        <input name="journalInput"
        type="text"
        onChange={updateUserText}
        id="journalInput"
        value={userText}
        required
        />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Journal Input</label>            
          <br/>
          <button className='wordbank' onClick={toggleTrueFalse}>Return to Dashboard</button>
          </div>
  </div>
  <img src={backDrop} style={{
          maxWidth: '100%',
          maxHeight: '100%',
          zIndex: -1,
      }}/>
</div>

  )}else{
    return <Dashboard/>
  }
    

    }


export default Journal;



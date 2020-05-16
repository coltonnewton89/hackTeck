import React, { Component } from 'react'
import firebase from '../FireConfig'

//import button images
import messengerBtn from '../imgs/messengerBtn.png'
import backDrop from '../imgs/backDrop.png'
import cycleButton from '../imgs/cycleButton.png'
import journalButton from '../imgs/journalButton.png'
import bilateralButton from '../imgs/bilateralButton.png'
import workshopButton from '../imgs/workshopButton.png'
import logOut from '../imgs/logOut.png'
//import components
import Messenger from '../messenger/Messenger'
import Cycle from './Cycle'
import Journal from '../components/Journal'
import Bilateral from '../components/Bilateral'
import Workshop from '../components/Workshop'
class Dashboard extends Component {
    state = { 
        messenger: false,
        cycle: false,
        journal: false,
        bilateral: false,
        workshop: false
     }
     //change component functions

     messenger = () =>{
         this.setState({messenger: true})
     }
     
     cycle = () =>{
        this.setState({cycle:true})
    }

    journal = () =>{
        this.setState({journal:true})
    }

    bilateral = () =>{
        this.setState({bilateral:true})
    }
    
    workshop = () =>{
        this.setState({workshop:true})
    }
    

     
     
    logout(){
        firebase.auth().signOut();
    }

    render() { 

        return ( 
            <div>
                {this.state.cycle ? <Cycle/> : this.state.journal ? <Journal/> : this.state.bilateral ? <Bilateral/> : this.state.workshop ? <Workshop/> : this.state.messenger? <Messenger/> : (
                    <div style={{backgroundImage: `url(${backDrop})`, backgroundSize:'cover', display: 'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center',
                    alignItems:'center', overflow:'scroll'
                }}>
                    <div style={{color: 'white'}}>

                    <div id='messenger' className='dashButton'>
                        <img src={messengerBtn} onClick={this.messenger} className={'dashImage'}/>
                        <br/>
                        Messenger <p style={{fontSize:'small'}}>(Styling still in progress)</p>
                    </div>

                    <div id="peaceCycle" className="dashButton">
                    <img src={cycleButton} onClick={this.cycle} className="dashImage"/>
                    <br/>
                    Cycle
                    </div>
                    
        
                    <div id="journal" className="dashButton">
                    <img src={journalButton} onClick={this.journal} className="dashImage"/>
                    <br/>
                    Journal
                    </div>
                    
                    
                    <div id="bilateral" className="dashButton">
                    <img src={bilateralButton} onClick={this.bilateral} className="dashImage"/>
                    <br/>
                    Bilateral
                    </div>
                    
        
                    <div id="workshop" className="dashButton">
                    <img src={workshopButton} onClick={this.workshop} className="dashImage"/>
                    <br/>
                    Workshop
                    </div>

                    <div id="logOut" className="dashButton">
                    <img src={logOut} onClick={this.logout} className="dashImage"/>
                    <br/>
                    Log Out
                    </div>
                    
        
        
                    </div>
        
                    
        
                    
                </div>
                )}
            </div>
            )
         
        
    }
}
 
export default Dashboard;
    
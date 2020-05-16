import React, { Component } from 'react';
import Dashboard from './Dashboard'
import firebase from '../FireConfig'
import _ from 'lodash'
import renderHTML from 'react-render-html'
import AddPosts from './AddPosts'
import backDrop from '../imgs/backDrop.png'

class Workshop extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      body:'',
      posts: [],
      checked: false,
      dashboard: false
    }
  }
  

    renderPosts(){
    return _.map(this.state.posts, (post, key)=>{
      return(
        //maybe add some style here
        <div key={key}>
          <h2>{post.title}</h2>
          <p>{renderHTML(post.body)}</p>
        </div>
      )
    })
  }

  componentDidMount(){
    const user = firebase.auth().currentUser.uid.toString()
    firebase.database()
    .ref(`/workshopPosts/${user}`)
    .on('value', snapshot =>{
      this.setState({posts : snapshot.val()})
    })
  }
  returnDashboard = () =>{
    this.setState({dashboard:true})
}

    render() { 
      if(this.state.dashboard){
        return (<Dashboard/>)
    }
        return ( 
            <div id='workshopContainer' style={{backgroundImage: `url(${backDrop})`, backgroundSize:'cover', display: 'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center',
            alignItems:'center', overflow:'hidden'}}>
              <AddPosts/>
                <br/>
                <div style={{color:'white', height:'102vh', width:'102vw', overflow:'scroll'}}>
                {this.renderPosts()}
                </div>
                
                <br/>
                <button onClick={this.returnDashboard}>Dashboard</button>
            </div>
         );
    }
}
 
export default Workshop;
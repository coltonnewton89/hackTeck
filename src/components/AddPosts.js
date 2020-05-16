import React, { Component } from 'react'
import firebase from '../FireConfig'
import _ from 'lodash'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'; 


class AddPosts extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      body:'',
      posts:{}
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  handleTitleChange(e){
    this.setState({
      title: e.target.value
    })
    console.log(this.state.title)
  }

  onInputChange(e){
    this.setState({
      body: e
    })
   console.log(this.state.body)
  }

  logUser = () =>{
    const user = firebase.auth().currentUser.uid.toString()
    console.log(user)
  }

  onHandleSubmit(e){
    e.preventDefault()
    const user = firebase.auth().currentUser.uid.toString()
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    firebase.database()
    .ref(`/workshopPosts/${user}`).push(post)
    this.setState({
      title: '',
      body: ''
    })
    console.log(user)
  }
  
  render() { 
    return ( 
      <div style={{
        display: 'flex',
            justifyContent:'center', 
            alignItems:'center',                     
            maxWidth: '100%',
            maxHeight: '100%'
            }}>
            <form onSubmit={this.onHandleSubmit}>
            <input value={this.state.title} type="text" name="title" placeholder="Title" onChange={this.handleTitleChange} ref="title"/>
            <SunEditor setDefaultStyle="background-color: rgba(0, 0, 0,0)"
            setOptions={{
            buttonList: [['undo', 'redo'],['font', 'fontSize'],['fontColor', 'bold', 'underline', 'italic'],['image','video', 'link'], ['align', 'list'],['table', 'template']]
            }} placeholder='Body' value={this.state.body} onChange={this.onInputChange}/>
            <button>Post</button>
            </form>
            <br/>
            </div>
            );
  }
}

export default AddPosts;
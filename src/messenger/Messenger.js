import React, { Component } from 'react';
import ChatList from '../chatlist/chatList'
import {Button, withStyles} from '@material-ui/core'
import styles from './styles'
import ChatView from '../chatview/chatview'
import ChatTextBox from '../chattextbox/chatTextBox'
import NewChat from '../newchat/newChat'
import firebase from '../FireConfig'
import Dashboard from '../components/Dashboard';
import backDrop from '../imgs/backDrop.png'


class Messenger extends React.Component {
    constructor() {
      super();
      this.state = {
        dashboard: false,
        selectedChat: null,
        newChatFormVisible: false,
        email: null,
        friends: [],
        chats: [],
        chatlistVis: true
      };
    }
  
    render() {
  
      const { classes } = this.props;
      
      
        return(
          <div >
          {this.state.dashboard ? <Dashboard/> : (
            <div style={{backgroundImage: `url(${backDrop})`, backgroundSize:'cover', display: 'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center',
            alignItems:'center', overflow:'hidden'}} onChange={this.componentDidMount}>>
              {
                this.state.chatlistVis ? <ChatList chatlistVisible={this.chatListVisible} 
                history={this.props.history} 
                userEmail={this.state.email} 
                selectChatFn={this.selectChat} 
                chats={this.state.chats} 
                selectedChatIndex={this.state.selectedChat}
                newChatBtnFn={this.newChatBtnClicked}>
              </ChatList> : 
              this.state.newChatFormVisible ? null : <ChatView chatListVisible={this.chatListVisible}
                user={this.state.email} 
                chat={this.state.chats[this.state.selectedChat]}>
              </ChatView>
            
              }
            
            
            { 
              this.state.selectedChat !== null && !this.state.newChatFormVisible && !this.state.chatlistVis ? <ChatTextBox userClickedInputFn={this.messageRead} submitMessageFn={this.submitMessage}></ChatTextBox> : null 
            }
            {
              this.state.newChatFormVisible ? <NewChat goToChatFn={this.goToChat} newChatSubmitFn={this.newChatSubmit}></NewChat> : null
            }
            <Button onClick={this.returnDashboard} className={classes.signOutBtn}>Dashboard</Button>
          </div>
          )}
          
          </div>
        );
      
    }

    chatListVisible = () =>{
      this.setState({chatlistVis: !this.state.chatlistVis})
    }
  
    returnDashboard = () =>{
      this.setState({dashboard:true})
  }
  
    submitMessage = (msg) => {
      const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat]
        .users
        .filter(_usr => _usr !== this.state.email)[0])
      firebase
        .firestore()
        .collection('chats')
        .doc(docKey)
        .update({
          messages: firebase.firestore.FieldValue.arrayUnion({
            sender: this.state.email,
            message: msg,
            timestamp: Date.now()
          }),
          receiverHasRead: false
        });
    }
  
    // Always in alphabetical order:
    //might change to time stamp later?
    // 'user1:user2'
    buildDocKey = (friend) => [this.state.email, friend].sort().join(':');
  
    newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });
  
    newChatSubmit = async (chatObj) => {
      const docKey = this.buildDocKey(chatObj.sendTo);
      await 
        firebase
          .firestore()
          .collection('chats')
          .doc(docKey)
          .set({
            messages: [{
              message: chatObj.message,
              sender: this.state.email
            }],
            users: [this.state.email, chatObj.sendTo],
            receiverHasRead: false
          })
      this.setState({ newChatFormVisible: false });
      this.selectChat(this.state.chats.length - 1);
    }
  
    selectChat = async (chatIndex) => {
      await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
      this.messageRead();
    }
  
    goToChat = async (docKey, msg) => {
      const usersInChat = docKey.split(':');
      const chat = this.state.chats.find(_chat => usersInChat.every(_user => _chat.users.includes(_user)));
      this.setState({ newChatFormVisible: false });
      await this.selectChat(this.state.chats.indexOf(chat));
      this.submitMessage(msg);
    }
  
    messageRead = () => {
      const chatIndex = this.state.selectedChat;
      const docKey = this.buildDocKey(this.state.chats[chatIndex].users.filter(_usr => _usr !== this.state.email)[0]);
      if(this.clickedMessageWhereNotSender(chatIndex)) {
        firebase
          .firestore()
          .collection('chats')
          .doc(docKey)
          .update({ receiverHasRead: true });
      } else {
        console.log('Clicked message where the user was the sender');
      }
    }
  
    clickedMessageWhereNotSender = (chatIndex) => this.state.chats[chatIndex].messages[this.state.chats[chatIndex].messages.length - 1].sender !== this.state.email;
  
    componentWillMount = () => {
        firebase.auth().onAuthStateChanged(async _usr => {
          if(!_usr)
            this.props.history.push('/login');
          else {
            await firebase
              .firestore()
              .collection('chats')
              .where('users', 'array-contains', _usr.email)
              .onSnapshot(async res => {
                const chats = res.docs.map(_doc => _doc.data());
                await this.setState({
                  email: _usr.email,
                  chats: chats,
                  friends: []
                });
              })
          }
      });
    }
  }

export default withStyles(styles)(Messenger)
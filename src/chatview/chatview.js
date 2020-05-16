import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatView extends React.Component {
    

    componentDidUpdate= () =>{
        const container = document.getElementById('chatview-container')
        if(container)
        container.scrollTo(0, container.scrollHeight)
    }

    render(){
        const {classes, chat, user} = this.props
        
        if(chat === undefined){
            return(
                <main className={classes.content}>
                    Click on Chat to view message
                </main>
            )
        }else{
            return(
                <div>
                <div className={classes.chatHeader}>
                    <p onClick={this.props.chatListVisible}>return to Chat list</p>
                    Your conversation with {chat.users.filter(_usr => _usr !== user)[0]}
                </div>
                <main id='chatview-container' className={classes.content} style={{color:'white', height:'102vh', width:'102vw', overflow:'scroll'}}>
                {
                        chat.messages.map((_msg, _index)=>{
                            return(
                                <div key={_index} className={_msg.sender === user ? classes.userSent : classes.friendSent}>
                                    {_msg.message}
                                </div>
                            )
                        })
                    } 
                   
            </main>
            </div>
            )
        }
    }


}

export default withStyles(styles)(ChatView)
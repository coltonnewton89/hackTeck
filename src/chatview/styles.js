const styles = theme => ({

    content: {
      height: 'calc(100vh - 100px)',
      overflow: 'auto',
      padding: '25px',
      boxSizing: 'border-box',
      overflowY: 'scroll',
      top: '50px',
      maxWidth: '100%'
    },
  
    userSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: 'rgb(25, 169, 226)',
      color: 'white',
      width: '300px',
      borderRadius: '10px'
    },
  
    friendSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#707BC4',
      color: 'white',
      width: '300px',
      borderRadius: '10px'
    },
  
    chatHeader: {
      backgroundColor: '#9c13f7',
      fontSize: '18px',
      textAlign: 'center',
      color: 'white',
    }
  
  });
  
  export default styles;
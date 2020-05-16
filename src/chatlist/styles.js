const styles = theme => ({
    root: {
      backgroundColor: '#9c13f7',
      height: 'calc(100% - 35px)',
      left: '0px',
      boxShadow: '0px 0px 2px black',
      color: 'white'
    },
    ListItem: {
      cursor: 'pointer'
    },
    
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    }
  });
  
  export default styles;
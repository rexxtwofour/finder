// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
// import { withStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
// import MessageSharp from '@material-ui/icons/MessageSharp';
// import SwapHorizSharp from '@material-ui/icons/SwapHorizSharp';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import Settings from '@material-ui/icons/Settings';



// const styles = {
//   root: {
//     width: 500,
//   },
// };

// class Footer extends Component {
//   state = {
//     value: 'messages',
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   render() {
//     const { classes } = this.props;
//     const { value } = this.state;

//     return (
//       <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
//         <BottomNavigationAction label="Messages" value="messages" icon={<MessageSharp />} />
//         <BottomNavigationAction label="Matches" value="matches" icon={<SupervisedUserCircle />} />
//         <BottomNavigationAction label="Finder" value="finder" icon={<SwapHorizSharp />} />
//         <BottomNavigationAction label="Map" value="map" icon={<LocationOnIcon />} />
//         <BottomNavigationAction label="Settings" value="settings" icon={<Settings />} />
//       </BottomNavigation>
//     );
//   }
// }

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withRouter(withStyles(styles)(Footer));
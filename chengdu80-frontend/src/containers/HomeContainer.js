import React, { Component } from "react";
import AuthenticationService from "../services/AuthenticationService";
import MenuAppBar from "../components/AppBar";
import ClippedDrawer from "../components/ClippedDrawer";
import withStyles from "@material-ui/core/styles/withStyles";
const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class HomeContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    if (!AuthenticationService.isLoggedIn()) {
      this.props.history.push(`/login`);
    }
    return <div>
      {/*<MenuAppBar user={AuthenticationService.getLoggedInUser()}/>*/}
      <ClippedDrawer user={AuthenticationService.getLoggedInUser() || {username: ""}}> </ClippedDrawer>
      <div>
        Home container
      </div>
    </div>;
  }
}

export default withStyles(styles)(HomeContainer);

import React, { Component } from "react";
import AuthenticationService from "../services/AuthenticationService";
import withStyles from "@material-ui/core/styles/withStyles";
import { Route, Switch } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AboutContainer from "./AboutContainer";
import PostContainer from "./PostContainer";
const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
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
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  floatLeft: {
    flexGrow: 1,
    textAlign: "left",
  },
  floatRight: {
    textAlign: "right",
  },
});

class HomeContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  handleLogout() {
    // window.location.href = "/logout"
    this.props.history.push("/logout");
  }

  render() {
    const { classes, history } = this.props;

    if (!AuthenticationService.isLoggedIn()) {
      history.push(`/login`);
    }

    let user = AuthenticationService.getLoggedInUser();

    const tabsList = [
      {
        text: "Home",
        icon: <InboxIcon />,
        onClick: () => history.push("/"),
      },
      {
        text: "About",
        icon: <MailIcon />,
        onClick: () => history.push("/about"),
      },
      {
        text: "Contact",
        icon: <MailIcon />,
        onClick: () => history.push("/contact"),
      },
      {
        text: "Post",
        icon: <MailIcon />,
        onClick: () => history.push("/posts"),
      },
    ];

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.floatLeft}>
              <Typography variant="h6" noWrap>
                Chengdu 80 Pisces
              </Typography>
            </div>
            {user != null && (
              <div>
                <Typography noWrap>@{user.username}</Typography>
              </div>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {tabsList.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}

              <Divider />

              <ListItem button key="logout-button">
                <ListItemText
                  primary="Logout"
                  onClick={() => history.push(`/logout`)}
                />
              </ListItem>
            </List>
          </div>
        </Drawer>

        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path="/" render={(props) => <div> HOME </div>} />
            <Route
              exact
              path="/home"
              render={(props) => <div> KASNCKNASKCNS </div>}
            />
            <Route
              exact
              path="/people"
              render={(props) => (
                <div>
                  {" "}
                  PEOPLEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEPEOPLEEEEE{" "}
                </div>
              )}
            />
            <Route exact path="/about" render={(props) => <AboutContainer />} />
            <Route
              exact
              path="/posts"
              render={(props) => <PostContainer {...props} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(HomeContainer);

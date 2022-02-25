import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Route} from "react-router";
import All from '../pages/All'
import Business from '../pages/Business'
import Education from '../pages/Education'
import Entertainment from '../pages/Entertainment'
import Fashion from '../pages/Fashion'
import Food from '../pages/Food'
import Games from '../pages/Games'
import Health from '../pages/Health'
import Shopping from '../pages/Shopping'
import Sports from '../pages/Sports'
import Workshops from '../pages/Workshops'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  color:'blue'
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
               indicatorColor="primary"
        textColor="primary"
        variant={"scrollable"}
         scrollButtons={"on"}
             value={value}
              onChange={this.handleChange}
              classes={{ root: classes.root, scroller: classes.scroller }}>

     
            <LinkTab label="الكل" ><Route exact path="/All" >All</Route></LinkTab>
            <LinkTab label="أعمال" ><Route  path="/Business" >Business</Route></LinkTab>
            <LinkTab label="تعليم" ><Route  path="/Education" >Education</Route></LinkTab>
            <LinkTab label="ترفيه" ><Route  path="/Entertainment" >Entertainment</Route></LinkTab>
            <LinkTab label="موضة"><Route  path="/Fashion" >Fashion</Route></LinkTab>
            <LinkTab label="طعام" ><Route exact path="/Food" >Food</Route></LinkTab>
            <LinkTab label="ألعاب" ><Route exact path="/Games">Games</Route></LinkTab>
            <LinkTab label="صحة" ><Route exact path="/Health">Health</Route></LinkTab>
            <LinkTab label="ورش مهنية" ><Route exact path="/Workshops">Workshops</Route></LinkTab>
            <LinkTab label="تسوق" ><Route exact path="/Shopping">Shopping</Route></LinkTab>
            <LinkTab label="رياضة" ><Route exact path="/Sports">Sports</Route></LinkTab>

            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><All/></TabContainer>}
          {value === 1 && <TabContainer><Business/></TabContainer>}
          {value === 2 && <TabContainer><Education/></TabContainer>}
          {value === 3 && <TabContainer><Entertainment/></TabContainer>}
          {value === 4 && <TabContainer><Fashion/></TabContainer>}
          {value === 5 && <TabContainer><Food/></TabContainer>}
          {value === 6 && <TabContainer><Games/></TabContainer>}
          {value === 7 && <TabContainer><Health/></TabContainer>}
          {value === 8 && <TabContainer><Workshops/></TabContainer>}
          {value === 9 && <TabContainer><Shopping/></TabContainer>}
          {value === 10 && <TabContainer><Sports/></TabContainer>}

        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);

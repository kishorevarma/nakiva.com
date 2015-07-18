import React from 'react';  
import { Router, Route, Link, Redirect, Navigation } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import NavigationComponent from './components/Navigation';
import AboutHandler from './components/About';
import ProfileHandler from './components/profile';
import ContactHandler from './components/Contact';

import SkillDetails from './components/profile/SkillDetails';
import OrganisationDetails from './components/profile/OrganisationDetails';



require('../css/styles.css');

const rootEl = document.getElementById('root');

let App = React.createClass({  
  mixins: [ Navigation ],

  componentDidMount: function() {
    this.transitionTo('profile');
  },

  render: function() {
    return (
      <div>
        <NavigationComponent/>
        {/* this is the importTant part */}
        {this.props.children}
      </div>
    );
  }
});

React.render((  
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="profile" component={ProfileHandler}>
        <Route path="skill/:id" component={SkillDetails}/>
        <Route path="org/:id" component={OrganisationDetails}/>
      </Route>
      <Route path="about" component={AboutHandler}/>
      <Route path="contact" component={ContactHandler}/>   
    </Route>
  </Router>
), rootEl);

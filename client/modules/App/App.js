import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import HomeContent from './components/HomeContent/HomeContent';
import Dashboard from './components/User/Dashboard/Dashboard';

import {signOutUserRequest} from '../User/UserActions'
import {getUsers} from '../User/UserReducer'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false, loggedIn: false, signUp: false, dashboardView: "dashboard" };

    this.toggleLogIn = this.toggleLogIn.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.setDashboardView = this.setDashboardView.bind(this);
  }

  componentDidMount() {
    this.setState({isMounted: true});
  }

  toggleLogIn() {
    this.setDashboardView("dashboard");
    if (this.state.loggedIn){
      this.props.dispatch(signOutUserRequest(this.props.users[0].email));
    }
    this.setState({loggedIn: !this.state.loggedIn});

  }

  toggleSignUp(){
    this.setState({signUp: !this.state.signUp});
  }

  setDashboardView(view){
    this.setState({dashboardView: view});
  }

  render() {
    var view;
    if (this.state.loggedIn)
      view = <Dashboard view={this.state.dashboardView} />;
    else
      view = <HomeContent loginHandler={this.toggleLogIn} signUp={this.state.signUp} toggleSignUp={this.toggleSignUp} />;

    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="SoundShare"
            titleTemplate="%s"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header loggedIn={this.state.loggedIn} loginHandler={this.toggleLogIn} toggleSignUp={this.toggleSignUp} switchView= {this.setDashboardView}/>

          <div className="container-fluid">
            {view}
          </div>
          
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    users: getUsers(store),
  };
}

export default connect(mapStateToProps)(App);

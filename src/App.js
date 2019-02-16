import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts_s from './components/contacts/Contacts_s';
import Header from './components/layout/Header';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContacts from './components/contacts/AddContacts';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts_s} />
                <Route exact path="/contact/add" component={AddContacts} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

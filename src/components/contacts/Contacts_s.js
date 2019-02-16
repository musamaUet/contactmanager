import React, { Component } from 'react';
import Contacts from './Contacts';
import { Consumer } from '../../Context';

class Contacts_s extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="dispaly-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contacts => (
                <Contacts key={contacts.id} contacts={contacts} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    const { contacts } = this.state;
  }
}

export default Contacts_s;

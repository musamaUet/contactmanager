import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contacts.css';
import { Consumer } from '../../Context';
import axios from 'axios';

class Contacts extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete('https://jsonplaceholder.typicode.com/users/' + id);
      const res = dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      const res = dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contacts;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ float: 'right', color: 'red', cursor: 'pointer' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={'contact/edit/' + id}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      marginRight: '1rem',
                      cursor: 'pointer',
                      color: 'black',
                      float: 'right'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email} </li>
                  <li className="list-group-item">Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contacts.propTypes = {
  Contacts: PropTypes.object.isRequired
};

export default Contacts;

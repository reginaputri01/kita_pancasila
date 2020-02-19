import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './app/routers';
import store from './app/store/configureStore';
import firebase from 'firebase';

export default class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyB2r3PzpQLmwvsQoETysYHmE1L4QitZuMM',
        authDomain: 'kitapancasila-4a7a5.firebaseapp.com',
        databaseURL: 'https://kitapancasila-4a7a5.firebaseio.com',
        projectId: 'kitapancasila-4a7a5',
        storageBucket: 'kitapancasila-4a7a5.appspot.com',
        messagingSenderId: '16847007556',
        appId: '1:16847007556:web:313a3914281bc66479f111',
        measurementId: 'G-0H1Q12ERJG',
      });
    }
  }

  render() {
    return (
      <Provider store={store()}>
        <Router />
      </Provider>
    );
  }
}
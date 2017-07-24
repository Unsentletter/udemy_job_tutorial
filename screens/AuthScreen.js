import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    // VVV Not 100% required. Good for a catch though
    this.onAuthComplete(this.props)
    // AsyncStorage.removeItem('fb_token');
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('mapScreen');
    }
  }

  render() {
    return (
      <View />
    )
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token }
}

export default connect(mapStateToProps, actions)(AuthScreen);
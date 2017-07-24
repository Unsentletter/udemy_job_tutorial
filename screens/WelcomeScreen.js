import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to job ap', color: '#03a9f4' },
  { text: 'this is the second slide', color: '#009688' },
  { text: 'Set your location and your mum will suck me off', color: '#03a9f4' }
];

class WelcomeScreen extends Component {
  //better to put this logic inside redux see tut 107
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('mapScreen');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    )
  }
}

export default WelcomeScreen;
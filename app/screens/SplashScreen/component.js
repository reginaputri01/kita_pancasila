/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('SignUp');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000)
    );
  render() {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.logoContainer}>
              <Image source={IMAGES.logo} resizeMode="contain" style={styles.logo} />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>SUPPORTED BY :</Text>
          </View>
          <View style={styles.footerContainer}>
            <Image source={IMAGES.logoTelkom} resizeMode="contain" style={styles.logoTelkom} />
          </View>
        </View>
    );
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

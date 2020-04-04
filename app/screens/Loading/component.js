/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import { PacmanIndicator } from 'react-native-indicators';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.closeActivityIndicator();

    if (data !== null) {
      this.props.navigation.navigate('LatihanSoal');
    }
  }

  closeActivityIndicator = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 4000)
    );

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden />
        <View>
          <PacmanIndicator color='#000'/>
        </View>
        <View style={styles.text}>
          <Text>Pastikan koneksi internet kalian lancar yaa..</Text>
        </View>
      </View>
    );
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

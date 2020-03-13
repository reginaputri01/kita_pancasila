/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import { PacmanIndicator } from 'react-native-indicators';

export default class Component extends React.Component {
  state = { animating: true }

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
      }, 2000)
    );

  render() {
    const animating = this.state.animating
    return (
        <View style={styles.mainContainer}>
          <View>
            <PacmanIndicator color='#000' animating = {animating}/>
          </View>
          <View style={styles.text}>
          <Text>sabar yaa, soal dan jawabannya lagi diproses:)</Text>
        </View>
      </View>
    );
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

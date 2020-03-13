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
      this.props.navigation.navigate('Ujian');
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
          <View>
            <PacmanIndicator color='#000'/>
          </View>
          <View style={styles.text}>
          <Text>yaahh, koneksi internet tidak ditemukan</Text>
          <Text>coba cek jaringanmu, dehh</Text>
        </View>
      </View>
    );
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  pressTutup = () => {
    this.props.navigation.navigate('Kuis');
  };

  pressPembahasan = () => {
    this.props.navigation.navigate('Pembahasan');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.background2} style={styles.background}>
        <SafeAreaView>
          <View style={styles.mainContainer}>
            <Text style={styles.text}>SELAMAT KUIS SELESAI !</Text>
            <Image
              source={IMAGES.piala}
              resizeMode="contain"
              style={styles.piala}
            />
            <Text style={styles.titleSkor}>Skor :</Text>

            <View style={styles.skorContainer}>
              <Text style={styles.skor}>10/10</Text>
            </View>

            <TouchableOpacity onPress={this.pressTutup}>
              <Image source={IMAGES.buttonTutup} style={styles.btnTutupKuis} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable react/sort-comp */
import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soal: null,
      jawaban: null
    };
  }

  onBack = () => {
    this.props.navigation.navigate('Home');
  };

  onLatSoal = () => {
    this.props.navigation.navigate('LatihanSoal');
  };

  onUjian = () => {
    this.props.navigation.navigate('Ujian');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.background} style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.backContainer}>
            <TouchableOpacity onPress={this.onBack}>
              <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.titlenya}>KUIS</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.kuisContainer}>
            <TouchableOpacity
              onPress={this.onLatSoal}
            >
              <Image
                source={IMAGES.buttonLatSoal}
                style={styles.kuis}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.kuisContainer}>
            <TouchableOpacity
              onPress={this.onUjian}
            >
              <Image
                source={IMAGES.buttonUjian}
                style={styles.kuis}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

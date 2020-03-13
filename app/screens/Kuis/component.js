/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable react/sort-comp */
import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native';
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
    Alert.alert(
      'Ayo Mulai!',
      'Latihan soal, 10 soal.',
      [
        {
          text: 'Kembali'
        },
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('LatihanSoal')
        }
      ]
    )
  };

  onUjian = () => {
    Alert.alert(
      'Ayo Mulai!',
      'Ujian, 10 soal, disertai pembahasan.',
      [
        {
          text: 'Kembali'
        },
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('Ujian')
        }
      ]
    )
  };

  render() {
    return (
      <ImageBackground source={IMAGES.background} style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.backContainer}>
              <TouchableOpacity onPress={this.onBack}>
                <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
              </TouchableOpacity>
            </View>
            <View style={styles.headerTitle}>
              <Text style={styles.title}>KUIS</Text>
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
        </ScrollView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

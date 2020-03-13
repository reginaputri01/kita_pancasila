/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import firebase from 'firebase';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
    };
  }

  pressTutup = () => {
    this.props.navigation.navigate('Kuis');
  };

  getPoints = async () => {
    const username = await AsyncStorage.getItem('username');

    firebase
      .database()
      .ref(`users/${username}/points`)
      .on('value', snap => this.setState({points: snap.val()}));
  };

  componentDidMount() {
    this.getPoints();
  };

  pressPembahasan() {
    this.props.navigation.navigate('Pembahasan');
  }

  render() {
    return (
      <ImageBackground source={IMAGES.background2} style={styles.background}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.mainContainer}>
              <Text style={styles.text}>LATIHAN SOAL SELESAI !</Text>
              <Image
                source={IMAGES.piala}
                resizeMode="contain"
                style={styles.piala}
              />
              <Text style={styles.titleSkor}>Skor :</Text>

              <View style={styles.skorContainer}>
                <Text style={styles.skor}>{this.state.points * 10}/100</Text>
              </View>

              <TouchableOpacity onPress={() => this.pressPembahasan()}>
                <View style={styles.pembahasan}>
                  <Text style={styles.textPembahasan}>
                    Lihat Pembahasan
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.pressTutup}>
                <Image
                  source={IMAGES.buttonTutup}
                  style={styles.btnTutupKuis}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};

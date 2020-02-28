/* eslint-disable import/first */
import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  onPressSetting = () => {
    this.props.navigation.navigate('Setelan');
  };
  onPressKuis = () => {
    this.props.navigation.navigate('Kuis');
  };

  onPressMateri = () => {
    this.props.navigation.navigate('Materi');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.background} style={styles.background}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <TouchableOpacity style={styles.settingContainer} onPress={this.onPressSetting}>
            <Image source={IMAGES.setting} resizeMode="contain" style={styles.setting} />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Image source={IMAGES.logo} resizeMode="contain" style={styles.logo} />
            <TouchableOpacity onPress={this.onPressKuis}>
              <Image source={IMAGES.buttonKuis} style={styles.btnKuis} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressMateri}>
              <Image source={IMAGES.buttonMateri} style={styles.btnMateri} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

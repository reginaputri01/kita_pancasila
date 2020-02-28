import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';

export default class Component extends React.Component {
  onBack = () => {
    this.props.navigation.navigate('Materi');
  };
  onPressBab1 = () => {
    this.props.navigation.navigate('Bab1');
  };
  onPressBab2 = () => {
    this.props.navigation.navigate('Bab2');
  };
  onPressBab3 = () => {
    this.props.navigation.navigate('Bab3');
  };
  onPressBab4 = () => {
    this.props.navigation.navigate('Bab4');
  };
  onPressBab5 = () => {
    this.props.navigation.navigate('Bab5');
  };
  onPressBab6 = () => {
    this.props.navigation.navigate('Bab6');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.background} style={styles.background}>
        <View style={styles.container}>
            <View style={styles.view_header}>
              <TouchableOpacity style={styles.touch} onPress={this.onBack}>
                <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
              </TouchableOpacity>
            </View>
            <View style={styles.view_title}>
              <Text style={styles.title}>ARTIKEL</Text>
            </View>
          </View>

        <ScrollView>
          <View style={styles.content}>
            <TouchableOpacity onPress={this.onPressBab1}>
              <Image source={IMAGES.bab1} style={styles.btnBab} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressBab2}>
              <Image source={IMAGES.bab2} style={styles.btnBab} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressBab3}>
              <Image source={IMAGES.bab3} style={styles.btnBab} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressBab4}>
              <Image source={IMAGES.bab4} style={styles.btnBab} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressBab5}>
              <Image source={IMAGES.bab5} style={styles.btnBab} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressBab6}>
              <Image source={IMAGES.bab6} style={styles.btnBab} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

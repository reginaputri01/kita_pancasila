import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView, StatusBar } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  onBack = () => {
    this.props.navigation.navigate('Home');
  };
  onArtikel = () => {
    this.props.navigation.navigate('ListArtikel');
  };
  onVideo = () => {
    this.props.navigation.navigate('Video');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.background} style={styles.mainContainer}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.backContainer}>
              <TouchableOpacity onPress={this.onBack}>
                <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
              </TouchableOpacity>
            </View>
            <View style={styles.headerTitle}>
              <Text style={styles.title}>MATERI</Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.materiContainer}>
              <TouchableOpacity
                onPress={this.onArtikel}
              >
                <Image
                  source={IMAGES.buttonArtikel}
                  style={styles.materi}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.materiContainer}>
              <TouchableOpacity
                onPress={this.onVideo}
              >
                <Image
                  source={IMAGES.buttonVideo}
                  style={styles.materi}
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

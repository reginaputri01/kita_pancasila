import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
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
      <ImageBackground source={IMAGES.background} style={styles.background}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.view_header}>
              <TouchableOpacity style={styles.touch} onPress={this.onBack}>
                <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
              </TouchableOpacity>
            </View>
            <View style={styles.view_title}>
              <Text style={styles.title}>MATERI</Text>
            </View>
          </View>

          <View style={styles.view_body}>
            <View style={styles.view_artikel}>
              <TouchableOpacity style={styles.touch_artikel} onPress={this.onArtikel}>
                <Image source={IMAGES.buttonArtikel} style={styles.img} resizeMode="contain" />
              </TouchableOpacity>
            </View>
            <View style={styles.view_video}>
              <TouchableOpacity style={styles.touch_video} onPress={this.onVideo}>
                <Image source={IMAGES.buttonVideo} style={styles.img} resizeMode="contain" />
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

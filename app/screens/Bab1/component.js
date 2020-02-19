import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';

export default class Component extends React.Component {
  onPressBack = () => {
    this.props.navigation.navigate('ListArtikel');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.backgroundv2} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.view_header}>
            <TouchableOpacity style={styles.touch} onPress={this.onPressBack}>
              <Image
                source={IMAGES.buttonBack}
                resizeMode="contain"
                style={styles.buttonBack}
                onPress={this.onPressBack}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.view_title}>
            <Text style={styles.title}>{I18n.t('bab1')}</Text>
          </View>
        </View>
        <View style={styles.view_content}>
          <Text style={styles.text_title}>{I18n.t('bab1title')}</Text>
          <Text style={styles.text}>{I18n.t('bab1Content')}</Text>
        </View>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView, StatusBar } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';

export default class Component extends React.Component {
  onBack = () => {
    this.props.navigation.navigate('ListArtikel');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.backgroundv2} style={styles.background}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.backContainer}>
              <TouchableOpacity onPress={this.onBack}>
                <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
              </TouchableOpacity>
            </View>
            <View style={styles.headerTitle}>
              <Text style={styles.title}>BAB 1</Text>
            </View>
          </View>

          <View style={styles.view_content}>
            <Text style={styles.text_title}>{I18n.t('bab1title')}</Text>
            <Text style={styles.text}>{I18n.t('bab1Content')}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

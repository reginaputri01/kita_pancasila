import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ImageBackground, StatusBar } from 'react-native';
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
        <View style={styles.headerContainer}>
          <View style={styles.backContainer}>
            <TouchableOpacity onPress={this.onBack}>
              <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>BAB 3</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.view_content}>
            <Text style={styles.text_title}>{I18n.t('bab3title')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab3Content1')}</Text>
            <Text style={styles.text_content}>{I18n.t('bab3Content1_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab3Content2')}</Text>
            <Text style={styles.text_content}>{I18n.t('bab3Content2_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab3Content3')}</Text>
            <Text style={styles.text_content}>{I18n.t('bab3Content3_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab3Content4')}</Text>
            <Text style={styles.text_content}>{I18n.t('bab3Content4_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab3Content5')}</Text>
            <Text style={styles.text_content}>{I18n.t('bab3Content5_1')}</Text>
            <Text style={styles.text_end}>{I18n.t('bab3Content5_2')}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

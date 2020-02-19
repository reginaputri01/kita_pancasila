import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
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
            <Text style={styles.title}>{I18n.t('bab2')}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.view_content}>
            <Text style={styles.text_title}>{I18n.t('bab2title')}</Text>
            <Text style={styles.text}>{I18n.t('bab2Content1')}</Text>
            <Text style={styles.text}>{I18n.t('bab2Content2')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab2Content3')}</Text>
            <Text style={styles.text_content}>{I18n.t('bab2Content3_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab2Content4')}</Text>
            <Text style={styles.text_content}>{I18n.t('bab2Content4_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab2Content5')}</Text>
            <Text style={styles.text_content}>{I18n.t('bab2Content5_1')}</Text>
            <Text style={styles.text}>{I18n.t('bab2Content6')}</Text>
            <Text style={styles.text}>{I18n.t('bab2Content7')}</Text>
            <Text style={styles.text}>{I18n.t('bab2Content8')}</Text>
            <Text style={styles.text}>{I18n.t('bab2Content9')}</Text>
            <Text style={styles.text}>{I18n.t('bab2Content10')}</Text>
            <Text style={styles.text}>{I18n.t('bab2Content11')}</Text>
            <Text style={styles.text_end}>{I18n.t('bab2Content12')}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import VideoPlayer from 'react-native-video-player';
import I18n from '../../i18n';

export default class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined
    };
  }

  onBack = () => {
    this.props.navigation.navigate('Materi');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.background} style={styles.background}>
        <StatusBar hidden />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.headerContainer}>
              <View style={styles.backContainer}>
                <TouchableOpacity onPress={this.onBack}>
                  <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
                </TouchableOpacity>
              </View>
              <View style={styles.headerTitle}>
                <Text style={styles.title}>VIDEO</Text>
              </View>
            </View>

            <View style={styles.view_video}>
              <Text style={styles.text_title}>{I18n.t('vid1')}</Text>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{
                  uri: 'https://raw.githack.com/yeyesica/assets/master/ft_nilai_pancasila.png'
                }}
                video={{ uri: 'https://raw.githack.com/yeyesica/assets/master/nilai_pancasila.mp4' }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration}
                ref={r => (this.player = r)}
              />
              <Text style={styles.text_title_distance}>{I18n.t('vid2')}</Text>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{
                  uri: 'https://raw.githack.com/yeyesica/assets/master/ft_mengenal_pancasila.png'
                }}
                video={{ uri: 'https://raw.githack.com/yeyesica/assets/master/mengenal_pancasila.mp4' }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration}
                ref={r => (this.player = r)}
              />
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

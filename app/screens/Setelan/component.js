/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
import React from 'react';
import {View, Image, Text, TouchableOpacity, AsyncStorage, SafeAreaView, Alert, ScrollView, StatusBar} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      name: null,
    };
  }

  onBack = () => {
    this.props.navigation.navigate('Home');
  };
  
  logout = () => {
    Alert.alert(
      'Peringatan',
      'Ingin tetap keluar?',
      [{
        text: 'Kembali',
      },
      {
        text: 'Keluar',
        onPress: () => {
          firebase
          .auth()
          .signOut()
          .then( async () => {
            await AsyncStorage.removeItem('email');
            this.props.navigation.navigate('SignIn');
          })
          .catch((error) => {
            Alert.alert(
              error.code,
              error.message
            )
          })
        }
      }]
    );
  };

  pressAbout = () => {
    this.props.navigation.navigate('TentangKami');
  };

  async componentDidMount() {
    const getEmail = await AsyncStorage.getItem('email');
    const getUsername = await AsyncStorage.getItem('username');
    this.setState({email: getEmail});
    this.setState({username: getUsername});
    firebase
      .app()
      .database()
      .ref('users/' + this.state.username + '/nama_lengkap')
      .on(
        'value',
        snap => {
          this.setState({name: snap.val()});
        },
        errorObject => {
          alert(errorObject.code);
        },
      );
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.backContainer}
                onPress={this.onBack}>
                <Image
                  source={IMAGES.buttonBack}
                  resizeMode="contain"
                  style={styles.buttonBack}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleHeader}>SETELAN</Text>
            </View>
          </View>

          <View style={styles.profileContainer}>
            <View style={styles.profile}>
              <Image
                source={IMAGES.avatar}
                style={styles.avatar}
                resizeMode="contain"
              />
              <Text style={styles.profileName}>{this.state.name}</Text>
              <Text style={styles.profileEmail}>{this.state.email}</Text>
              <Image
                source={IMAGES.garis}
                style={styles.garis}
                resizeMode="contain"
              />
              <TouchableOpacity
                style={styles.aboutContainer}
                onPress={this.pressAbout}>
                <Image
                  source={IMAGES.buttonTentang}
                  resizeMode="contain"
                  style={styles.buttonAbout}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.logout}>
                <Image source={IMAGES.buttonLogout} resizeMode="contain" style={styles.buttonLogout} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};

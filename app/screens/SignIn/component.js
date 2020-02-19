/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import {
  Text,
  View,
  Image,
  ToastAndroid,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
  AsyncStorage,
  SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Keychain from 'react-native-keychain';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import IMAGES from '../../configs/images';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      showPass: true,
      email: '',
      password: '',
      disableButton: true,
      isHidden: true,
      isLoading: false
    };
  }
  
  handleRegister = async () => {
    this.props.navigation.navigate('SignUp');
  };
  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then( async () => {
        const mail = this.state.email.split('@')
        await AsyncStorage.setItem('username', mail[0])
        await AsyncStorage.setItem('email', this.state.email);
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert(
          error.code,
          error.message
        )
      })
    } catch(error) {
      console.log(error)
    }
  };

  handleUsername = async text => {
    await this.setState({ email: text });
    this.checkField();
  };
  
  handlePassword = async text => {
    await this.setState({ password: text });
    this.checkField();
  };

  checkField() {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      this.setState({ disableButton: true });
    } else {
      this.setState({ disableButton: false });
    }
  }

  async componentDidMount() {
    const user = await AsyncStorage.getItem('email');
    if (user) {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <ImageBackground source={IMAGES.background} style={styles.mainContainer}>
        <SafeAreaView>
          <ScrollView>
            <MainScreen style={styles.container}>
              <View style={styles.logoContainer}>
                <Image source={IMAGES.logo} resizeMode="contain" style={styles.logo} />
              </View>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.textEmail}
                placeholder="Email"
                editable
                isRequired
                value={email}
                onChangeText={this.handleUsername}
                autoCapitalize='none'
              />
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.textSandi}
                placeholder="Kata sandi"
                editable
                isRequired
                secureTextEntry
                value={password}
                onChangeText={this.handlePassword}
              />
              <TouchableOpacity onPress={this.handleLogin}>
                <Image source={IMAGES.buttonMasuk} style={styles.btnMasuk} resizeMode="contain" />
              </TouchableOpacity>
              <Text style={styles.noHaveAkun}>
                Belum punya akun?
                <Text style={styles.daftar} onPress={this.handleRegister}>
                  {' '}
                  Daftar sekarang
                </Text>
              </Text>
            </MainScreen>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

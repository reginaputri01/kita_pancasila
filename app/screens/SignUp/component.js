/* eslint-disable react/no-unused-state */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
  SafeAreaView,
  AsyncStorage,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      showPass: true,
      email: '',
      password: '',
      repeatPassword: '',
      namaLengkap: '',
      disableButton: true,
      isHidden: true,
      isLoading: false,
      loggedIn: null,
    };
  }

  toSignIn = () => {
    this.props.navigation.navigate('SignIn');
  };

  signUp = () => {
    const db = firebase.app().database();
    const email = this.state.email.split('@');
    try {
      if (this.state.password == this.state.repeatPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            db.ref()
              .child(`users/${email[0]}`)
              .set({
                nama_lengkap: this.state.namaLengkap,
              });
            Alert.alert('Berhasil', `Ayo masuk!`);
            this.props.navigation.navigate('SignIn');
          })
          .catch(error => {
            error.code = 'Gagal';

            if (this.state.namaLengkap.length == 0) {
              error.message = 'Form harus diisi.';
            } else if (
              error.message == 'The email address is badly formatted.'
            ) {
              error.message = 'Email tidak valid.';
            } else if (this.state.password.length < 6) {
              error.message = 'Kata sandi harus lebih dari 6 karakter.';
            }

            Alert.alert(error.code, error.message, {
              text: 'Tutup',
            });
          });
      } else {
        Alert.alert('Gagal', 'Kata sandi tidak sesuai.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    const user = await AsyncStorage.getItem('email');
    if (user) {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    const {email, password, namaLengkap, repeatPassword} = this.state;
    return (
      <ImageBackground source={IMAGES.background} style={styles.mainContainer}>
        <StatusBar hidden />
        <SafeAreaView>
          <ScrollView>
            <MainScreen style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  source={IMAGES.logo2}
                  resizeMode="contain"
                  style={styles.logo}
                />
              </View>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Nama Lengkap"
                  style={styles.textInput}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  isRequired
                  editable
                  value={namaLengkap}
                  onChangeText={value => this.setState({namaLengkap: value})}
                />
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  placeholder="Email"
                  isRequired
                  editable
                  autoCapitalize="none"
                  value={email}
                  onChangeText={value => this.setState({email: value})}
                />
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  placeholder="Kata sandi"
                  isRequired
                  editable
                  secureTextEntry
                  value={password}
                  onChangeText={value => this.setState({password: value})}
                />
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.textInput}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  placeholder="Konfirmasi kata sandi"
                  isRequired
                  editable
                  secureTextEntry
                  value={repeatPassword}
                  onChangeText={value => this.setState({repeatPassword: value})}
                />
              <TouchableOpacity onPress={this.signUp}>
                <Image
                  source={IMAGES.buttonDaftar}
                  style={styles.btnMasuk}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.punyaAkun}>
                Sudah punya akun?
                <Text style={styles.masuk} onPress={this.toSignIn}>
                  {' '}
                  Masuk
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
  navigation: PropTypes.object.isRequired,
};

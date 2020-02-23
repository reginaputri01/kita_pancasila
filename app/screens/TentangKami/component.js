/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  onBack = () => {
    this.props.navigation.navigate('Setelan');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.headerContainer}>
              <View style={styles.backContainer}>
                <TouchableOpacity onPress={this.onBack}>
                  <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
                </TouchableOpacity>
              </View>
              <View style={styles.headerTitle}>
                <Text style={styles.title}>TENTANG KAMI</Text>
              </View>
            </View>

            <View style={styles.deskripsiContainer}>
              <View style={styles.logoContainer}>
                <Image source={IMAGES.logoDesc} resizeMode="contain" style={styles.logo} />
              </View>
              <View style={styles.textDeskripsi}>
                <Text style={styles.desc}>Kita Pancasila adalah aplikasi berbasis android yang menyajikan materi pembelajaran serta latihan soal dalam lingkup Pancasila</Text>
              </View>
            </View>

            <View>
              <Text style={styles.creatorTitle}>CREATOR</Text>
            </View>

            <View style={styles.garisContainer}>
              <Image source={IMAGES.garis} style={styles.garis} resizeMode="contain" />
            </View>

            <View style={styles.creatorContainer}>
              <View style={styles.fotoContainer}>
                <Image source={IMAGES.creator1} resizeMode="contain" style={styles.foto} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nama}>Regina Putri Arinda</Text>
                <Text style={styles.tugas}>Android Developer</Text>
                <Text style={styles.email}>Email : reginaputria2003@gmail.com</Text>
              </View>
            </View>

            <View style={styles.creatorContainer}>
              <View style={styles.fotoContainer}>
                <Image source={IMAGES.creator2} resizeMode="contain" style={styles.foto} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nama}>Yesica Adelia Ramadani</Text>
                <Text style={styles.tugas}>Android Developer</Text>
                <Text style={styles.email}>Email : yesica.adelia@gmail.com</Text>
              </View>
            </View>

            <View style={styles.creatorContainer}>
              <View style={styles.fotoContainer}>
                <Image source={IMAGES.creator3} resizeMode="contain" style={styles.foto} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nama}>Rizal Gradianto</Text>
                <Text style={styles.tugas}>UI / UX Designer</Text>
                <Text style={styles.email}>Email : rigratujuhsatu@gmail.com</Text>
              </View>
            </View>

            <View style={styles.creatorContainer}>
              <View style={styles.fotoContainer}>
                <Image source={IMAGES.creator4} resizeMode="contain" style={styles.foto} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nama}>Salmaa Nur Faadhilah</Text>
                <Text style={styles.tugas}>Content Creator</Text>
                <Text style={styles.email}>Email : salmaafaadhilah123@gmail.com</Text>
              </View>
            </View>

            <View style={styles.creatorContainer}>
              <View style={styles.fotoContainer}>
                <Image source={IMAGES.creator5} resizeMode="contain" style={styles.foto} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nama}>Viona Resti Ananda</Text>
                <Text style={styles.tugas}>Content Creator</Text>
                <Text style={styles.email}>Email : vrestiananda@gmail.com</Text>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={styles.textFooter}>SUPPORTED BY :</Text>
            </View>
            <View style={styles.logoFooter}>
              <Image source={IMAGES.logoTelkom} resizeMode="contain" style={styles.logoTelkom} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

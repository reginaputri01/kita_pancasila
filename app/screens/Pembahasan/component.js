/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import IMAGES from '../../configs/images';
import MainScreen from '../../components/layouts/MainScreen';

export default class Component extends React.Component {
  onBack = () => {
    this.props.navigation.navigate('FinishLatihanSoal');
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <MainScreen style={styles.mainContainer}>
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
                <Text style={styles.titleHeader}>PEMBAHASAN</Text>
              </View>
            </View>

            {/* nomor1 */}
            <View> 
              <View style={styles.contentContainer}>
                <View style={styles.viewNoSoal}>
                  <Text style={styles.noSoal}>1</Text>
                </View>
                <View style={styles.viewPoin}>
                  <Text style={styles.poin}>Poin: 1/1</Text>
                </View>
              </View>

              <View style={styles.viewSoal}>
                <Text style={styles.soal}>
                  Kata “Pancasila” berasal dari bahasa Sansekerta, yaitu kata “Panca” yang artinya … , dan “Sila”
                  yang artinya ...
                </Text>
              </View>

              <View style={styles.viewJawaban}>
                <Text style={styles.jawaban}>Lambang , dasar</Text>
              </View>
              <View style={styles.viewJawaban}>
                <Text style={styles.jawaban}>Lambang , dasar</Text>
              </View>
              <View style={styles.viewJawaban}>
                <Text style={styles.jawaban}>Lambang , dasar</Text>
              </View>
              <View style={styles.viewJawabanBener}>
                <Text style={styles.konfirmasiJawaban}>Lambang , dasar</Text>
              </View>

              <Text style={styles.titlePembahasan}>Pembahasan: </Text>
              <View style={styles.viewPembahasan}>
                <Text style={styles.pembahasan}>Kata atau istilah Pancasila berasal dari bahasa Sanskerta yaitu Panca yang berarti Lima dan Sila yang berarti Dasar atau Asas
</Text>
              </View>

              <Image
                source={IMAGES.garis}
                style={styles.garis}
                resizeMode="contain"
              />
            </View>

            {/* nomor2 */}
            <View> 
              <View style={styles.contentContainer}>
                <View style={styles.viewNoSoal}>
                  <Text style={styles.noSoal}>2</Text>
                </View>
                <View style={styles.viewPoin}>
                  <Text style={styles.poin}>Poin: 0/1</Text>
                </View>
              </View>

              <View style={styles.viewSoal}>
                <Text style={styles.soal}>
                  Kata “Pancasila” berasal dari bahasa Sansekerta, yaitu kata “Panca” yang artinya … , dan “Sila”
                  yang artinya ...
                </Text>
              </View>

              <View style={styles.viewJawabanSalah}>
                <Text style={styles.konfirmasiJawaban}>Lambang , dasar</Text>
              </View>
              <View style={styles.viewJawaban}>
                <Text style={styles.jawaban}>Lambang , dasar</Text>
              </View>
              <View style={styles.viewJawaban}>
                <Text style={styles.jawaban}>Lambang , dasar</Text>
              </View>
              <View style={styles.viewJawabanBener}>
                <Text style={styles.konfirmasiJawaban}>Lambang , dasar</Text>
              </View>

              <Text style={styles.titlePembahasan}>Pembahasan: </Text>
              <View style={styles.viewPembahasan}>
                <Text style={styles.pembahasan}>Kata atau istilah Pancasila berasal dari bahasa Sanskerta yaitu Panca yang berarti Lima dan Sila yang berarti Dasar atau Asas
</Text>
              </View>

              <Image
                source={IMAGES.garis}
                style={styles.garis}
                resizeMode="contain"
              />
            </View>
          </MainScreen>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

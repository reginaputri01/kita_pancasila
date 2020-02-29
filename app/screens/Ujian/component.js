/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
    };
  }
  
  pressNext = () => {
    let indexes = 0;
    this.setState({index: indexes+1});
    console.log(this.state.index);
  };

  pressExit = () => {
    this.props.navigation.navigate('Kuis');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.headerContainer}>
              <View style={styles.viewNoSoal}>
                <Text style={styles.noSoal}>1/10</Text>
              </View>
              <View style={styles.exitKuis}>
                <TouchableOpacity onPress={this.pressExit}>
                  <Text style={styles.textExit}>KELUAR</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.soalContainer}>
              <Text style={styles.textSoal}>
                Kata “Pancasila” berasal dari bahasa Sansekerta, yaitu kata “Panca” yang artinya … , dan “Sila”
                yang artinya ...
              </Text>
            </View>

            <TouchableOpacity>
              <View style={styles.jawabanContainerHover}>
                <Text style={styles.textJawaban}>Lambang , dasar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.jawabanContainer}>
                <Text style={styles.textJawaban}>Lambang , dasar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.jawabanContainer}>
                <Text style={styles.textJawaban}>Lambang , dasar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.jawabanContainer}>
                <Text style={styles.textJawaban}>Lambang , dasar</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.nextPrevious}>
              <View>
                 <TouchableOpacity onPress={this.pressPrevious}>
                    <Image source={IMAGES.previous} resizeMode="contain" style={styles.btnNext} />
                  </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this.pressNext}>
                  <Image source={IMAGES.next} resizeMode="contain" style={styles.btnNext} />
                </TouchableOpacity>
              </View>
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

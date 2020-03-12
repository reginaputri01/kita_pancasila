/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './styles';
import IMAGES from '../../configs/images';

const a = [];

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      question: '',
      answers: [],
      indexAnswer: this.shuffle([0, 1, 2, 3]),
      indexUjian: this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      answerSaved: a,
    };
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getQuestion = () => {
    firebase
      .database()
      .ref(
        `ujian_items/ujian${this.state.indexUjian[this.state.index]}/question`,
      )
      .on('value', snap => this.setState({question: snap.val()}));
  };

  getAnswers = () => {
    const array = this.state.answers.splice();

    for (
      let indexAns = 0;
      indexAns < this.state.indexAnswer.length;
      indexAns++
    ) {
      firebase
        .database()
        .ref(
          `ujian_items/ujian${
            this.state.indexUjian[this.state.index]
          }/answers/answer${
            this.state.indexAnswer[this.state.indexAnswer[indexAns]]
          }/text`,
        )
        .on('value', snap => array.push(snap.val()));
    }

    this.setState({answers: array});
  };

  pressNext = () => {
    console.log(a);
  };

  pressPrevious = () => {};

  pressExit = () => {
    this.props.navigation.navigate('Kuis');
  };

  pressFinish = () => {
    this.props.navigation.navigate('FinishLatihanSoal');
  };

  navigate() {
    const index = this.state.index + 1;
    if (index == 1) {
      return (
        <View>
          <TouchableOpacity onPress={this.pressNext}>
            <Image
              source={IMAGES.next}
              resizeMode="contain"
              style={styles.btnNext}
            />
          </TouchableOpacity>
        </View>
      );
    } else if (index < this.state.indexUjian.length) {
      return (
        <View style={styles.nextPrevious}>
          <View>
            <TouchableOpacity onPress={this.pressPrevious}>
              <Image
                source={IMAGES.previous}
                resizeMode="contain"
                style={styles.btnPrevious}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.pressNext}>
              <Image
                source={IMAGES.next}
                resizeMode="contain"
                style={styles.btnNext}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (index == this.state.indexUjian.length) {
      return (
        <View style={styles.nextPrevious}>
          <View>
            <TouchableOpacity onPress={this.pressPrevious}>
              <Image
                source={IMAGES.previous}
                resizeMode="contain"
                style={styles.btnPrevious2}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.pressFinish}>
              <Image
                source={IMAGES.buttonSelesai}
                resizeMode="contain"
                style={styles.btnSelesai}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  componentDidMount() {
    this.getQuestion();
    this.getAnswers();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.headerContainer}>
              <View style={styles.viewNoSoal}>
                <Text style={styles.noSoal}>
                  {this.state.index + 1}/{this.state.indexUjian.length}
                </Text>
              </View>
              <View style={styles.exitKuis}>
                <TouchableOpacity onPress={this.pressExit}>
                  <Text style={styles.textExit}>KELUAR</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.soalContainer}>
              <Text style={styles.textSoal}>{this.state.question}</Text>
            </View>

            {
              this.state.answers.map(data => (
                <View>
                  <TouchableOpacity
                    onPress={
                      () => a.push(data)
                    }
                  >
                    <View
                      style={
                        this.state.answerSaved[this.state.index] != data
                          ? styles.jawabanContainer
                          : styles.jawabanPressedContainer
                      }>
                      <Text
                        style={
                          this.state.answerSaved[this.state.index] != data
                            ? styles.textJawaban
                            : styles.textJawabanPressed
                        }>
                        {data}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            }

            <View style={styles.nextPrevious}>{this.navigate()}</View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};

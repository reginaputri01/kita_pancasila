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
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './styles';
import IMAGES from '../../configs/images';

const a = [];
const b = [];

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      question: '',
      answers: [],
      indexAnswer: this.shuffle([0, 1, 2, 3]),
      indexLatihan: this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      answerSaved: a,
      onIndexAnswer: '',
      correct: [],
      points: 0,
      urutanQuizSaved: b
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

  getData = () => {
    firebase
      .database()
      .ref(
        `latihan_soal_items/latihan_soal${
          this.state.indexLatihan[this.state.index]
        }/question`,
      )
      .on('value', snap => this.setState({question: snap.val()}));

    const array = this.state.answers.splice();

    for (
      let indexAns = 0;
      indexAns < this.state.indexAnswer.length;
      indexAns++
    ) {
      firebase
        .database()
        .ref(
          `latihan_soal_items/latihan_soal${
            this.state.indexLatihan[this.state.index]
          }/answers/answer${
            this.state.indexAnswer[this.state.indexAnswer[indexAns]]
          }/text`,
        )
        .on('value', snap => array.push(snap.val()));
    }

    this.setState({answers: array});

    const correct = this.state.correct.splice();

    for (let indexes = 0; indexes < this.state.indexLatihan.length; indexes++) {
      firebase
        .database()
        .ref(
          `latihan_soal_items/latihan_soal${this.state.indexLatihan[indexes]}/correct`,
        )
        .on('value', snap => (correct[indexes] = snap.val()));
    }

    this.setState({correct: correct});
  };

  checkAnswer = () => {
    let dapet = 0;

    for (
      let checkIndex = 0;
      checkIndex < this.state.indexLatihan.length;
      checkIndex++
    ) {
      this.state.correct[checkIndex] == this.state.answerSaved[checkIndex]
        ? dapet++
        : false;
    }

    this.setState({points: dapet});
  };

  pressNext = () => {
    this.setState({index: this.state.index + 1}, () => {
      this.getData();
      this.setState({onIndexAnswer: a[this.state.index]});
    });
  };

  pressPrevious = () => {
    this.setState({index: this.state.index - 1}, () => {
      this.getData();
      this.setState({onIndexAnswer: a[this.state.index]});
    });
  };

  pressExit = () => {
    Alert.alert(
      'Peringatan',
      'Hasil latihan soal anda tidak akan disimpan, tetap ingin keluar?',
      [
        {
          text: 'Kembali',
        },
        {
          text: 'Keluar',
          onPress: () => this.props.navigation.navigate('Kuis')
        },
      ],
    );
  };

  pressFinish = async () => {
    this.checkAnswer();

    const username = await AsyncStorage.getItem('username');

    firebase
      .database()
      .ref()
      .child(`users/${username}`)
      .set({
        points: this.state.points,
        answers: this.state.answerSaved,
        urutan: this.state.urutanQuizSaved
      });

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
              style={styles.btnNext2}
            />
          </TouchableOpacity>
        </View>
      );
    } else if (index < this.state.indexLatihan.length) {
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
    } else if (index == this.state.indexLatihan.length) {
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

  answerPressed = data => {
    a[this.state.index] = data;
    this.setState({onIndexAnswer: a[this.state.index]});
    b[this.state.index] = `latihan_soal${this.state.indexLatihan[this.state.index]}`;
  };

  componentDidMount() {
    this.getData();
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.headerContainer}>
              <View style={styles.viewNoSoal}>
                <Text style={styles.noSoal}>
                  {this.state.index + 1}/{this.state.indexLatihan.length}
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

            {this.state.answers.map(data => (
              <View>
                <TouchableOpacity onPress={() => this.answerPressed(data)}>
                  <View
                    style={
                      this.state.onIndexAnswer != data
                        ? styles.jawabanContainer
                        : styles.jawabanPressedContainer
                    }>
                    <Text
                      style={
                        this.state.onIndexAnswer != data
                          ? styles.textJawaban
                          : styles.textJawabanPressed
                      }>
                      {data}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}

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

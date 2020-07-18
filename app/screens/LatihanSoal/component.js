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
  Dimensions,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './styles';
import IMAGES from '../../configs/images';

let arr = [
  {
    text: '',
    correct: false,
  },
];

let forAns = [];

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      latihanItems: [
        {
          question: '',
          answers: [
            {
              text: '',
              correct: false,
            },
          ],
        },
      ],
      indexAnswer: this.shuffle([0, 1, 2, 3]),
      indexLatihan: this.shuffle([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
      ]),
      onIndexAnswer: '',
      points: 0,
      savedAnswer: arr,
      onStateAns: ''
    };
  }

  shuffle = (array) => {
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
  };

  pressNext = () => {
    const {index} = this.state;
    this.setState({index: index + 1}, () => {
      this.setState({onStateAns: forAns[index+1]})
    });
  };

  pressPrevious = () => {
    const {index} = this.state;
    this.setState({index: index - 1}, () => {
      this.setState({onStateAns: forAns[index-1]})
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
          onPress: () => this.props.navigation.navigate('Kuis'),
        },
      ],
    );
  };

  pressFinish = async () => {
    const {savedAnswer} = this.state;
    let points = 0

    savedAnswer.map(data => {
      data.correct
        ? points++
        : false
    });

    const username = await AsyncStorage.getItem('username');

    firebase.database().ref().child(`users/${username}`).set({
      urutan: this.state.indexLatihan,
      points: points,
      saved_answer: arr
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
    } else if (index <= 9) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={this.pressPrevious}>
            <Image
              source={IMAGES.previous}
              resizeMode="contain"
              style={styles.btnPrevious}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pressNext}>
            <Image
              source={IMAGES.next}
              resizeMode="contain"
              style={styles.btnNext}
            />
          </TouchableOpacity>
        </View>
      );
    } else if (index == 10) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={this.pressPrevious}>
            <Image
              source={IMAGES.previous}
              resizeMode="contain"
              style={styles.btnPrevious2}
            />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
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
    const {index} = this.state;

    if (arr.length == index) {
      if (index == 0) {
        arr[index] = data;
      } else if (arr[index] != null) {
        arr[index] = data;
      } else {
        arr.push(data);
      }
    } else {
      arr.splice(index, 1, data);
    }

    this.setState({onStateAns: data.text});
    forAns[index] = data.text;
  };

  async componentDidMount() {
    const {indexLatihan, latihanItems, indexAnswer, index} = this.state;
    const arrLatihanItems = latihanItems.splice();
    const username = await AsyncStorage.getItem('username');

    firebase.database().ref().child(`users/${username}`).set({
      urutan: null,
      points: null,
      saved_answer: null
    });

    for (let indexLat = 0; indexLat < 10; indexLat++) {
      let data = {
        answers: [],
      };

      firebase
        .database()
        .ref(`latihan_items/latihan${indexLatihan[indexLat]}/question`)
        .on('value', (snap) => {
          data.question = snap.val();
        });

      firebase
        .database()
        .ref(`latihan_items/latihan${indexLatihan[indexLat]}/pembahasan`)
        .on('value', (snap) => {
          data.pembahasan = snap.val();
        });

      for (let indexAns = 0; indexAns < 4; indexAns++) {
        firebase
          .database()
          .ref(
            `latihan_items/latihan${indexLatihan[indexLat]}` +
              `/answers/answer${indexAnswer[indexAns]}`,
          )
          .on('value', (snap) => {
            data.answers.push(snap.val());
          });
      }

      arrLatihanItems[indexLat] = data;
    }

    this.setState({latihanItems: arrLatihanItems});
  }

  render() {
    const {latihanItems, index, onStateAns} = this.state;
    const {height, width} = Dimensions.get('window');

    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.viewNoSoal}>
              <Text style={styles.noSoal}>{this.state.index + 1}/10</Text>
            </View>
            <View style={styles.exitKuis}>
              <TouchableOpacity onPress={this.pressExit}>
                <Text style={styles.textExit}>KELUAR</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.soalContainer}>
            <Text style={styles.textSoal}>{latihanItems[index].question}</Text>
          </View>

          {latihanItems[index].answers.map((data) => (
            <View>
              <TouchableOpacity 
                onPress={() => this.answerPressed(data)}
                disabled={data.text==onStateAns ? true : false}
              >
                <View
                  style={
                    onStateAns == data.text
                      ? styles.jawabanPressedContainer
                      : styles.jawabanContainer
                  }>
                  <Text
                    style={
                      onStateAns == data.text
                        ? styles.textJawabanPressed
                        : styles.textJawaban
                    }>
                    {data.text}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            height: height / 5,
          }}>
          {this.navigate()}
        </View>
      </SafeAreaView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};

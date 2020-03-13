/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './styles';
import IMAGES from '../../configs/images';
import MainScreen from '../../components/layouts/MainScreen';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      points: 0,
      correct: [],
      answerSaved: [],
      answers: [],
      question: '',
      pemabahasan: ''
    };
  }

  onBack = () => {
    this.props.navigation.navigate('FinishLatihanSoal');
  };

  getData = async () => {
    const correct = this.state.correct.splice();

    for (let indexCrt = 0; indexCrt < 10; indexCrt++) {
      firebase
        .database()
        .ref(`latihan_soal_items/latihan_soal${indexCrt}/correct`)
        .on('value', snap => correct[indexCrt] = snap.val());
    }

    this.setState({correct: correct});

    const answerSaved = this.state.answerSaved.splice();
    const username = await AsyncStorage.getItem('username');

    for (let indexAns = 0; indexAns < 10; indexAns++) {
      firebase
        .database()
        .ref(`users/${username}/answers/${indexAns}`)
        .on('value', snap => answerSaved[indexAns] = snap.val());
    }

    this.setState({answerSaved: answerSaved});

    const answers = this.state.answers.splice();

    for (let indexAnswer = 0; indexAnswer < 4; indexAnswer++) {
      firebase
        .database()
        .ref(`latihan_soal_items/latihan_soal${this.state.index}/answers/answer${indexAnswer}/text`)
        .on('value', snap => answers[indexAnswer] = snap.val());
    }

    this.setState({answers: answers});

    firebase
      .database()
      .ref(`latihan_soal_items/latihan_soal${this.state.index}/question`)
      .on("value", snap => this.setState({question: snap.val()}));

    firebase
    .database()
    .ref(`latihan_soal_items/latihan_soal${this.state.index}/pembahasan`)
    .on("value", snap => this.setState({pemabahasan: snap.val()}));
  };

  checkAnswer = () => {
    this.state.answerSaved.map(data => {
      this.state.correct.includes(data)
      ? this.setState({points: 1})
      : false
    })
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
    } else if (index < 10) {
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
    } else if (index == 10) {
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
    };
  };

  componentDidMount() {
    this.getData();
    this.checkAnswer();
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

            <View>
              <View style={styles.contentContainer}>
                <View style={styles.viewNoSoal}>
                  <Text style={styles.noSoal}>{this.state.index + 1}/10</Text>
                </View>
                <View style={styles.viewPoin}>
                  <Text style={styles.poin}>Poin: {this.state.points}/1</Text>
                </View>
              </View>

              <View style={styles.viewSoal}>
                <Text style={styles.soal}>
                  {this.state.question}
                </Text>
              </View>

              {this.state.answers.map(data => (
                <View>
                  <TouchableOpacity disabled={true}>
                    <View 
                      style={styles.jawabanContainer}
                    >
                      <Text 
                        style={styles.textJawaban}
                      >
                        {data}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}

              <Text style={styles.titlePembahasan}>Pembahasan: </Text>
              <View style={styles.viewPembahasan}>
                <Text style={styles.pembahasan}>
                  {this.state.pemabahasan}
                </Text>
              </View>

              <Image
                source={IMAGES.garis}
                style={styles.garis}
                resizeMode="contain"
              />

              {this.navigate()}
            </View>
          </MainScreen>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};

/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './styles';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      quiz: {},
      answer: [],
      indexAnswer: [0, 1, 2, 3],
      indexQuestion: this.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    };
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  async getData() {
    firebase
    .app()
    .database()
    .ref(`quiz_items/quiz${this.state.indexQuestion[this.state.index]}`)
    .on('value', (snap) => {
      this.setState({quiz: snap.val()});
    });
  }

  async getAnswer() {
    const a = this.state.answer.splice();
    for(let indexArr = 0; indexArr < 4; indexArr++) {
      firebase
      .app()
      .database()
      .ref(`quiz_items/quiz${this.state.indexQuestion[this.state.index]}/answers/answer${this.state.indexAnswer[indexArr]}/text`)
      .on('value', (snap) => {
        a[indexArr] = snap.val()
      });
    }
    this.setState({answer: a});
  }
  
  pressNext = () => {
    this.setState({index: this.state.index+1}, () => {
      this.shuffle(this.state.indexAnswer);
      this.getData();
      this.getAnswer();
    });
  };

  pressExit = () => {
    this.props.navigation.navigate('Kuis');
  };

  async componentDidMount() {
    this.getData();
    this.getAnswer();
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView>
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
              <Text style={styles.textSoal}>
                {this.state.quiz.question}
              </Text>
            </View>
    
            <TouchableOpacity>
              <View style={styles.jawabanContainer}>
                <Text style={styles.textJawaban}>hahha</Text>
              </View>      
            </TouchableOpacity>

            <View>
              <TouchableOpacity style={styles.nextView} onPress={this.pressNext}>
                <Image source={IMAGES.next} resizeMode="contain" style={styles.btnNext} />
              </TouchableOpacity>
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

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
  StatusBar,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './styles';
import IMAGES from '../../configs/images';
import MainScreen from '../../components/layouts/MainScreen';

let arrUrutan;
let arrAns = [{text: '', correct: false}];

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      pmbhsItems: [
        {
          question: '',
          answers: [
            {
              text: '',
              correct: false,
            },
          ],
          pembahasan: '',
        },
      ],
      onNowAns: '',
    };
  }

  onBack = () => {
    this.props.navigation.navigate('FinishLatihanSoal');
  };

  async componentDidMount() {
    const {pmbhsItems} = this.state;
    const username = await AsyncStorage.getItem('username');
    let arrPmbhs = pmbhsItems.splice();

    firebase
      .database()
      .ref(`users/${username}/urutan`)
      .on('value', snap => {
        arrUrutan = snap.val();
      });

    firebase
      .database()
      .ref(`users/${username}/saved_answer`)
      .on('value', snap => {
        arrAns = snap.val();
      });

    for (let indexUr = 0; indexUr < 10; indexUr++) {
      let data = {
        answers: [],
      };

      firebase
        .database()
        .ref(`latihan_items/latihan${arrUrutan[indexUr]}/question`)
        .on('value', snap => {
          data.question = snap.val();
        });

      for (let indexAns = 0; indexAns < 4; indexAns++) {
        firebase
          .database()
          .ref(
            `latihan_items/latihan${
              arrUrutan[indexUr]
            }/answers/answer${indexAns}`,
          )
          .on('value', snap => {
            data.answers.push(snap.val());
          });
      }

      firebase
        .database()
        .ref(`latihan_items/latihan${arrUrutan[indexUr]}/pembahasan`)
        .on('value', snap => {
          data.pembahasan = snap.val();
        });

      arrPmbhs[indexUr] = data;
    }

    this.setState({pmbhsItems: arrPmbhs});
  }

  pressFinish = async () => {
    this.props.navigation.navigate('FinishLatihanSoal');
  };

  pressNext = () => {
    const {index} = this.state;
    this.setState({index: index + 1});
  };

  pressPrevious = () => {
    const {index} = this.state;
    this.setState({index: index - 1});
  };

  navigate() {
    const index = this.state.index + 1;
    if (index == 1) {
      return (
        <View
          style={{
            marginStart: 20,
          }}>
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
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginStart: 20,
            }}>
            <TouchableOpacity onPress={this.pressPrevious}>
              <Image
                source={IMAGES.previous}
                resizeMode="contain"
                style={styles.btnPrevious}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
            }}>
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
        <View
          style={{
            flexDirection: 'row',
            marginStart: 20,
          }}>
          <TouchableOpacity onPress={this.pressPrevious}>
            <Image
              source={IMAGES.previous}
              resizeMode="contain"
              style={styles.btnPrevious2}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
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

  render() {
    const {pmbhsItems, index} = this.state;

    return (
      <MainScreen style={styles.mainContainer}>
        <StatusBar hidden />
        <View>
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
        </View>

          <ScrollView>
            <View>
              <View 
                style={{
                  flexDirection: "row"
                }}
              >
                <View style={styles.contentContainer}>
                  <View style={styles.viewNoSoal}>
                    <Text style={styles.noSoal}>{this.state.index + 1}/10</Text>
                  </View>
                </View>
                <View>
                  <View style={{
                    ...styles.viewNoSoal, 
                    backgroundColor: !arrAns[index].correct
                      ? 'red'
                      : 'green'
                    }}>
                    <Text style={{...styles.noSoal, color: 'white'}}>
                      {
                        !arrAns[index].correct
                          ? 'SALAH'
                          : 'BENAR'
                      }
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.viewSoal}>
                <Text style={styles.soal}>{pmbhsItems[index].question}</Text>
              </View>

              {pmbhsItems[index].answers.map(data => (
                <View>
                  <TouchableOpacity
                    style={
                      data.text == arrAns[index].text
                        ? !arrAns[index].correct
                          ? styles.jawabanContainerSalah
                          : styles.jawabanContainerBener
                        : !data.correct
                        ? styles.jawabanContainer
                        : styles.jawabanContainerBener
                    }
                    disabled={true}>
                    <Text
                      style={
                        data.text == arrAns[index].text
                          ? !arrAns[index].correct
                            ? styles.textJawaban
                            : styles.textJawaban
                          : !data.correct
                          ? {...styles.textJawaban, color: 'black'}
                          : styles.textJawaban
                      }>
                      {data.text}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}

              <Text style={styles.titlePembahasan}>Pembahasan: </Text>
              <View style={styles.viewPembahasan}>
                <Text style={styles.pembahasan}>
                  {pmbhsItems[index].pembahasan}
                </Text>
              </View>
            </View>  
          </ScrollView>
          <View>{this.navigate()}</View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};

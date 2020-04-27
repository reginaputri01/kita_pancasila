/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_BLACK, FONT_HEADLINE5_PRIMARY, FONT_HEADLINE7_PRIMARY } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  backgroundVideo: {
    flex: 1
  },
  videoContainer: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  background: {
    width: '100%',
    height: '100%'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backContainer: {
    width: '20%',
    padding: scale(15),
    alignItems: 'flex-start'
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(45),
    height: scale(45)
  },
  headerTitle: {
    width: '70%',
    marginTop: scale(20),
    marginLeft: scale(75)
  },
  title: {
    ...FONT_HEADLINE5_PRIMARY,
    fontSize: scale(25),
    color: COLOR_BLACK
  },
  view_video: {
    marginTop: '5%',
    marginRight: '5%',
    marginLeft: '5%',
    width: '90%'
  },
  text_title: {
    ...FONT_HEADLINE7_PRIMARY,
    color: '#515151',
    padding: METRICS.baseMargin
  },
  text_title_distance: {
    ...FONT_HEADLINE7_PRIMARY,
    color: '#515151',
    padding: METRICS.baseMargin,
    marginTop: METRICS.doubleBaseMargin
  }
});

export default styles;

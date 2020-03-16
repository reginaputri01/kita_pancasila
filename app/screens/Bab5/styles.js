/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_BLACK,
  FONT_HEADLINE5_PRIMARY,
  FONT_BODY1_PRIMARY,
  FONT_HEADLINE6_PRIMARY,
  FONT_BODY1_PRIMARY2
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
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
    fontSize: 25,
    color: COLOR_BLACK
  },
  view_content: {
    width: '100%',
    paddingTop: scale(15)
  },
  text: {
    ...FONT_BODY1_PRIMARY,
    paddingLeft: METRICS.doubleBaseMargin,
    paddingRight: METRICS.doubleBaseMargin,
    paddingTop: METRICS.smallMargin,
    lineHeight: scale(28)
  },
  text_bold: {
    ...FONT_BODY1_PRIMARY2,
    paddingLeft: METRICS.doubleBaseMargin,
    paddingRight: METRICS.doubleBaseMargin,
    paddingTop: METRICS.baseMargin,
    lineHeight: scale(28)
  },
  text_content: {
    ...FONT_BODY1_PRIMARY,
    paddingLeft: METRICS.doubleBaseMargin,
    paddingRight: METRICS.doubleBaseMargin,
    lineHeight: scale(28)
  },
  text_title: {
    ...FONT_HEADLINE6_PRIMARY,
    color: '#515151',
    paddingLeft: METRICS.doubleBaseMargin
  },
  text_end: {
    ...FONT_BODY1_PRIMARY,
    paddingLeft: METRICS.doubleBaseMargin,
    paddingRight: METRICS.doubleBaseMargin,
    marginBottom: scale(50),
    lineHeight: scale(28)
  }
});

export default styles;

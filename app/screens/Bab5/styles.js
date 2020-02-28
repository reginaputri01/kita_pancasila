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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  background: {
    width: '100%',
    height: '100%'
  },
  view_header: {
    width: '20%'
  },
  view_title: {
    width: '70%'
  },
  view_content: {
    width: '100%',
    paddingTop: scale(15)
  },
  touch: {
    padding: scale(15),
    alignItems: 'flex-start'
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
    paddingTop: METRICS.baseMargin,
    marginBottom: scale(50),
    lineHeight: scale(28)
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(40),
    height: scale(40)
  },
  title: {
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: scale(40),
    ...FONT_HEADLINE5_PRIMARY,
    color: COLOR_BLACK
  }
});

export default styles;

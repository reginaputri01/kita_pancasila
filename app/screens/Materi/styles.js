import { StyleSheet } from 'react-native';
import { COLOR_BLACK, FONT_HEADLINE5_PRIMARY } from '../../styles';
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
  touch: {
    padding: scale(15),
    alignItems: 'flex-start'
  },
  view_header: {
    width: '20%'
  },
  view_title: {
    width: '70%'
  },
  title: {
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: scale(40),
    ...FONT_HEADLINE5_PRIMARY,
    color: COLOR_BLACK
  },
  view_body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(15)
  },
  view_artikel: {
    width: '50%'
  },
  touch_artikel: {
    alignItems: 'center'
  },
  img: {
    width: scale(156),
    height: scale(164),
    margin: scale(5)
  },
  view_video: {
    width: '50%'
  },
  touch_video: {
    alignItems: 'center'
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(40),
    height: scale(40)
  }
});

export default styles;

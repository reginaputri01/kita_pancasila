import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import { COLOR_BLACK, FONT_HEADLINE5_PRIMARY } from '../../styles';
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
    width: '75%'
  },
  title: {
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: scale(50),
    ...FONT_HEADLINE5_PRIMARY,
    color: COLOR_BLACK
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(40),
    height: scale(40)
  },
  content: {
    width: '100%',
    alignItems: 'center'
  },
  btnBab: {
    width: scale(850),
    height: scale(80),
    margin: scale(10)
  }
});

export default styles;

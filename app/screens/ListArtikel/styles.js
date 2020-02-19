import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import { COLOR_BLACK } from '../../styles';
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
    marginLeft: scale(40),
    color: '#000'
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(40),
    height: scale(40)
  },
  title: {
    marginTop: scale(20),
    marginLeft: scale(40),
    fontSize: 25,
    fontWeight: 'bold',
    color: COLOR_BLACK
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

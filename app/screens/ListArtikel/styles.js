import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import { COLOR_BLACK, FONT_HEADLINE5_PRIMARY } from '../../styles';
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
    marginLeft: scale(65)
  },
  title: {
    ...FONT_HEADLINE5_PRIMARY,
    fontSize: 25,
    color: COLOR_BLACK
  },
  content: {
    alignItems: 'center',
    marginTop: scale(5)
  },
  btnBab: {
    width: scale(850),
    height: scale(80),
    margin: scale(10)
  }
});

export default styles;

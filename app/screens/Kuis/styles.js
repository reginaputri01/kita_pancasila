import { StyleSheet } from 'react-native';
import { COLOR_BLACK, FONT_HEADLINE5_PRIMARY } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  mainContainer: {
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
    marginLeft: scale(80)
  },
  title: {
    ...FONT_HEADLINE5_PRIMARY,
    fontSize: 25,
    color: COLOR_BLACK
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(15)
  },
  kuisContainer: {
    width: '50%',
    alignItems: 'center'
  },
  kuis: {
    width: scale(152),
    height: scale(164),
    margin: scale(5)
  }
});

export default styles;

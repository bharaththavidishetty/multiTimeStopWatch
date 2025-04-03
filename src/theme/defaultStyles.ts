import {StyleSheet} from 'react-native';
import color from './color';

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  flexContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default defaultStyles;

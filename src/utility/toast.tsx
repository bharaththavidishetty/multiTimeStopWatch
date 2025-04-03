import Snackbar from 'react-native-snackbar';

const Toast = (
  text: string,
  backgroundColor?: string,
  marginBottom?: number,
) => {
  return Snackbar.show({
    text: text,
    backgroundColor: backgroundColor,
    marginBottom: marginBottom,
  });
};

export default Toast;

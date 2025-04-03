import { NavigatorScreenParams } from '@react-navigation/native';

export type TimerEditorProps = {
  timer: any; // Replace 'any' with your timer type
  onSave: (timer: any) => void;
  onCancel: () => void;
};

export type AuthStackParamList = {
  bottomTabNav: undefined;
  timerList: undefined;
  timerEditor: TimerEditorProps;
  // Add other screen params
};
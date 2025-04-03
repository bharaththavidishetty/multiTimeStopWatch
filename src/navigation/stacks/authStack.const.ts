import BottomTabNav from "@navigation/BottomTabNav";
import StopWatch from "@screens/StopWatch/StopWatch";
import Timer from "@screens/MultiTimer/MultiTimer";
import StopWatch_Template from "@screens/StopWatch/StopWatch_Template";
import TimerListScreen from "@screens/MultiTimer/TimerListScreen";
import TimerEditorScreen from "@screens/MultiTimer/TimerEditorScreen";


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
export const authStackData = [
    {
        name: "bottomTabNav",
        component: BottomTabNav,
    },
    {
        name: "StopWatch",
        component: StopWatch,
    },
    {
        name: "multiTimer",
        component: Timer,
    },
    {
        name: "StopWatch_Template",
        component: StopWatch_Template,
    },
    {
        name: "TimerList",
        component: TimerListScreen,
    },
    {
        name: "TimerEditor",
        component: TimerEditorScreen,
    },
]

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Vibration,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

interface TimerProps {
  route: {
    params: {
      items: Array<{ id: number; name: string }>;
      onDelete: (id: number) => void;
    };
  };
}

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  initialTime: number;
}

const MultiTimerScreen: React.FC<TimerProps> = ({ route }) => {
  const { items, onDelete } = route.params;
  const [timerStates, setTimerStates] = useState<{ [key: number]: TimerState }>({});

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const updateTimer = (id: number, minutes: string, seconds: string) => {
    const totalSeconds = (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
    setTimerStates(prev => ({
      ...prev,
      [id]: {
        timeLeft: totalSeconds,
        isRunning: false,
        initialTime: totalSeconds,
      },
    }));
  };

  const toggleTimer = (id: number) => {
    setTimerStates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isRunning: !prev[id]?.isRunning,
      },
    }));
  };

  const resetTimer = (id: number) => {
    setTimerStates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        timeLeft: prev[id].initialTime,
        isRunning: false,
      },
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerStates(prev => {
        const newStates = { ...prev };
        let hasChanges = false;

        Object.entries(newStates).forEach(([id, state]) => {
          if (state.isRunning && state.timeLeft > 0) {
            newStates[Number(id)].timeLeft -= 1;
            hasChanges = true;
          } else if (state.isRunning && state.timeLeft === 0) {
            newStates[Number(id)].isRunning = false;
            Vibration.vibrate([0, 500, 200, 500]);
            hasChanges = true;
          }
        });

        return hasChanges ? newStates : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {items.map((item) => (
        <View key={item.id} style={styles.timerCard}>
          <View style={styles.header}>
            <Text style={styles.title}>{item.name}</Text>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
              {/* <Ionicons name="close-circle" size={24} color="#FF6B6B" />  */}
            </TouchableOpacity>
          </View>

          {!timerStates[item.id]?.timeLeft ? (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Min"
                keyboardType="numeric"
                onChangeText={(min) => updateTimer(item.id, min, '0')}
              />
              <Text style={styles.separator}>:</Text>
              <TextInput
                style={styles.input}
                placeholder="Sec"
                keyboardType="numeric"
                onChangeText={(sec) => updateTimer(item.id, '0', sec)}
              />
            </View>
          ) : (
            <Text style={styles.timeDisplay}>
              {formatTime(timerStates[item.id]?.timeLeft)}
            </Text>
          )}

          <View style={styles.controls}>
            <TouchableOpacity
              style={[styles.button, timerStates[item.id]?.isRunning ? styles.stopButton : styles.startButton]}
              onPress={() => toggleTimer(item.id)}
            >
              <Text style={styles.buttonText}>
                {timerStates[item.id]?.isRunning ? 'PAUSE' : 'START'}
              </Text>
            </TouchableOpacity>
            {timerStates[item.id]?.timeLeft !== undefined && (
              <TouchableOpacity
                style={[styles.button, styles.resetButton]}
                onPress={() => resetTimer(item.id)}
              >
                <Text style={styles.buttonText}>RESET</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F3F4',
    padding: 15,
  },
  timerCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: 70,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  separator: {
    fontSize: 24,
    marginHorizontal: 10,
    color: '#2C3E50',
  },
  timeDisplay: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2C3E50',
    marginVertical: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    minWidth: 100,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#2ECC71',
  },
  stopButton: {
    backgroundColor: '#E74C3C',
  },
  resetButton: {
    backgroundColor: '#7F8C8D',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 100,
  },
});

export default MultiTimerScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const TimerScreen = () => {
//   const [minutes, setMinutes] = useState('');
//   const [seconds, setSeconds] = useState('');
//   const [timeLeft, setTimeLeft] = useState<number | null>(null);
//   const [isRunning, setIsRunning] = useState(false);

//   const startTimer = () => {
//     const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
//     setTimeLeft(totalSeconds);
//     setIsRunning(true);
//   };

//   React.useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && timeLeft !== null && timeLeft > 0) {
//       timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//     } else if (timeLeft === 0) {
//       setIsRunning(false);
//     }
//     return () => clearTimeout(timer);
//   }, [timeLeft, isRunning]);

//   const formatTime = (time: number) => {
//     const mins = Math.floor(time / 60);
//     const secs = time % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     <View style={styles.container}>
//       {timeLeft === null || !isRunning ? (
//         <>
//           <Text style={styles.label}>Set Timer:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Minutes"
//             keyboardType="numeric"
//             value={minutes}
//             onChangeText={setMinutes}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Seconds"
//             keyboardType="numeric"
//             value={seconds}
//             onChangeText={setSeconds}
//           />
//           <Button title="Start Timer" onPress={startTimer} />
//         </>
//       ) : (
//         <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 8,
//     width: '80%',
//     textAlign: 'center',
//   },
//   timer: {
//     fontSize: 48,
//     fontWeight: 'bold',
//   },
// });

// export default TimerScreen;
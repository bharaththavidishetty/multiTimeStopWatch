import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Modal } from 'react-native';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import TimerEditorScreen from './TimerEditorScreen';
import { RouteProp } from '@react-navigation/native';

interface tempProps {
  onClose?: () => void;
  defaultName?: string;
  defaultTime?: number;
  timerId?: string; // Add timerId prop to identify each timer
}

type RootStackParamList = {
  TimerEditor: { timer?: { id: string; name: string; time: number } };
  MultiTimer_Template: { updatedTimer?: { id: string; name: string; time: number } };
};

type MultiTimerRouteProp = RouteProp<RootStackParamList, 'MultiTimer_Template'>;

export default function MultiTimer_Template({ onClose, defaultName = 'Timer', defaultTime = 300000, timerId = '1' }: tempProps) {
  const [time, setTime] = useState(defaultTime);
  const [lastSetTime, setLastSetTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [timerName, setTimerName] = useState(defaultName);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<MultiTimerRouteProp>();

  // Handle updates from TimerEditor
  useEffect(() => {
    if (route.params?.updatedTimer && route.params.updatedTimer.id === timerId) {
      const { name, time } = route.params.updatedTimer;
      setTimerName(name);
      setTime(time);
      setLastSetTime(time);
      // Clear the params after using them
      navigation.setParams({ updatedTimer: undefined });
    }
  }, [route.params?.updatedTimer]);

  useEffect(() => {
    setTimerName(defaultName);
    setTime(defaultTime);
  }, [defaultName, defaultTime]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const toggleTimer = () => {
    if (isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalRef.current!);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(lastSetTime);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    }

    // Always show hours format for consistency
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleCloseModal = (updatedTimer: any) => {
    if (updatedTimer) {
      setTimerName(updatedTimer.name);
      setTime(updatedTimer.time);
      setLastSetTime(updatedTimer.time);
    }
    setIsModalVisible(false);
  };

  return (
    <View style={[styles.container, isRunning && styles.runningContainer]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsDropdownVisible(!isDropdownVisible)} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>⋮</Text>
        </TouchableOpacity>
        {isDropdownVisible && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => { onClose?.(); setIsDropdownVisible(false); }}>
              <Text style={styles.dropdownText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.timerContainer}
      >
        <Text style={styles.timerName}>{timerName}</Text>
        <Text style={styles.timerText}>{formatTime()}</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, isRunning ? styles.pauseButton : styles.startButton]} onPress={toggleTimer}>
          <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <TimerEditorScreen
            timer={{ id: timerId, name: timerName, time }}
            onSave={handleCloseModal}
            onCancel={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  runningContainer: {
    borderColor: '#2ECC71',
  },
  header: {
    alignItems: 'flex-end',
  },
  menuButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonText: {
    color: '#2C3E50',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: '#34495E',
    borderRadius: 8,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownText: {
    color: '#ECF0F1',
    fontSize: 16,
  },
  timerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  timerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  timerText: {
    fontSize: 44,
    fontWeight: '700',
    color: '#2C3E50',
    fontFamily: 'monospace',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    minWidth: '45%',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#2ECC71',
  },
  pauseButton: {
    backgroundColor: '#F1C40F',
  },
  resetButton: {
    backgroundColor: '#E74C3C',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
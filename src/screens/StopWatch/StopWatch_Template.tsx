import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import Toast from '@utility/toast';

interface tempProps {
    onClose?: () => void;
    defaultName?: string;
}

export default function StopWatch_Template({ onClose, defaultName = 'Watch 1' }: tempProps) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [timerName, setTimerName] = useState(defaultName);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Add useEffect to update timerName when defaultName changes
    useEffect(() => {
        setTimerName(defaultName);
    }, [defaultName]);

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
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = () => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        if (hours > 0) {
            return `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds
                    .toString()
                    .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
        }

        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    };

    return (
        <View style={[
            styles.container,
            isRunning && styles.runningContainer
        ]}>
            {/* <View style={styles.header}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
            </View> */}

            {/* // Replace the existing header View with this */}
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <TextInput
                        style={styles.titleInput}
                        value={timerName}
                        onChangeText={setTimerName}
                        placeholder={defaultName}
                    />
                    <TouchableOpacity
                        onPress={() => setIsDropdownVisible(!isDropdownVisible)}
                        style={styles.menuButton}
                    >
                        <Text style={styles.menuButtonText}>⋮</Text>
                    </TouchableOpacity>
                </View>

                {isDropdownVisible && (
                    <View style={styles.dropdown}>
                        <TouchableOpacity
                            style={styles.dropdownItem}
                            onPress={() => {
                                onClose?.();
                                setIsDropdownVisible(false);
                            }}
                        >
                            <Text style={styles.dropdownText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime()}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, isRunning ? styles.pauseButton : styles.startButton]}
                    onPress={toggleTimer}
                >
                    <Text style={styles.buttonText}>
                        {isRunning ? 'Pause' : 'Start'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.resetButton]}
                    onPress={resetTimer}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // ...existing styles...
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 3,
        borderWidth: 2,
        borderColor: 'transparent',
      },
      runningContainer: {
        borderColor: '#2ECC71',
      },
      titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
      },
      titleInput: {
        color: '#2C3E50',
        fontSize: 18,
        fontWeight: '600',
        flex: 1,
        marginRight: 10,
        padding: 0,
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
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dropdownItem: {
        padding: 10,
    },
    dropdownText: {
        color: '#ECF0F1',
        fontSize: 16,
    },
    header: {
        alignItems: 'flex-end',
    },
    closeButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#E74C3C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    timerContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    timerText: {
        fontSize: 44,
        fontWeight: '700',
        color: '#2C3E50',
        fontFamily: 'monospace',
        letterSpacing: -1,
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
});
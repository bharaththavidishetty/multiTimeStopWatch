import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

interface TimerEditorProps {
    timer: { id: string; name: string; time: number };
    onSave: (updatedTimer: { id: string; name: string; time: number }) => void;
    onCancel: () => void;
}

// Update the component to accept props for the timer and callback functions
export default function TimerEditorScreen({ timer, onSave, onCancel }:TimerEditorProps) {
    // Initialize state with timer values or defaults
    const [timerName, setTimerName] = useState(timer?.name || 'Timer');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    // Set initial time values when component mounts
    useEffect(() => {
        if (timer?.time) {
            const totalMilliseconds = timer.time;
            const hrs = Math.floor(totalMilliseconds / 3600000);
            const mins = Math.floor((totalMilliseconds % 3600000) / 60000);
            const secs = Math.floor((totalMilliseconds % 60000) / 1000);

            setHours(hrs.toString().padStart(2, '0'));
            setMinutes(mins.toString().padStart(2, '0'));
            setSeconds(secs.toString().padStart(2, '0'));
        }
    }, [timer?.time]);

    // Handle input changes with validation
    const handleHoursChange = (text: string) => {
        // Remove any non-numeric characters
        const numericValue = text.replace(/[^0-9]/g, '');

        // Format with leading zeros if needed
        let formattedValue = numericValue;
        if (numericValue.length === 1) {
            formattedValue = numericValue;
        } else if (numericValue.length > 2) {
            formattedValue = numericValue.substring(0, 2);
        } else if (numericValue === '') {
            formattedValue = '0';
        }

        setHours(formattedValue);
    };

    const handleMinutesChange = (text: string) => {
        // Remove any non-numeric characters
        const numericValue = text.replace(/[^0-9]/g, '');

        // Format with leading zeros if needed
        let formattedValue = numericValue;
        if (numericValue.length === 1) {
            formattedValue = numericValue;
        } else if (numericValue.length > 2) {
            formattedValue = numericValue.substring(0, 2);
        } else if (numericValue === '') {
            formattedValue = '0';
        }

        // Ensure minutes don't exceed 59
        if (parseInt(numericValue) > 59) {
            formattedValue = '59';
        }

        setMinutes(formattedValue);
    };

    const handleSecondsChange = (text: string) => {
        // Remove any non-numeric characters
        const numericValue = text.replace(/[^0-9]/g, '');

        // Format with leading zeros if needed
        let formattedValue = numericValue;
        if (numericValue.length === 1) {
            formattedValue = numericValue;
        } else if (numericValue.length > 2) {
            formattedValue = numericValue.substring(0, 2);
        } else if (numericValue === '') {
            formattedValue = '0';
        }

        // Ensure seconds don't exceed 59
        if (parseInt(numericValue) > 59) {
            formattedValue = '59';
        }

        setSeconds(formattedValue);
    };

    const handleSave = () => {
        // Format time values with leading zeros for display
        const formattedHours = hours ? hours.padStart(2, '0') : '00';
        const formattedMinutes = minutes ? minutes.padStart(2, '0') : '00';
        const formattedSeconds = seconds ? seconds.padStart(2, '0') : '00';

        // Update state with formatted values
        setHours(formattedHours);
        setMinutes(formattedMinutes);
        setSeconds(formattedSeconds);

        // Convert time to milliseconds
        const totalMilliseconds =
            (parseInt(formattedHours) * 3600000) +
            (parseInt(formattedMinutes) * 60000) +
            (parseInt(formattedSeconds) * 1000);

        const updatedTimer = {
            id: timer?.id || '1',
            name: timerName,
            time: totalMilliseconds
        };

        // Use the callback to return the updated timer
        onSave(updatedTimer);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Timer</Text>

            <TextInput
                style={styles.nameInput}
                value={timerName}
                onChangeText={setTimerName}
                placeholder="Enter Timer Name"
                placeholderTextColor="#999"
            />

            <View style={styles.timeInputWrapper}>
                <Text style={styles.timeInputsTitle}>Set Timer Duration</Text>

                <View style={styles.timeInputContainer}>
                    <View style={styles.timeInputGroup}>
                        <TextInput
                            style={styles.timeInput}
                            value={hours}
                            onChangeText={handleHoursChange}
                            keyboardType="numeric"
                            maxLength={2}
                            selectTextOnFocus={true}
                        />
                        <Text style={styles.timeLabel}>HR</Text>
                    </View>

                    <Text style={styles.separator}>:</Text>

                    <View style={styles.timeInputGroup}>
                        <TextInput
                            style={styles.timeInput}
                            value={minutes}
                            onChangeText={handleMinutesChange}
                            keyboardType="numeric"
                            maxLength={2}
                            selectTextOnFocus={true}
                        />
                        <Text style={styles.timeLabel}>MIN</Text>
                    </View>

                    <Text style={styles.separator}>:</Text>

                    <View style={styles.timeInputGroup}>
                        <TextInput
                            style={styles.timeInput}
                            value={seconds}
                            onChangeText={handleSecondsChange}
                            keyboardType="numeric"
                            maxLength={2}
                            selectTextOnFocus={true}
                        />
                        <Text style={styles.timeLabel}>SEC</Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20,
        backgroundColor: '#121212',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
    },
    nameInput: {
        fontSize: 24,
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderColor: '#FFF',
        width: '80%',
        textAlign: 'center',
        marginBottom: 20,
        padding: 10,
    },
    timeInputWrapper: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    timeInputsTitle: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    timeInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    timeInputGroup: {
        alignItems: 'center',
    },
    timeInput: {
        fontSize: 36,
        color: '#FFFFFF',
        backgroundColor: '#333',
        paddingHorizontal: 15,
        paddingVertical: 10,
        textAlign: 'center',
        width: 70,
        borderRadius: 5,
    },
    timeLabel: {
        color: '#FFFFFF',
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    separator: {
        fontSize: 36,
        color: '#FFFFFF',
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-around',
    },
    saveButton: {
        backgroundColor: '#2ECC71',
        padding: 15,
        borderRadius: 10,
        minWidth: 120,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#7f8c8d',
        padding: 15,
        borderRadius: 10,
        minWidth: 120,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
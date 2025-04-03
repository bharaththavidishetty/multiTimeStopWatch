import { StyleSheet, View, TouchableOpacity, Text, Alert, ScrollView } from "react-native";
import Test from "./MultiTimer_Template";
import { useState } from "react";
import Toast from "@utility/toast";

interface Timer {
    id: number;
    name: string;
}

export default function StopWatch() {
    const [timers, setTimers] = useState<Timer[]>([{ id: 1, name: 'Test 1' }]);

    const getNextWatchNumber = () => {
        const numbers = timers.map(timer => {
            const match = timer.name.match(/\d+/);
            return match ? parseInt(match[0]) : 0;
        });
        const maxNumber = Math.max(...numbers);
        return maxNumber + 1;
    };

    const addTimer = () => {
        const nextNumber = getNextWatchNumber();
        setTimers([...timers, {
            id: Date.now(),
            name: `Test ${nextNumber}`
        }]);
    };

    const handleDelete = (item: any) => {
        Toast(`${item.name} deleted.`, "green", 10);
        if (timers.length <= 1) {
            Toast("At least one stopwatch should be present!", "red", 10);
            // Alert.alert("Warning", "At least one stopwatch should be present!");
            return;
        }
        setTimers(timers.filter(timer => timer.id !== item.id));
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {timers.map((timer) => (
                    <Test
                        key={timer.id}
                        onClose={() => handleDelete(timer)}
                        defaultName={timer.name}
                    />
                ))}
                <View style={styles.bottomPadding} />
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={addTimer}
                activeOpacity={0.7}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F3F4',
        paddingTop: 40, // Add padding for status bar
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 15,
    },
    scrollContent: {
        paddingTop: 10,
        paddingBottom: 100, // Space for floating button
    },
    bottomPadding: {
        height: 80, // Extra padding at bottom
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#2ECC71',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 15,
        zIndex: 1000,
    },
    addButtonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 2, // Visual center adjustment
    }
});
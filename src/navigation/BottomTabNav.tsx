import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import StopwatchScreen from '../screens/StopWatch/StopWatch';
import MultiTimerScreen from '../screens/MultiTimer/MultiTimer';
// import coin from '../assets/image/coin.png';
// import dollar from '../assets/image/dollar.png';

import imageIndex from '@imageIndex';

const Tab = createBottomTabNavigator();

export const homeTabData = [
    {
        id: 1,
        name: 'StopWatch',
        icon: imageIndex.coin, // Use the imported coin image
        component: StopwatchScreen,
    },
    {
        id: 2,
        name: 'MultiTimer',
        icon: imageIndex.dollar, // Use the imported dollar image
        component: MultiTimerScreen,
    },
];

const BottomTabNav: React.FC = () => {
    return (
            <Tab.Navigator
                initialRouteName="StopWatch"
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#2ECC71',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        paddingBottom: 5,
                        height: 60,
                    },
                    swipeEnabled: true,
                    animationEnabled: true,
                })}
            >
                {homeTabData.map((screen, index) => (
                    <Tab.Screen
                        key={index}
                        name={screen.name}
                        component={screen.component}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={screen.icon}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? '#2ECC71' : 'gray', // Optional: Tint color for active/inactive state
                                    }}
                                />
                            ),
                        }}
                    />
                ))}
            </Tab.Navigator>
    );
};

export default BottomTabNav;
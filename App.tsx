import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import AuthStack from "@navigation/stacks/authStack";

interface Timer {
  id: number;
  name: string;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <AuthStack />
       
      {/* <BottomTabNav /> */}
    </NavigationContainer>
  );
}



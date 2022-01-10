import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { ROUTERS } from "./constants/router";
import ListAlarm from "./screens/ListAlarm";
import Screen1 from "./screens/Screen1";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ROUTERS.LIST_ALARM.name}
      >
        <Stack.Screen
          name={ROUTERS.LIST_ALARM.name}
          key={ROUTERS.LIST_ALARM.key}
          navigationKey={ROUTERS.LIST_ALARM.key}
          component={ListAlarm}
        />
        <Stack.Screen
          name={ROUTERS.SCREEN1.name}
          key={ROUTERS.SCREEN1.key}
          navigationKey={ROUTERS.SCREEN1.key}
          component={Screen1}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

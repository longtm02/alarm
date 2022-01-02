import { StatusBar } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import ListAlarm from "./screens/ListAlarm";

export default function App() {
  return (
    <ScrollView horizontal={false}>
      <StatusBar />
      <ListAlarm />
    </ScrollView>
  );
}

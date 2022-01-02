import { StatusBar } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <ScrollView horizontal={false}>
      <StatusBar />
      <Home />
    </ScrollView>
  );
}

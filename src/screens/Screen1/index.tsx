import { Box } from "native-base";
import React from "react";
import { Text, StatusBar, SafeAreaView, ScrollView } from "react-native";

export default function Screen1() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Box>
          <Text>list alarm screen 1</Text>
        </Box>
        <Box></Box>
      </ScrollView>
    </SafeAreaView>
  );
}

import { Box } from "native-base";
import React, { useState } from "react";
import { View, Text, StatusBar, SafeAreaView, ScrollView } from "react-native";

export default function Screen1() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Box>
          <Text>list alarm screen 1</Text>
        </Box>
        <Box>{/* <DatePicker date={date} onDateChange={setDate} /> */}</Box>
      </ScrollView>
    </SafeAreaView>
  );
}

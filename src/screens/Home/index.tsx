import React from "react";
import { View } from "react-native";
import { Flex, Center, ScrollView, Text, Box } from "native-base";
import styles from "./style";
import Item from "./Item";

export default function Home() {
  return (
    <ScrollView>
      <Box style={styles.container}>
        <Text style={styles.title}>list alarm</Text>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Box>
    </ScrollView>
  );
}

import React from "react";
import { View } from "react-native";
import { Flex, Center, ScrollView, Text, Box, Switch } from "native-base";
import styles from "./style";

export default function Item() {
  const handleToggleAlarm = () => {
    console.log("hih");
  };
  return (
    <ScrollView>
      <Box
        style={styles.container}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box style={styles.contentContainer}>
          <Box>
            <Text fontSize={32} fontWeight="bold" color="white">
              03:12
            </Text>
          </Box>
          <Box>
            <Text fontWeight={900} fontSize={21} color="#756f6f4b">
              Một lần thôi
            </Text>
          </Box>
        </Box>
        <Box>
          <Switch size="lg" onChange={handleToggleAlarm} />
        </Box>
      </Box>
    </ScrollView>
  );
}

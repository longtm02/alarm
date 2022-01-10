import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { ScrollView, Text, Box, StatusBar } from "native-base";
import styles from "./style";
import Alarm from "./Alarm";
import { AppState } from "../../store/reducer";
import { AlarmReducerInterface } from "../../store/reducer/alarm/interface";

export default function ListAlarm() {
  const alarmManagement = useSelector((state: AppState) => state.listAlarm);

  const renderAlarm = () => {
    let result = null;
    if (alarmManagement.listAlarm.length < 1) return result;
    result = alarmManagement.listAlarm.map((item: AlarmReducerInterface) => {
      return <Alarm data={item} key={item.uuid} />;
    });
    return result;
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Box style={styles.container}>
          <Text style={styles.title}>list alarm</Text>
          {renderAlarm()}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

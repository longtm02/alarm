import React, { FC, useState } from "react";
import { Text, Box, Switch } from "native-base";
import styles from "./style";
import { AlarmReducerInterface } from "../../../store/reducer/alarm/interface";
import { TouchableHighlight } from "react-native";
import { useLinkTo, useNavigation } from "@react-navigation/native";
import { ROUTERS } from "../../../constants/router";

interface IAlarm {
  data: AlarmReducerInterface;
}

const Alarm: FC<IAlarm> = ({ data }) => {
  const navigation = useNavigation();
  const link = useLinkTo();
  const [statusOpen, setStatusOpen] = useState(data.statusOpen);
  const handleToggleAlarm = () => {
    setStatusOpen(!statusOpen);
  };
  const formatTime = (time: number) => {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  };
  const onPress = () => {
    navigation.navigate(ROUTERS.SCREEN1.name as any);
  };
  return (
    <TouchableHighlight onPress={onPress}>
      <Box
        style={styles.container}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box style={styles.contentContainer}>
          <Box>
            <Text fontSize={32} fontWeight="bold" color="white">
              {formatTime(data.hours)}:{formatTime(data.seconds)}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={900} fontSize={21} color="#756f6f4b">
              Một lần thôi
            </Text>
          </Box>
        </Box>
        <Box>
          <Switch
            isChecked={statusOpen}
            size="lg"
            onToggle={handleToggleAlarm}
          />
        </Box>
      </Box>
    </TouchableHighlight>
  );
};

export default Alarm;

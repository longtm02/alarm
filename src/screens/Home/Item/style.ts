import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minHeight: 75,
    padding: 12,
    margin: 12,
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.3)",
  },
  title: {
    fontSize: 12,
    textAlign: "center",
  },
  switchContainer: {},
  contentContainer: {
    flex: 1,
  },
});

export default styles;

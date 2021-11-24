import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Display = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{props.val == "" ? 0 : props.val}</Text>
        <Text style={styles.result}>{props.valFinally}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 310,
    padding: 20,
    alignItems: "flex-end",
    justifyContent: "center",
    height: 150,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
  },
  result: {
    fontWeight: "bold",
    fontSize: 30,
    color: "red",

  },
});
export default Display;

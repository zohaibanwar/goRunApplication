import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ButtonWhite = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
  },
  text: {
    color: "#44caac",
    fontSize: 16,
  },
});

export default ButtonWhite;

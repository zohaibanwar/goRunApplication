import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#44caac",
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default Button;

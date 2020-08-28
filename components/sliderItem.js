import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SliderItem = (props) => {
  return (
    <View style={styles.bigTab}>
      <Text style={styles.bigUpperText}>{props.upperText}</Text>
      <Text style={styles.innerText}>{props.centerText}</Text>
      <Text style={styles.bigBottomText}>{props.bottomText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigTab: {
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#44caac",
    marginLeft: '10%',
    marginRight: '10%',
    padding: 30
  },
  bigUpperText: {
    fontSize: 28,
    color: "white",
  },
  innerText: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold",
  },
  bigBottomText: {
    color: "white",
    fontSize: 22,
  },
});

export default SliderItem;

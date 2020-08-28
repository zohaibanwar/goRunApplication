import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";

const Button = (props) => {
  return (
    <Slider
      style={styles.sliderStyle}
      minimumTrackTintColor={"#8A8487"}
      maximumTrackTintColor={"#44caac"}
      thumbTintColor={"grey"}
    />
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    flex: 1,
  },
});

export default Button;

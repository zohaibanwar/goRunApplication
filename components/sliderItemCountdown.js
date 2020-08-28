import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AnimateNumber from "react-native-countup";
import CountDown from "react-native-countdown-component";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

const SliderItem = (props) => {
  return (
    <View style={styles.bigTab}>
      <CountDown
        until={props.until}
        onFinish={props.counterCompleted}
        timeToShow={["S","M"]}
        digitTxtStyle={styles.innerText}
        digitStyle={styles.digitStyles}
        timeLabels={{ d: "", h: "", m: "", s: "" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bigTab: {
    borderColor: props.tintColor,
    borderWidth: 1,
    borderRadius: 30,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 20,
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
  digitStyles: {
    backgroundColor: "#44caac",
    flexDirection: "row",
    width: "100%",
    padding: 50,
  },
});

export default SliderItem;

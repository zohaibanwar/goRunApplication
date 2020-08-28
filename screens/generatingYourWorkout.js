import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class GeneratingYourWorkout extends Component {
  render() {
    return (
      <View style={styles.mainViewContainer}>
        <View style={styles.gifViewContainer}>
            <Image
             source={require("../assets/pathsettings.png")}
             style={{tintColor: "#44caac" }}/>
        </View>

        <View style={styles.centerTextContainer}>
          <Text style={styles.centerTextStyle}>
            Generating your workout plan
          </Text>
        </View>

        <View style={styles.percentageTextContainer}>
          <Text style={styles.percentageTextStyle}>20%</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  gifViewContainer: {
    width: "100%",
    height: "50%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerTextContainer: {
    width: "100%",
    height: "45%",
  },
  percentageTextContainer: {
    width: "100%",
    height: "5%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerTextStyle: {
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  percentageTextStyle: {
    fontSize: 18,
    color: "black",
  },
});

export default GeneratingYourWorkout;

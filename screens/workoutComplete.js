import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Button from "../components/button";
import Slider from "../components/slider";

class WorkoutComplete extends Component {

  gotoNextScreen = () => {
    this.props.navigation.push("ShareWorkout");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          source={require("../assets/close.png")}
          style={styles.crossImageStyle}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.support}>Workout Complete</Text>
          <View style={styles.devider} />
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.bigBlackText}>How was the Workout?</Text>
          </View>

          <View style={styles.viewSeekbarContainer}>
            <View style={styles.horizontalTextViewsContainer}>
              <Text style={styles.bigBlackText}>Too Easy</Text>
              <Text style={styles.iamExhaustedTextStyle}>I'm Exhausted</Text>
            </View>
            <Slider/>
          </View>

          <Text style={styles.yourWeightTextStyle}>Your weight, lbs</Text>

          <Text style={styles.bottomText}>
            Let us know your current weight and how you felt during workout.
            This information will be used to improve your training plan.
          </Text>
        </ScrollView>

        <View style={{ padding: "5%" }}>
          <Button btnText="DONE" onPress={this.gotoNextScreen}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  support: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#233249",
  },
  devider: {
    borderWidth: 5,
    borderRadius: 6,
    marginTop: 10,
    borderColor: "#f6f7f9",
    marginBottom: 10,
    marginLeft: "5%",
    marginRight: "5%",
  },
  emailInput: {
    fontSize: 22,
    borderBottomColor: "gray",
    borderBottomWidth: 0.7,
    color: "#233249",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 25,
  },
  topTabs: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#44caac",
    paddingBottom: 10,
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    borderRightColor: "white",
    borderRightWidth: 2,
  },
  tabX: {
    flex: 1,
  },
  topText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  centerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  bigTab: {
    borderColor: "#44caac",
    borderWidth: 1,
    borderRadius: 30,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 20,
  },
  innerText: {
    fontSize: 80,
    color: "#44caac",
    fontWeight: "bold",
  },
  greenText: {
    color: "#44caac",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  smallText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 18,
    marginBottom: 10,
  },
  bottomText: {
    fontSize: 16,
    color: "#aaa",
    padding: "2%",
    textAlign: "center",
    marginTop: 10,
  },
  bigGreyText: {
    fontSize: 20,
    color: "#aaa",
    textAlign: "center",
  },
  bigBlackText: {
    fontSize: 20,
    color: "#8A8487",
    textAlign: "center",
  },
  iamExhaustedTextStyle: {
    flex: 1,
    fontSize: 20,
    color: "#8A8487",
    textAlign: "right",
    justifyContent: "center",
  },
  yourWeightTextStyle: {
    flex: 1,
    fontSize: 20,
    color: "#8A8487",
    textAlign: "center",
    marginBottom: 20,
  },
  crossImageStyle: {
    width: 15,
    height: 15,
    tintColor: "black",
    marginLeft: "5%",
  },
  viewSeekbarContainer: {
    marginTop: 20,
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  horizontalTextViewsContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  sliderStyle: {
    flex: 1,
    marginBottom: 20,
  },
  pickerStyle: {
    flex: 1,
    height: "30%",
  },
});

export default WorkoutComplete;

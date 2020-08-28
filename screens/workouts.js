import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

class Workouts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.support}>Workouts</Text>
          <View style={styles.devider} />
          <Text style={styles.greenText}>Running for Weight Loss</Text>
          <Text style={styles.smallText}>Beginner - Stage 1</Text>

          <View style={styles.topTabs}>
            <View style={styles.tab}>
              <Text style={styles.topText}>DISTANCE</Text>
              <Text style={styles.centerText}>0.00</Text>
              <Text style={styles.bottomText}>mi</Text>
            </View>

            <View style={styles.tab}>
              <Text style={styles.topText}>PACE</Text>
              <Text style={styles.centerText}>00.00</Text>
              <Text style={styles.bottomText}>min/mi</Text>
            </View>

            <View style={styles.tabX}>
              <Text style={styles.topText}>CALORIES</Text>
              <Text style={styles.centerText}>0.0</Text>
              <Text style={styles.bottomText}>Kcal</Text>
            </View>
          </View>
          <Text style={styles.bottomBigText}>
            Complete at least one training and your stats will appear here
            shortly.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 70,
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
  bottomText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
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
  bottomBigText: {
    fontSize: 20,
    color: "#aaa",
    padding: "5%",
    textAlign: "center",
  },
});

export default Workouts;

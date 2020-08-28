import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Button from "../components/button";

class FreeRun extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.support}>Free Run</Text>
          <View style={styles.devider} />
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
        </ScrollView>
        <View style={styles.bigTab}>
          <Text style={styles.innerText}>0</Text>
        </View>
        <View style={styles.options}>
          <Image source={require("../assets/camera.png")} />
          <View style={styles.btn}>
            <Button btnText="Start" />
          </View>
          <Image source={require("../assets/password.png")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "5%",
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
  },
  tab: {
    flex: 1,
    borderRightColor: "gray",
    borderRightWidth: 1,
  },
  tabX: {
    flex: 1,
  },
  topText: {
    fontSize: 18,
    textAlign: "center",
  },
  centerText: {
    color: "#44caac",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  bottomText: {
    fontSize: 20,
    color: "#aaa",
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
});

export default FreeRun;

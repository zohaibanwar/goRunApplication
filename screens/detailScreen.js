import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Button from "../components/button";

class FreeRun extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.support}>Week 1, Day 1</Text>
          <View style={styles.devider} />

          <View style={styles.topBar}>
            <Image source={require("../assets/info.png")} />
            <Text style={styles.trainingText}>Training Info</Text>
          </View>

          <View style={styles.centerContainer}>
            <Image style={styles.img} source={require("../assets/pic.png")} />
            <View style={styles.textContainer}>
              <Text style={styles.personal}>Your Personal Trainer</Text>
              <Text style={styles.name}>Eric</Text>
            </View>
          </View>
          <View style={styles.btns}>
            <TouchableOpacity style={styles.btn}>
              <Text>Outdoor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.btnText}>Treadmill</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button btnText="BEGIN" />
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
  topBar: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 14,
    alignItems: "center",
  },
  trainingText: {
    fontSize: 20,
    color: "gray",
    marginLeft: 10,
  },
  centerContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: "flex-end",
    paddingLeft: 10,
  },
  personal: {
    color: "#aaa",
    fontSize: 16,
  },
  name: {
    color: "#44caac",
    fontSize: 22,
    fontWeight: "bold",
  },
  btns: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 25,
  },
  btn: {
    alignItems: "center",
    width: "50%",
    padding: 10,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#f9f9f9",
  },
  btn2: {
    alignItems: "center",
    width: "50%",
    padding: 10,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: "#44caac",
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});

export default FreeRun;

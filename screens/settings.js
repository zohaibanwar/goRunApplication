import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image, Switch, ScrollView } from "react-native";
import Button from "../components/button";

class Settings extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <StatusBar style="auto" />

          <Image
            source={require("../assets/pathsettings.png")}
            style={{ width: 15, height: 15, tintColor: "#44caac" }}
          />
          <Text style={styles.support}>Settings</Text>

          <View style={styles.devider} />

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 0.5,
              paddingBottom: 25,
            }}
          >
            <Text style={styles.textStyleGrey}>My Parameters</Text>

            <View
              style={{ flexDirection: "row", width: "100%", marginTop: 10 }}
            >
              <Text style={styles.textStyleStartView}>Language</Text>

              <Text style={styles.textStyleEndView}>English</Text>
            </View>

            <Text style={styles.textStyleGreyBaseline}>Connect</Text>

            <View style={styles.viewBottom} />
          </View>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 0.5,
              paddingBottom: 25,
              marginTop: 10,
            }}
          >
            <Text style={styles.textStyleGrey}>Google Fit</Text>

            <Text style={styles.textStyleGreyBaseline}>Training</Text>

            <Text style={styles.textStyleGreyBaseline}>Audio Setting</Text>

            <View style={{ flexDirection: "row", width: "100%", marginTop: 10 }}>
              <Text style={styles.textStyleStartView}>Pause run for calls</Text>

              <Switch style={styles.textStyleEndView} />
            </View>

            <View style={{ flexDirection: "row", width: "100%", marginTop: 10 }}>
              <Text style={styles.textStyleStartView}>
                Keep tracking when workout is finished
              </Text>

              <Switch style={styles.textStyleEndView} />
            </View>

            <Text style={styles.textStylerRestart}>
              RESTART THIS TRAINING PLAN
            </Text>

            <View style={styles.viewBottom} />
          </View>

          <View
            style={{
              paddingBottom: 25,
              marginTop: 10,
            }}
          >
            <Text style={styles.textStyleGrey}>Membership</Text>

            <Text style={styles.textStyleGrey}>Login</Text>

            <View
              style={{ flexDirection: "row", width: "100%", marginTop: 10 }}
            >
              <Text style={styles.textStyleStartView}>Account type</Text>

              <Text style={styles.textStyleEndView}>Basic</Text>
            </View>

            <View
              style={{ flexDirection: "row", width: "100%", marginTop: 10 }}
            >
              <Text style={styles.textStyleStartView}>Premium (1 month)</Text>

              <Text style={styles.textStyleEndView}>PKR 1050</Text>
            </View>

            <Text style={styles.textStyleGreyBaseline}>Premium (1 year)</Text>

            <View style={styles.viewBottom} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "5%",
    paddingTop: 40,
    width: "100%",
    height: "100%"
  },
  support: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#233249",
  },
  textStyleGrey: {
    fontSize: 20,
    color: "gray",
  },
  textStyleGreyBaseline: {
    fontSize: 20,
    color: "gray",
    marginTop: 10,
  },
  textStylerRestart: {
    fontSize: 22,
    color: "#44caac",
    marginTop: 12,
  },
  textStyleStartView: {
    fontSize: 20,
    color: "gray",
    alignSelf: "flex-start",
    width: "50%",
  },
  textStyleEndView: {
    fontSize: 20,
    color: "#44caac",
    width: "50%",
    alignSelf: "center",
    textAlign: "right",
  },
  textStyleLanguage: {
    fontSize: 20,
    color: "#44caac",
  },
  devider: {
    borderWidth: 5,
    borderRadius: 6,
    marginTop: 10,
    borderColor: "#f6f7f9",
    marginBottom: 20,
  },
  emailInput: {
    fontSize: 22,
    borderBottomColor: "gray",
    borderBottomWidth: 0.7,
    color: "#233249",
  },
});

export default Settings;

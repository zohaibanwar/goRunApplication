import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../components/button";

class Support extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.support}>Support</Text>
        <View style={styles.devider} />
        <TextInput style={styles.emailInput} placeholder="E-Mail" />
        <Button btnText="CONTACT US" />
        <Button btnText="FAQ" />
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
    marginBottom: 70,
  },
  emailInput: {
    fontSize: 22,
    borderBottomColor: "gray",
    borderBottomWidth: 0.7,
    color: "#233249",
  },
});

export default Support;

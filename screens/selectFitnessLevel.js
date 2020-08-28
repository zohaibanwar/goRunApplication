import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Button from "../components/button";
import { RadioButton } from "react-native-paper";

class FLevel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.support}>Select Your Fitness Level</Text>
          <View style={styles.devider} />

          <Text style={styles.topdescription}>
            You can always change it from app Menu
          </Text>

          <View style={styles.listItem}>
            <View>
              <Text style={styles.title}> Beginner </Text>
              <Text style={styles.description}>
                You are absolutely new to running.
              </Text>
            </View>
            <RadioButton />
          </View>

          <View style={styles.listItem}>
            <View>
              <Text style={styles.title}> Intermediate </Text>
              <Text style={styles.description}>
                You can regularly, can run 1-2 miles per session
              </Text>
            </View>
            <RadioButton />
          </View>

          <View style={styles.listItem}>
            <View>
              <Text style={styles.title}> Advanced </Text>
              <Text style={styles.description}>You are a pro runner.</Text>
            </View>

            <RadioButton />
          </View>
        </ScrollView>
        <Button btnText="NEXT" />
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

  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    color: "#233249",
  },

  description: {
    fontSize: 15,
    textAlign: "left",
    color: "#233249",
    marginTop: 5,
  },

  topdescription: {
    fontSize: 15,
    marginBottom: 40,
    marginTop: -60,
    textAlign: "center",
    color: "#aaa",
  },
  radiobutton: {},
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});

export default FLevel;

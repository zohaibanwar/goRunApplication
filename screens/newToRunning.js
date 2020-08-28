import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Button from "../components/button";
import { RadioButton } from "react-native-paper";

class NewToRunning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0, //0 for YES and 1 for NO
    };
  }
  render() {
    const changeValue = () => {
      if (this.state.status == 0) {
        this.setState({ status: 1 });
        navigateAccordingly();
      } else {
        this.setState({ status: 0 });
        navigateAccordingly();
      }
    };

    const navigateAccordingly = () => {
      if (this.state.status == 0) {
        this.props.navigation.push("NewToRunningYes");
      } else {
        this.props.navigation.push("NewToRunningNo");
      }
    };

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
              <Text style={styles.title}>Are you new to running?</Text>

              <View style={{ marginTop: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <RadioButton onPress={changeValue} />
                  <Text style={styles.description}>Yes</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <RadioButton onPress={changeValue} />
                  <Text style={styles.description}>No</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* <Button btnText="NEXT" /> */}
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
    textAlign: "center",
    alignSelf: "center",
    color: "#233249",
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

export default NewToRunning;

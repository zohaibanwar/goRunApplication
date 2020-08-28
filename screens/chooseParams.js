import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Picker,
} from "react-native";
import Button from "../components/button";

var ageList = [];
var weightList = [];
var genderList = ["Male", "Female"];
var heightList = ["Dummy 1", "Dummy 2", "Dummy 3"];

class Params extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAge: 0,
      selectedHeight: 0,
      selectedWeight: 0,
      selectedGender: 0,
    };
    this.generateAgeList();
    this.generateWeightList();
  }

  generateAgeList() {
    const AGE_LIST_START = 7;
    const AGE_LIST_LIMIT = 70;
    for (let index = AGE_LIST_START; index <= AGE_LIST_LIMIT; index++) {
      ageList.push(`${index}`);
    }
  }

  generateWeightList() {
    const WEIGHT_LIST_START = 40;
    const WEIGHT_LIST_END = 120;
    for (let index = WEIGHT_LIST_START; index <= WEIGHT_LIST_END; index++) {
      weightList.push(`${index} KG`);
    }
  }

  gotoNextScreen = () => {
    this.props.navigation.push("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar style="auto" />
          <Text style={styles.support}>Choose your Parameters</Text>
          <View style={styles.devider} />
          <Text style={styles.smallTex}>
            We Calculate burned calories. track Body Mass index and adapt your
            training routine based on your physical parameters. please fill in
            the forms responsibly
          </Text>
          <TouchableOpacity style={styles.list} onPress={this.onPress}>
            <Text style={styles.lable}>Age</Text>
            <Picker
              style={styles.smallLable}
              selectedValue={this.state.selectedAge}
              onValueChange={(value) => this.setState({ selectedAge: value })}
            >
              {ageList.map((item, index) => {
                return <Picker.Item label={item} value={index} key={index} />;
              })}
            </Picker>
            {/* <Text style={styles.smallLable}>Set</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.lable}>Weight</Text>
            <Picker
              style={styles.smallLable}
              selectedValue={this.state.selectedWeight}
              onValueChange={(value) => this.setState({ selectedWeight: value })}
            >
              {weightList.map((item, index) => {
                return <Picker.Item label={item} value={index} key={index} />;
              })}
            </Picker>
            {/* <Text style={styles.smallLable}>Set</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.lable}>Height</Text>
            <Picker
              style={styles.smallLable}
              selectedValue={this.state.selectedHeight}
              onValueChange={(value) => this.setState({ selectedHeight: value })}
            >
              {heightList.map((item, index) => {
                return <Picker.Item label={item} value={index} key={index} />;
              })}
            </Picker>
            {/* <Text style={styles.smallLable}>Set</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.lable}>Gender</Text>
            <Picker
              style={styles.smallLable}
              selectedValue={this.state.selectedGender}
              onValueChange={(value) => this.setState({ selectedGender: value })}
            >
              {genderList.map((item, index) => {
                return <Picker.Item label={item} value={index} key={index} />;
              })}
            </Picker>
            {/* <Text style={styles.smallLable}>Set</Text> */}
          </TouchableOpacity>
        </ScrollView>
        <Button btnText="NEXT" onPress={this.gotoNextScreen} />
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
  smallTex: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
  },
  list: {
    marginBottom: 10,
  },
  lable: {
    fontSize: 20,
    fontWeight: "bold",
  },
  smallLable: {
    color: "#44caac",
    marginTop: -10,
    marginLeft: -8,
  },
});

export default Params;

import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Button from "../components/shareButton";

class ShareWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: "",
    };
  }

  gotoNextScreen = () => {
    this.props.navigation.push("ShareWorkout");
  };

  render() {
    const changeText = (note) => {
      this.setState({note});
      console.warn(this.state.note);
    };

    return (
      <View style={styles.container}>
        <View>
          <StatusBar style="auto" />
          <Image
            source={require("../assets/close.png")}
            style={styles.crossImageStyle}
          />
          <Text style={styles.support}>Share Workout</Text>
        </View>

        <ScrollView
          style={styles.viewInsideScrollview}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View style={styles.viewHeader}>
              <TouchableOpacity style={styles.viewSelectImage}>
                <Image source={require("../assets/cameraselectimage.png")} />
              </TouchableOpacity>

              <View style={styles.topTabs}>
                <View style={styles.tab}>
                  <Text style={styles.topText}>DISTANCE</Text>
                  <Text style={styles.centerText}>0.00</Text>
                  <Text style={styles.bottomText}>mi</Text>
                </View>

                <View style={styles.tab}>
                  <Text style={styles.topText}>TIME</Text>
                  <Text style={styles.centerText}>00.00</Text>
                  <Text style={styles.bottomText}>min</Text>
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
            </View>

            <View style={{ flex: 1 }}>
              <View style={styles.viewCenterDes}>
                <Text style={styles.textFeeling}>FEELING</Text>
                <Text style={styles.textChallenging}>CHALLENGING</Text>
              </View>
              <View style={styles.devider}></View>
              <View>
                <TextInput
                  onChangeText={changeText}
                  style={styles.addNoteGrey}
                  placeholder={"Add a note..."}
                ></TextInput>
                <TouchableOpacity>
                  <Text style={styles.addNoteGreen}>Add a note...</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        <Button btnText="SHARE" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 50,
    padding: "5%",
    flex: 1,
  },
  crossImageStyle: {
    width: 15,
    height: 15,
    tintColor: "black",
  },
  support: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#233249",
  },
  bigBlackText: {
    fontSize: 20,
    color: "#8A8487",
    textAlign: "center",
  },
  viewHeader: { marginTop: 15, elevation: 5 },
  viewSelectImage: {
    backgroundColor: "#44caac",
    alignItems: "center",
    padding: "20%",
  },
  topTabs: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
  tab: {
    borderRightColor: "gray",
    borderRightWidth: 1,
    width: "25%",
  },
  tabX: {
    width: "25%",
  },
  topText: {
    fontSize: 14,
    textAlign: "center",
  },
  centerText: {
    color: "#44caac",
    fontSize: 25,
    marginTop: -5,
    marginBottom: -5,
    textAlign: "center",
  },
  bottomText: {
    fontSize: 12,
    color: "#aaa",
    textAlign: "center",
  },
  viewCenterDes: {
    flex: 1,
    marginTop: "10%",
  },
  textFeeling: {
    color: "#44caac",
    fontSize: 17,
    fontWeight: "200",
  },
  textChallenging: {
    fontSize: 16,
  },
  devider: {
    borderWidth: 1,
    borderRadius: 2,
    marginTop: "5%",
    marginBottom: "5%",
    borderColor: "#E2E2E2",
    marginBottom: "10%",
  },
  addNoteGreen: {
    color: "#44caac",
    fontSize: 17,
    fontWeight: "200",
    marginTop: 5,
  },
  addNoteGrey: {
    fontSize: 15,
    color: "#aaa",
  },
  viewInsideScrollview: {
    flex: 1,
  },
});

export default ShareWorkout;

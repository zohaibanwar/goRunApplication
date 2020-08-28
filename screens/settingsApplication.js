import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Slider from "../components/slider";
import Button from "../components/buttonGreen";
import ButtonWhite from "../components/buttonWhite";

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Image source={require("../assets/path.png")} />
          <Text style={styles.support}>Settings</Text>
          <View style={styles.devider} />

          <View style={styles.viewButtons}>
            <TouchableOpacity style={styles.buttonUnselected}>
              <Text style={styles.textUnSelected}>Outdoor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSelected}>
              <Text style={styles.textSelected}>Treadmil</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewMyParmeters}>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>GPS</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Pause run for calls</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>
                Keep tracking when workout is finished
              </Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewBottom} />
          </View>

          <View style={styles.viewGoogleFit}>
            <Text style={styles.textLightHeading}>VOICE VOLUME</Text>
            <View style={styles.viewHorizontal}>
              <Image
                style={styles.imageStyle}
                source={require("../assets/speakerhollow.png")}
              />
              <View style={styles.viewSlider}>
                <Slider />
              </View>
              <Image
                style={styles.imageStyle}
                source={require("../assets/speakerfilled.png")}
              />
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Trainer</Text>
              <Text style={styles.textStyleEndView}>Eric</Text>
            </View>
            <View style={styles.viewBottom} />
          </View>

          <View style={styles.viewGoogleFit}>
            <Text style={styles.textLightHeading}>MOTIVATION CUES</Text>
            <View style={styles.viewCuesContainer}>
              <View style={styles.viewButtonCues}>
                <ButtonWhite btnText={"None"} />
              </View>
              <View style={styles.viewButtonCues}>
                <ButtonWhite btnText={"Low"} />
              </View>
              <View style={styles.viewButtonCues}>
                <Button btnText={"Moderate"} />
              </View>
              <View style={styles.viewButtonCues}>
                <ButtonWhite btnText={"Intensive"} />
              </View>
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>System Events</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Audio Feedbacks</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewBottom} />
          </View>

          <View style={styles.viewGoogleFit}>
            <Text style={styles.textLightHeading}>VOICE FEEDBACK INTERVAL</Text>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Time</Text>
              <Text style={styles.textStyleEndView}>10 min</Text>
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textGrey}>1</Text>
              <View style={styles.viewSlider}>
                <Slider />
              </View>
              <Text style={styles.textGrey}>60</Text>
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Distance</Text>
              <Text style={styles.textStyleEndView}>1 min</Text>
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textGrey}>1</Text>
              <View style={styles.viewSlider}>
                <Slider />
              </View>
              <Text style={styles.textGrey}>10</Text>
            </View>
            <View style={styles.viewBottom} />
          </View>

          <View style={styles.viewGoogleFit}>
            <Text style={styles.textLightHeading}>AUDIO FEEDBACK</Text>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Time</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Distance</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Pace</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Speed</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
            <View style={styles.viewHorizontal}>
              <Text style={styles.textStyleStartView}>Calories</Text>
              <Switch style={styles.textStyleEndView} />
            </View>
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
    paddingBottom: 40,
    width: "100%",
    height: "100%",
  },
  support: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#233249",
  },
  viewMyParmeters: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    paddingBottom: 25,
  },
  viewGoogleFit: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    paddingBottom: 25,
    marginTop: 10,
  },
  viewHorizontal: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  viewCuesContainer: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 5,
    elevation: 2,
    padding: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  viewMembership: {
    paddingBottom: 25,
    marginTop: 10,
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
  textGrey: {
    fontSize: 20,
    color: "gray",
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
  viewButtons: {
    elevation: 8,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    borderRadius: 5,
    height: "5%",
    marginBottom: 20,
  },
  buttonSelected: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#44caac",
    width: "50%",
  },
  buttonUnselected: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "50%",
  },
  textSelected: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  textUnSelected: {
    fontSize: 18,
    color: "#8A8487",
    textAlign: "center",
  },
  imageStyle: {
    alignSelf: "center",
    padding: 5,
  },
  viewSlider: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  textLightHeading: {
    fontSize: 18,
    color: "#aaa",
    alignSelf: "flex-start",
    width: "100%",
  },
  viewBottom: {
    borderBottomColor: "gray",
    padding: 2,
  },
  viewButtonCues: {
    width: "25%",
  },
});

export default Settings;

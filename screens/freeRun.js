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
import CountDown from "react-native-countdown-component";
import SliderItem from "../components/sliderItem";
import Swiper from "react-native-swiper";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

class FreeRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      isConterCompleted: false,
      isStopwatchStart: false,
    };
  }

  startStopTimer = () => {
    this.setState({ isStopwatchStart: !this.state.isStopwatchStart });
  };

  counterCompleted = () => {
    this.setState({ isConterCompleted: true });
  };

  counterStarted = () => {
    this.setState({ isStart: true });
  };

  gotoSettingsScreen = () => {
    this.props.navigation.push("SettingsGps");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.viewHeader}>
          <TouchableOpacity style={styles.viewHeader} onPress={this.gotoSettingsScreen}>
            <Image
              source={require("../assets/settings.png")}
              style={styles.imageStyleHeader}
            />
            <Text style={styles.textGps}>GPS</Text>
          </TouchableOpacity>
          
          <View style={{flex:1}}/>

          <TouchableOpacity style={styles.viewMusic}>
            <Image
              source={require("../assets/music.png")}
              style={styles.imageStyleHeader}
            />
          </TouchableOpacity>
        </View>

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

        {this.state.isConterCompleted ? (
          <Swiper
            style={styles.swiperStyle}
            showsButtons={true}
            horizontal={true}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.dot} />}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
          >
            {/* <SliderItemTime
              style={styles.sliderStyle}
              upperText="Time"
              // centerText="00:02"
              start={this.state.isStopwatchStart}
              bottomText="min"
            /> */}

            <View style={styles.bigTabInside}>
              <Text style={styles.bigUpperText}>Time</Text>
              <Stopwatch
                start={this.state.isStopwatchStart}
                options={{
                  container: {
                    backgroundColor: "#44caac",
                    flexDirection: "row",
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  text: {
                    fontSize: 50,
                    color: "white",
                    fontWeight: "bold",
                  },
                }}
              />
              <Text style={styles.bigBottomText}>min</Text>
            </View>

            <SliderItem
              style={styles.sliderStyle}
              upperText="Calories"
              centerText="2.6"
              bottomText="kcal"
            />

            <SliderItem
              style={styles.sliderStyle}
              upperText="Pace"
              centerText="00:00"
              bottomText="min/mi"
            />

            <SliderItem
              style={styles.sliderStyle}
              upperText="Distance"
              centerText="0.01"
              bottomText="mi"
            />
          </Swiper>
        ) : (
          <View>
            {this.state.isStart ? (
              <View style={styles.bigTab}>
                <CountDown
                  until={5}
                  onFinish={this.counterCompleted}
                  onPress={() => alert("hello")}
                  timeToShow={["S"]}
                  digitTxtStyle={styles.innerText}
                  digitStyle={styles.digitStyles}
                  timeLabels={{ d: "", h: "", m: "", s: "" }}
                />
              </View>
            ) : // <Text style={styles.innerText}>00</Text>
            null}
          </View>
        )}

        <View style={styles.options}>
          <Image source={require("../assets/camera.png")} />
          {this.state.isConterCompleted ? (
            <View style={styles.btnWatch}>
              <TouchableOpacity
                style={styles.imageStyle}
                onPress={this.startStopTimer}
              >
                <Image source={require("../assets/pause.png")} />
              </TouchableOpacity>
              <View style={styles.deviderH} />
              <View style={styles.imageStyle}>
                <Image source={require("../assets/flag.png")} />
              </View>
            </View>
          ) : (
            <View style={styles.btn}>
              <Button btnText="Start" onPress={this.counterStarted} />
            </View>
          )}
          {/* <View style={styles.btn}>
            <Button btnText="Start" onPress={this.counterStarted} />
          </View>*/}
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
    paddingTop: 50,
  },
  support: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#233249",
  },
  dot: {
    backgroundColor: "transparent",
  },
  deviderH: {
    borderRightColor: "white",
    borderRightWidth: 1,
  },
  bigBottomText: {
    color: "white",
    fontSize: 22,
  },
  bigUpperText: {
    fontSize: 28,
    color: "white",
  },
  bigTabInside: {
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#44caac",
    marginLeft: "10%",
    marginRight: "10%",
    padding: 30,
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
    flexDirection: "row",
  },
  digitStyles: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    padding: 50,
  },
  sliderStyle: {},
  buttonText: {
    color: "#44caac",
    fontWeight: "bold",
    fontSize: 50,
  },
  btnWatch: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#44caac",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  imageStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewHeader: {
    flexDirection: "row",
  },
  textGps: {
    color: "#44caac",
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
    alignSelf: 'center',
    marginLeft: 8
  },
  imageStyleHeader: {
    height: 22,
    width: 22
  },
});

export default FreeRun;

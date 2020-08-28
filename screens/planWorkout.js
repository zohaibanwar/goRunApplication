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
import Swiper from "react-native-swiper";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

class FreeRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      isStopwatchStart: false,
      isWorkoutFinished: false,
      isWarmupStarted: true,
      isJogStarted: false,
      isWalkStarted: false,
      isRunningStarted: false,
      isCoolDownStarted: false,
      currentIndex: -1
    };
    this.swiper = null;
    this.coundown = null;
  }

  workoutStarted = () => {
    this.setState({ isStarted: true });
  };

  workoutFinished = () => {
    console.warn("workout finished");
    if (!this.state.isWorkoutFinished) {
      this.setState({ isWorkoutFinished: true });
      this.props.navigation.push("WorkoutComplete");
    }
  };

  counterStarted = () => {
    this.setState({ isStart: true });
  };

  gotoSettingsScreen = () => {
    this.props.navigation.push("SettingsGps");
  };

  scrollToIndex = (scrollby, index) => {
    if (this.swiper != null) {
      switch (index) {
        case 1:
          {
            this.setState({ isWarmupStarted: false, isWalkStarted: true, currentIndex: index });
            console.log(index);
            this.swiper.scrollBy(scrollby, true);
          }
          break;
        case 2:
          {
            this.setState({ isWalkStarted: false, isJogStarted: true, currentIndex: index  });
            console.log(index);
            this.swiper.scrollBy(scrollby, true);
          }
          break;
        case 3:
          {
            this.setState({ isJogStarted: false, isRunningStarted: true, currentIndex: index  });
            console.log(index);
            this.swiper.scrollBy(scrollby, true);
          }
          break;
        case 4:
          {
            this.setState({ isRunningStarted: false, isCoolDownStarted: true, currentIndex: index  });
            console.log(index);
            this.swiper.scrollBy(scrollby, true);
          }
          break;
        case 5: {
          console.log(index);
          if (!this.state.isWorkoutFinished) {
            this.setState({ isWorkoutFinished: true });
            this.props.navigation.push("WorkoutComplete");
          }
        }
      }
    } else {
      console.log("Swiper is null!");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.viewHeader}>
          <TouchableOpacity
            style={styles.viewHeader}
            onPress={this.gotoSettingsScreen}
          >
            <Image
              source={require("../assets/settings.png")}
              style={styles.imageStyleHeader}
            />
            <Text style={styles.textGps}>GPS</Text>
          </TouchableOpacity>

          <View style={{ flex: 1 }} />

          <TouchableOpacity style={styles.viewMusic}>
            <Image
              source={require("../assets/music.png")}
              style={styles.imageStyleHeader}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.support}>Workout</Text>
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

        {this.state.isStarted ? (
          <Swiper
            ref={(swiper) => {
              this.swiper = swiper;
            }}
            containerStyle={styles.swiperStyle}
            showsButtons={true} 
            horizontal={true}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.dot} />}
            nextButton={
              <TouchableOpacity onPress={() => this.startStopTimer}>
                <Text style={styles.buttonText}>›</Text>
              </TouchableOpacity>
            }
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            scrollEnabled={false}
          >
            <View style={styles.bigTab}>
              <View style={styles.viewSliderItem}>
                <Image
                  style={styles.planImageStyle}
                  source={require("../assets/warmup.png")}
                ></Image>
                <Text style={styles.bigUpperText}>WARM UP</Text>
              </View>
              {/* {this.state.isWarmupStarted ? (
                <Timer
                  ref={(ref) => {
                    this.coundown = ref;
                  }}
                  totalDuration={5000}
                  start={this.state.isWarmupStarted}
                  handleFinish={() => this.scrollToIndex(1, 1)}
                  getTime={this.getFormattedTime}
                />
              ) : null} */}
              <Timer
                ref={(ref) => {
                  this.coundown = ref;
                }}
                totalDuration={15000}
                start={this.state.isWarmupStarted}
                handleFinish={() => this.scrollToIndex(1, 1)}
                getTime={this.getFormattedTime}
              />
            </View>

            <View style={styles.bigTab}>
              <View style={styles.viewSliderItem}>
                <Image
                  style={styles.planImageStyle}
                  source={require("../assets/warmup.png")}
                ></Image>
                <Text style={styles.bigUpperText}>WALK</Text>
              </View>
              {/* {this.state.isWalkStarted ? (
                <Timer
                  totalDuration={5000}
                  start={this.state.isWalkStarted}
                  handleFinish={() => this.scrollToIndex(1, 2)}
                  getTime={this.getFormattedTime}
                />
              ) : null} */}
              <Timer
                totalDuration={15000}
                start={this.state.isWalkStarted}
                handleFinish={() => this.scrollToIndex(1, 2)}
                getTime={this.getFormattedTime}
              />
            </View>

            <View style={styles.bigTab}>
              <View style={styles.viewSliderItem}>
                <Image
                  style={styles.planImageStyle}
                  source={require("../assets/warmup.png")}
                ></Image>
                <Text style={styles.bigUpperText}>JOG</Text>
              </View>
              {/* {this.state.isJogStarted ? (
                <Timer
                  totalDuration={5000}
                  handleFinish={() => this.scrollToIndex(1, 3)}
                  start={this.state.isJogStarted}
                  getTime={this.getFormattedTime}
                />
              ) : null} */}
              <Timer
                totalDuration={15000}
                handleFinish={() => this.scrollToIndex(1, 3)}
                start={this.state.isJogStarted}
                getTime={this.getFormattedTime}
              />
            </View>

            <View style={styles.bigTab}>
              <View style={styles.viewSliderItem}>
                <Image
                  style={styles.planImageStyle}
                  source={require("../assets/warmup.png")}
                ></Image>
                <Text style={styles.bigUpperText}>RUN</Text>
              </View>
              {/* {this.state.isRunningStarted ? (
                <Timer
                  totalDuration={5000}
                  handleFinish={() => this.scrollToIndex(1, 4)}
                  start={this.state.isRunningStarted}
                  getTime={this.getFormattedTime}
                />
              ) : null} */}
              <Timer
                totalDuration={15000}
                handleFinish={() => this.scrollToIndex(1, 4)}
                start={this.state.isRunningStarted}
                getTime={this.getFormattedTime}
              />
            </View>

            <View style={styles.bigTab}>
              <View style={styles.viewSliderItem}>
                <Image
                  style={styles.planImageStyle}
                  source={require("../assets/warmup.png")}
                ></Image>
                <Text style={styles.bigUpperText}>COOL DOWN</Text>
              </View>
              {/* {this.state.isCoolDownStarted ? (
                <Timer
                  totalDuration={5000}
                  handleFinish={() => this.scrollToIndex(1, 5)}
                  start={this.state.isCoolDownStarted}
                  getTime={this.getFormattedTime}
                />
              ) : null} */}
              <Timer
                totalDuration={15000}
                handleFinish={() => this.scrollToIndex(1, 5)}
                start={this.state.isCoolDownStarted}
                getTime={this.getFormattedTime}
              />
            </View>
          </Swiper>
        ) : null}

        <View style={styles.options}>
          <Image source={require("../assets/camera.png")} />
          {this.state.isStarted ? (
            <View style={styles.btnWatch}>
              <TouchableOpacity style={styles.imageStyle}>
                <Image source={require("../assets/pause.png")} />
              </TouchableOpacity>

              <View style={styles.deviderH} />

              <TouchableOpacity
                onPress={this.workoutFinished}
                style={styles.imageStyle}
              >
                <Image source={require("../assets/flag.png")} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btn}>
              <Button btnText="Start" onPress={this.workoutStarted} />
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
    fontSize: 22,
    color: "black",
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
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: "center",
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
    width: 100,
    paddingTop: 40,
    paddingBottom: 40,
  },
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
  viewSliderItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  planImageStyle: {
    marginRight: 10,
  },
  swiperStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewHeader: {
    flexDirection: "row",
  },
  textGps: {
    color: "#44caac",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: 8,
  },
  imageStyleHeader: {
    height: 22,
    width: 22,
  },
});

export default FreeRun;

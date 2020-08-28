import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Switch,
  ScrollView,
} from "react-native";

class TrainingPlan extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <StatusBar style="auto" />

          <Image
            source={require("../assets/pathsettings.png")}
            style={{ width: 15, height: 15, tintColor: "#44caac" }}
          />
          <Text style={styles.support}>Select training plan</Text>

          <View style={styles.devider} />

          <View>
            {/* first blue view */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewBackground}>
                <View style={styles.whiteCircle}>
                  <View style={styles.circle}>
                    <Image
                      source={require("../assets/walkweightloss.png")}
                      style={{ alignSelf: "center" }}
                    />
                  </View>
                </View>

                <Text style={styles.textStyleGrey}>
                  Walking for weight loss
                </Text>

                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/infoplan.png")}
                    style={styles.styleInfoImage}
                  />
                </View>
              </View>
            </View>
            {/* end of first blue view */}

            <View style={{ width: 90 }}>
              <Image
                source={require("../assets/downarrow.png")}
                style={styles.styleArrowDown}
              />
            </View>

            <View>
              {/* first blue view */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.viewBackgroundStartRunning}>
                  <View style={styles.whiteCircle}>
                    <View style={styles.circleStartRunning}>
                      <Image
                        source={require("../assets/startrunning.png")}
                        style={{ alignSelf: "center" }}
                      />
                    </View>
                  </View>

                  <Text style={styles.textStyleGrey}>Start Running</Text>

                  <View style={{ flex: 1 }}>
                    <Image
                      source={require("../assets/infoplan.png")}
                      style={styles.styleInfoImage}
                    />
                  </View>
                </View>
              </View>
              {/* end of first blue view */}

              <View style={{ width: 90 }}>
                <Image
                  source={require("../assets/downarrow.png")}
                  style={styles.styleArrowDown}
                />
              </View>
            </View>

            <View>
              {/* first blue view */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.viewBackgroundRunning}>
                  <View style={styles.whiteCircle}>
                    <View style={styles.circleRunning}>
                      <Image
                        source={require("../assets/tick.png")}
                        style={{ alignSelf: "center" }}
                      />
                    </View>
                  </View>

                  <Text style={styles.textStyleGrey}>
                    Running for weight loss
                  </Text>

                  <View style={{ flex: 1 }}>
                    <Image
                      source={require("../assets/infoplan.png")}
                      style={styles.styleInfoImage}
                    />
                  </View>
                </View>
              </View>
              {/* end of first blue view */}

              <View style={{ width: 90 }}>
                <Image
                  source={require("../assets/downarrow.png")}
                  style={styles.styleArrowDown}
                />
              </View>
            </View>

            <View>
              {/* first blue view */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.viewBackgroundFiveK}>
                  <View style={styles.whiteCircle}>
                    <View style={styles.circleFiveK}>
                      <Text style={styles.circleTextInsideFiveK}>5K</Text>
                    </View>
                  </View>

                  <Text style={styles.textStyleGrey}>5K</Text>

                  <View style={{ flex: 1 }}>
                    <Image
                      source={require("../assets/infoplan.png")}
                      style={styles.styleInfoImage}
                    />
                  </View>
                </View>
              </View>
              {/* end of first blue view */}

              <View style={{ width: 90 }}>
                <Image
                  source={require("../assets/downarrow.png")}
                  style={styles.styleArrowDown}
                />
              </View>
            </View>

            <View>
              {/* first blue view */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.viewBackgroundTenK}>
                  <View style={styles.whiteCircle}>
                    <View style={styles.circleTenK}>
                      <Text style={styles.circleTextInsideTenK}>10K</Text>
                    </View>
                  </View>

                  <Text style={styles.textStyleGrey}>10K</Text>

                  <View style={{ flex: 1 }}>
                    <Image
                      source={require("../assets/infoplan.png")}
                      style={styles.styleInfoImage}
                    />
                  </View>
                </View>
              </View>
              {/* end of first blue view */}

              <View style={{width: 90}}>
                <Image
                  source={require("../assets/downarrow.png")}
                  style={styles.styleArrowDown}
                />
              </View>
            </View>

            <View>
              {/* first blue view */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.viewBackgroundFifteenK}>
                  <View style={styles.whiteCircle}>
                    <View style={styles.circleFifteenK}>
                      <Text style={styles.circleTextInsideFifteenK}>21K</Text>
                    </View>
                  </View>

                  <Text style={styles.textStyleGrey}>Half Marathon</Text>

                  <View style={{ flex: 1 }}>
                    <Image
                      source={require("../assets/infoplan.png")}
                      style={styles.styleInfoImage}
                    />
                  </View>
                </View>
              </View>
              {/* end of first blue view */}

            </View>
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
    height: "100%",
  },
  support: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#233249",
  },
  textStyleGrey: {
    fontSize: 19,
    color: "#FFFFFF",
    marginLeft: 10,
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
  circleTextInsideFiveK: {
    alignSelf: "center",
    fontSize: 27,
    color: "#72B30D"
  },
  circleTextInsideTenK: {
    alignSelf: "center",
    fontSize: 27,
    color: "#C538E7"
  },
  circleTextInsideFifteenK: {
    alignSelf: "center",
    fontSize: 27,
    color: "#04448C"
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
  circle: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#048DC4",
  },
  circleStartRunning: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#DAA821",
  },
  circleRunning: {
    width: 70,
    height: 70,
    backgroundColor: "#ED374E",
    borderRadius: 40,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#ED374E",
  },
  circleFiveK: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#72B30D",
  },
  circleTenK: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#C538E7",
  },
  circleFifteenK: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#04448C",
  },
  whiteCircle: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    borderRightWidth: 5,
    borderColor: "white",
  },
  viewBackground: {
    backgroundColor: "#048DC4",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 10,
    borderColor: "white",
    flexDirection: "row",
  },
  viewBackgroundStartRunning: {
    backgroundColor: "#DAA821",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 10,
    borderColor: "white",
    flexDirection: "row",
  },
  viewBackgroundRunning: {
    backgroundColor: "#ED374E",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 10,
    borderColor: "white",
    flexDirection: "row",
  },
  viewBackgroundFiveK: {
    backgroundColor: "#72B30D",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 10,
    borderColor: "white",
    flexDirection: "row",
  },
  viewBackgroundTenK: {
    backgroundColor: "#C538E7",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 10,
    borderColor: "white",
    flexDirection: "row",
  },
  viewBackgroundFifteenK: {
    backgroundColor: "#04448C",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 10,
    borderColor: "white",
    flexDirection: "row",
  },
  styleInfoImage: {
    height: 28,
    width: 28,
    alignSelf: "flex-end",
    marginRight: 15,
  },
  styleArrowDown: {
    height: 32,
    width: 32,
    alignSelf: "center",
    tintColor: "#ACACAC",
  },
});

export default TrainingPlan;

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

class BoostYourResults extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <StatusBar style="auto" />

          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ alignSelf: "center" }}
              source={require("../assets/path.png")}
            />
            <Text style={styles.textRestore}>Restore</Text>
          </View>
          <Text style={styles.support}>Boost your results!</Text>

          <View style={styles.devider} />

          <View style={{ padding: 8 }}>
            <View style={styles.viewImagesContainer}>
              <View style={styles.viewLeftImage}>
                <Image style={(style = styles.smallCircleImage)} />
              </View>

              <View style={styles.viewLeftMeduimImage}>
                <Image style={(style = styles.mediumCircleImage)} />
              </View>

              <View style={{ zIndex: 1 }}>
                <Image style={(style = styles.largeCircleImage)} />
              </View>

              <View style={styles.viewRightMediumImage}>
                <Image style={(style = styles.mediumCircleImage)} />
              </View>

              <View style={{ zIndex: -1 }}>
                <View style={styles.viewRightImage}>
                  <Image style={(style = styles.smallCircleImage)} />
                </View>
              </View>
            </View>

            <View style={styles.viewCardWhite}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textBlackBold}>Fantastic!</Text>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text style={styles.textGreyNormal}>john_doe</Text>
                </View>
              </View>

              <View style={styles.viewImageContiner}>
                <Image
                  source={require("../assets/star.png")}
                  style={styles.imageStar}
                />
                <Image
                  source={require("../assets/star.png")}
                  style={styles.imageStar}
                />
                <Image
                  source={require("../assets/star.png")}
                  style={styles.imageStar}
                />
                <Image
                  source={require("../assets/star.png")}
                  style={styles.imageStar}
                />
                <Image
                  source={require("../assets/star.png")}
                  style={styles.imageStar}
                />
              </View>

              <View style={{ marginTop: 15, flex: 1 }}>
                <Text style={styles.textNormal}>
                  I can say i am happy with this app. 15 pounds off in 30 days!
                </Text>
              </View>
            </View>

            <View style={styles.bestValueContainer}>
              <View style={{ width: "50%" }}>
                <View style={styles.viewBestValePlanYellow}>
                  <Text style={styles.textWhiteSmall}>Best Value Plan</Text>
                </View>

                <View style={styles.viewCardBestValueGreen}>
                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.textWhiteBoldLarge}>Yearly</Text>
                  </View>
                  <Text style={styles.textWhiteNormal}>1000$/Year</Text>
                  <Text style={styles.textWhiteSmall}>
                    It's just 3$ per month billed annually
                  </Text>

                  <View style={styles.viewCardWhiteInsideGreen}>
                    <Text style={styles.textGreenBold}>50% OFF</Text>
                  </View>
                </View>
              </View>

              <View style={styles.viewCardBestValueWhite}>
                <Text style={styles.textGreenBoldLarge}>FREE TRAIL</Text>
                <Text style={styles.textGreenSmall}>
                  50% per month after FREE 7-days trail
                </Text>
              </View>
            </View>

            <View style={styles.viewButtonGreen}>
              <Text style={styles.textWhiteNormal}>Continue</Text>
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
    paddingTop: 50,
    width: "100%",
    height: "100%",
  },
  support: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#233249",
  },
  textRestore: {
    fontSize: 18,
    textAlign: "right",
    color: "#233249",
    flex: 1,
  },
  devider: {
    borderWidth: 5,
    borderRadius: 6,
    marginTop: 10,
    borderColor: "#f6f7f9",
    marginBottom: 10,
  },
  Viewcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  viewCardWhite: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: "10%",
    //for android we use elevation for shadow
    elevation: 5,
    //for ios we use shadow
    shadowColor: "#03A9F4",
    shadowOffset: { width: 0, height: 13 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    padding: "4%",
    paddingBottom: "10%",
  },
  viewCardBestValueGreen: {
    backgroundColor: "#44CAAC",
    borderRadius: 20,
    //for android we use elevation for shadow
    elevation: 4,
    //for ios we use shadow
    shadowColor: "#03A9F4",
    shadowOffset: { width: 0, height: 13 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginRight: 5,
    alignItems: "center",
    flex: 1,
    marginTop: -10
  },
  viewButtonGreen: {
    backgroundColor: "#44CAAC",
    borderRadius: 10,
    //for android we use elevation for shadow
    elevation: 3,
    //for ios we use shadow
    shadowColor: "#03A9F4",
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    marginRight: 5,
    alignItems: "center",
    flex: 1,
    padding: 15,
    marginTop: "10%",
  },
  viewCardBestValueWhite: {
    backgroundColor: "white",
    borderRadius: 20,
    //for android we use elevation for shadow
    elevation: 4,
    //for ios we use shadow
    shadowColor: "#03A9F4",
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    width: "50%",
    marginLeft: 5,
    borderColor: "#44CAAC",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
    flex: 1,
  },
  viewCardWhiteInsideGreen: {
    backgroundColor: "white",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    alignItems: "center",
    marginTop: 5,
    borderColor: "#44CAAC",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  viewBestValePlanYellow: {
    backgroundColor: "#FDBF00",
    borderRadius: 8,
    alignSelf: "center",
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: -10,
  },
  textBlackBold: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  textWhiteBold: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  textWhiteBoldLarge: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  textGreenBoldLarge: {
    fontSize: 20,
    color: "#44CAAC",
    fontWeight: "bold",
  },
  textGreenBold: {
    fontSize: 18,
    color: "#44CAAC",
    fontWeight: "bold",
  },
  textNormal: {
    fontSize: 18,
    color: "black",
  },
  textWhiteNormal: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  textWhiteSmall: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textGreenSmall: {
    fontSize: 15,
    color: "#44CAAC",
    fontWeight: "bold",
    textAlign: "center",
  },
  textGreyNormal: {
    fontSize: 18,
    color: "silver",
  },
  viewImageContiner: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  imageStar: {
    marginRight: 5,
  },
  bestValueContainer: {
    marginTop: "10%",
    flexDirection: "row",
  },
  smallCircleImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: "blue",
    borderWidth: 4,
    borderColor: "white",
  },
  mediumCircleImage: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    backgroundColor: "green",
    borderWidth: 4,
    borderColor: "white",
  },
  largeCircleImage: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    backgroundColor: "pink",
    borderWidth: 4,
    borderColor: "white",
  },
  viewImagesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  viewLeftImage: {
    marginRight: -20,
  },
  viewLeftMeduimImage: {
    marginRight: -25,
  },
  viewRightImage: {
    marginLeft: -20,
  },
  viewRightMediumImage: {
    marginLeft: -25,
  },
});
export default BoostYourResults;

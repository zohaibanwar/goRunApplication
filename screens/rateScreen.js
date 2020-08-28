import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import ButtonWhite from "../components/buttonWhite";

const rateScreen = () => {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.container}>
        <View>
          <Image
            source={require("../assets/pathsettings.png")}
            style={Styles.pathImageStyle}
          />
        </View>
        <Text style={Styles.textStyle}>Rate this app</Text>
        <View style={Styles.devider} />
        <View style={Styles.starView}>
          <Image style={Styles.star1} source={require("../assets/star.png")} />
          <Image style={Styles.star2} source={require("../assets/star.png")} />
          <Image style={Styles.star3} source={require("../assets/star.png")} />
          <Image style={Styles.star4} source={require("../assets/star.png")} />
          <Image style={Styles.star5} source={require("../assets/star.png")} />
        </View>

        <View>
          <Text style={Styles.text2style}>
            We're doing out best to make the app helpful and easy to use.
          </Text>
          <Text style={Styles.text3style}>
            In case you have any questions or comments out team is happy to help
            you.
          </Text>
        </View>
        <View style={Styles.btnStyle}>
          {/* <Button mode="contained" color="white">
            Rate in the App Store
          </Button> */}
          <ButtonWhite
            btnText={"Rate in the App Store"}
            style={Styles.btnStyle}
          />

          <Button color="#fff">Contact Support</Button>
        </View>
      </View>
    </View>
  );
};

export default rateScreen;

const Styles = StyleSheet.create({
  container: {
    padding: "5%",
    paddingTop: 40,
    backgroundColor: "#44caac",
    height: "100%",
    width: "100%",
  },

  textStyle: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
  },
  devider: {
    borderWidth: 3,
    borderRadius: 6,
    marginTop: 7,
    borderColor: "#76D3C1",
    width: "100%",
  },

  pathImageStyle: {
    width: 15,
    height: 15,
    tintColor: "white",
    marginBottom: 20,
  },

  starView: {
    flex: 1,
    marginTop: "25%",
    alignSelf: "center",
    flexDirection: "row",
  },
  star1: {
    marginTop: 18,
    height: 30,
    width: 30,
  },
  star2: {
    marginTop: 9,
    height: 40,
    width: 40,
  },
  star3: {
    height: 50,
    width: 50,
  },
  star4: {
    marginTop: 9,
    height: 40,
    width: 40,
  },
  star5: {
    marginTop: 18,
    height: 30,
    width: 30,
  },
  text2style: {
    color: "white",
    fontSize: 34,
    textAlign: "center",
  },
  text3style: {
    color: "white",
    fontSize: 26,
    textAlign: "center",
    paddingBottom: "45%",
  },

  btnStyle: {
    padding: 50,
    borderRadius: 5,
    paddingBottom: "35%",
    fontSize: 16,
  },
});

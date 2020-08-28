import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import SliderItem from "../components/sliderItem";
import Swiper from "react-native-swiper";

class FreerRunStart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
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

        <Swiper
          style={styles.swiperStyle}
          showsButtons={false}
          horizontal={true}
          activeDotColor={"#44caac"}
        >
          <SliderItem
            style={styles.sliderStyle}
            upperText="Time"
            centerText="00:02"
            bottomText="min"
          />

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

        <View style={styles.options}>
          <Image source={require("../assets/camera.png")} />
          <View style={styles.btn}>
            <Image source={require("../assets/pause.png")} />
            <View style={styles.deviderH} />
            <Image source={require("../assets/flag.png")} />
          </View>
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
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#44caac",
    padding: 13,
    paddingLeft: 40,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 40,
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
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 50,
    backgroundColor: "#44caac",
    padding: 20,
  },
  innerText: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold",
  },
  bigUpperText: {
    fontSize: 28,
    color: "white",
  },
  bigBottomText: {
    color: "white",
    fontSize: 22,
  },
  deviderH: {
    borderRightColor: "white",
    borderRightWidth: 1,
  },
  swiperStyle: {
  },
});

export default FreerRunStart;

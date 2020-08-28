import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";


class Home extends Component {
  render() {
    const gotoNextScreen = () => {
      this.props.navigation.push("TipsAndHelp");
    };
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          source={require("../assets/pathsettings.png")}
          style={styles.pathImageStyle}
        />
        <View style={styles.topBar}>
          <Image style={styles.prof} />
          <View style={styles.textContainer}>
            <Text style={styles.bigText}>Running for Weight Loss</Text>
            <Text style={styles.smallText}>0/24 workouts</Text>
            <View style={styles.devider} />
          </View>
        </View>

        <TouchableOpacity style={styles.sBtn}>
          <Text style={styles.sBtnText}>Today's Workout</Text>
        </TouchableOpacity>

        <View style={styles.item}>
          <Text style={styles.weekText}>Week 1</Text>
          <Text style={styles.dayText}>Day 1</Text>
          <View style={styles.smallTexts}>
            <Image source={require("../assets/rung.png")} />
            <Text style={styles.minText}>25 min</Text>
            <Image source={require("../assets/walk.png")} />
            <Text>9 min</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.Btn} onPress={gotoNextScreen}>
          <Text style={styles.sBtnText}>START</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#44caac",
    padding: "5%",
    paddingTop: 50,
  },
  devider: {
    borderWidth: 3,
    borderRadius: 6,
    marginTop: 7,
    borderColor: "#76D3C1",
    width: "100%",
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
  },
  prof: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: "red",
  },
  textContainer: {
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  bigText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  smallText: {
    color: "white",
  },
  sBtn: {
    backgroundColor: "white",
    width: "40%",
    marginLeft: "25%",
    marginTop: 30,
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  Btn: {
    backgroundColor: "white",
    width: "60%",
    marginTop: 30,
    padding: 12,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    elevation: 8,
  },
  sBtnText: {
    color: "#44caac",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 10,
    height: 280,
    padding: 20,
    elevation: 5,
  },
  weekText: {
    fontSize: 16,
  },
  dayText: {
    fontSize: 38,
    fontWeight: "bold",
  },
  smallTexts: {
    flexDirection: "row",
    alignItems: "center",
  },
  minText: {
    marginRight: 10,
  },
  pathImageStyle: {
    width: 15,
    height: 15,
    tintColor: "white",
    marginBottom: 20,
  },
});

export default Home;

/*{
   <NavigationContainer>
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: "#e91e63",
      itemStyle: { marginVertical: 5 },
    }}
  >
    <Drawer.Screen name="TipsAndHelp" component={TipsAndHelp} />
    <Drawer.Screen name="FreeRun" component={FreeRun} />
    <Drawer.Screen name="FreerRunStart" component={FreeRunStart} />
    <Drawer.Screen name="FreeRunCam" component={FreeRunCam} />
    <Drawer.Screen name="PlanWorkout" component={PlanWorkout} />
    <Drawer.Screen name="WorkoutComplete" component={WorkoutComplete} />
    <Drawer.Screen name="ShareWorkout" component={ShareWorkout} />

  </Drawer.Navigator>
</NavigationContainer>;
} */

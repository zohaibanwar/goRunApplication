import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.viewStyleImage}>
        <Image
          source={require("../assets/twitter.png")}
          style={styles.crossImageStyle}
        />
        <Image
          source={require("../assets/facebook.png")}
          style={styles.crossImageStyle}
        />
      </View>
      <Text style={styles.text}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#44caac",
    padding: 5,
    borderRadius: 5,
    elevation: 5,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    alignSelf: 'center',
    flex: 1,
    marginLeft: -50,
    fontWeight: 'bold'
  },
  crossImageStyle: {
    alignSelf: "center",
  },
  viewStyleImage: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
});

export default Button;

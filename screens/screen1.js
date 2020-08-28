import React, { Component, useState } from "react";
import { Card, Button } from "react-native-paper";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const screen = () => {
  return (
    <View>
      <ImageBackground
        style={Styles.viewoneStyle}
        source={{
          uri:
            "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        }}
      >
        <View style={Styles.viewtwoStyle}>
          <Image
            style={{
              height: "60%",
              marginTop: "80%",
              width: "97%",
              alignSelf: "center",
              borderRadius: 15,
            }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2014/09/25/23/36/man-461195__340.jpg",
            }}
          />

          <View>
            <Card style={Styles.cardStyle}>
              <Text style={Styles.textStyle}>
                Your training plan is ready. Would you like to start it now?
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  marginLeft: "23%",
                  marginRight: "23%",
                  paddingTop: "4%",
                }}
              >
                <View>
                  <TouchableOpacity
                    style={{
                      alignSelf: "center",
                      backgroundColor: "#000",
                      width: "150%",
                      borderRadius: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        alignSelf: "center",
                        fontSize: 25,
                        height: 35,
                      }}
                    >
                      Start Now
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 15 }}>
                  <Button color="#000" title={"Later"}>
                    Later
                  </Button>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Styles = StyleSheet.create({
  viewoneStyle: {
    width: "100%",
    height: "100%",
  },
  cardStyle: {
    alignSelf: "center",
    backgroundColor: "white",
    width: "97%",
    marginTop: -250,
    paddingTop: 232,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 14,
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 23,
    padding: 15,
    marginTop: -190,
    color: "#292929",
  },
});

export default screen;

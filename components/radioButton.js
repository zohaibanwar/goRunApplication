import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";

const MyComponent = () => {
  const [checked, setChecked] = React.useState("first");

  return (
    <View>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "20%",
    backgroundColor: "#44caac",
    marginTop: 30,
    padding: 13,
  },
});

export default MyComponent;

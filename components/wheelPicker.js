import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";

const WheelPicker = (props) => {
  let _bindArray = props.preselectedValue;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      {/* Use FLEX to position columns side-by-side*/}

      {props.data.map((column, columnIndex) => {
        {
          /* Iterate data. For each inner array we create a <Picker> */
        }
        {
          /*note: indexOf works only with the same type of elements. So, ensure that the element you are looking for
            has the same type inside the array. In this example I wanted a String.*/
        }
        let _innerIndex = column.indexOf("" + _bindArray[columnIndex]);
        {
          /* Return the <Picker>. onValueChange we handle the changes accordingly and call the confirmation function. */
        }
        return (
          <Picker
            key={columnIndex}
            selectedValue={column[_innerIndex]}
            style={{
              flex: 1,
            }}
            onValueChange={(itemValue, itemIndex) => {
              _innerIndex = itemIndex;
              _bindArray[columnIndex] = itemValue;
              props.confirmFunction(_bindArray);
            }}
          >
            Creates the list of options
            {column.map((item, idx) => (
              <Picker.Item key={idx} label={item} value={item} />
            ))}
          </Picker>
        );
      })}
    </View>
  );
};

export default WheelPicker;


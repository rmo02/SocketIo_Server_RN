//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";

// create a component
const HeaderComponent = ({
  centerText = "",
  leftCustomView = () => {},
  isLeftView = false,
  containerStyle = {},
  rightText = {},
  onPressRight = () => {},
  isRight = true,
  rightPressActive = true,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      {isLeftView ? leftCustomView() : <View />}
      <Text style={styles.centerText}>{centerText}</Text>
      {isRight ? (
        <TouchableOpacity disabled={rightPressActive} onPress={()=>onPressRight()}>
          <Text style={{ ...styles.rightText, ...rightText }}>Done</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.6,
    borderColor: "grey",
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  centerText: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: 20,
  },
  rightText: {
    color: colors.grey,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
});

//make this component available to the app
export default HeaderComponent;

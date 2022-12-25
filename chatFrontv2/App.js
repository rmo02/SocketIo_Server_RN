//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/Navigations/Routes";
import store from "./src/redux/store";

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Routes />
      </View>
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;

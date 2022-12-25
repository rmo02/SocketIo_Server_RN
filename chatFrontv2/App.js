//import liraries
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/Navigations/Routes";
import { saveUserData } from "./src/redux/reducers/auth";
import store from "./src/redux/store";
import { clearAllItem, getItem } from "./src/utils/utils";

// create a component
const App = () => {


  useEffect(() => {
    (async () => {
      let userData = await getItem("userData");
      if (!!userData) {
        store.dispatch(saveUserData(userData));
      }
    })();
  }, []);

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

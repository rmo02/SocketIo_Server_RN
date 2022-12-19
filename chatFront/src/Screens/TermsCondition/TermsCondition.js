//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import imagePath from "../../constatns/imagePath";
import styles from "./styles";
import colors from "../../styles/colors";
import navigationStrings from "../../constatns/navigationStrings";
import WrapperContainer from "../../components/WrapperContainer";

// create a component
const TermsCondition = ({ navigation }) => {
  return (
    <WrapperContainer containerStyle={{ alingItems: "center" }}>
      <View style={{alignItems:'center'}}>

       <Image
       resizeMode="contain"
       style={styles.logo}
       source={imagePath.icLogo}
     />

        <Text style={styles.headingStyle}>Welcome to RChats</Text>
        <Text>
          {" "}
          Read our{" "}
          <Text style={{ color: colors.lightBlue }}>Privacy Policy.</Text> Tap
          "Agree & Continue" to accept the{" "}
          <Text style={{ color: colors.lightBlue }}> Terms of Service </Text>
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.PHONE_NUMBER)}
        >
          <Text style={styles.agreeStyle}>Agree & Continue</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default TermsCondition;

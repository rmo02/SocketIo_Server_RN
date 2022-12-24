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
    <WrapperContainer containerStyle={{ alignItems: "center" }}>
      <View style={{marginTop:'20%'}}>
      <Image
        resizeMode="contain"
        style={styles.logoStyle}
        source={imagePath.icLogo}
      />

      <Text style={styles.headingStyle}>Welcome to RChats</Text>
      <View style={{paddingHorizontal:70}}>
      <Text style={styles.descStyle}>
        Read our{" "}
        <Text style={{ color: colors.lightBlue }}>
          Privacy Policy
        </Text>{" "}
        Tap "Agree & Continue to accept the{" "}
        <Text style={{ color: colors.lightBlue }}>
          Terms of Service
        </Text>
      </Text>        
      </View>

      <View style={{marginTop:'10%'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationStrings.PHONE_NUMBER)}
        activeOpacity={0.7}
      >
        <Text style={styles.agreeStyle}>Agree & Continue</Text>
      </TouchableOpacity>
      </View>
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default TermsCondition;

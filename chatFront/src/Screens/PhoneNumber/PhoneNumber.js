//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CountryPicker from "../../components/CountryPicker";
import ContryPicker from "../../components/CountryPicker";
import HeaderComponent from "../../components/HeaderComponent";
import HorizontalLine from "../../components/HorizontalLine";
import WrapperContainer from "../../components/WrapperContainer";
import imagePath from "../../constatns/imagePath";
import colors from "../../styles/colors";
import styles from "./styles";

// create a component
const PhoneNumber = () => {
  return (
    <WrapperContainer containerStyle={{paddingHorizontal:0}}>
    <HeaderComponent  
    centerText="Enter Your Number"
    containerStyle={{paddingHorizontal:8}}/>
      <Text style={styles.descStyle}>Rchats will send and sms message to verify tour phone number</Text>
      <HorizontalLine />

        <CountryPicker />
    </WrapperContainer>
  );
};

//make this component available to the app
export default PhoneNumber;

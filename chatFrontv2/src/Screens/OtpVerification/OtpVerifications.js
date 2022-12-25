//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import HorizontalLine from "../../components/HorizontalLine";
import WrapperContainer from "../../components/WrapperContainer";
import imagePath from "../../constatns/imagePath";
import navigationStrings from "../../constatns/navigationStrings";
import { moderateScaleVertical } from "../../styles/responsiveSize";
import styles from "./styles";
import OtpInputs from "react-native-otp-inputs";
import actions from "../../redux/actions";
// create a component
const OtpVerification = ({ navigation, route }) => {
  const { data } = route?.params


  const leftCustomView = () => {
      return (
          <TouchableOpacity
              onPress={() => navigation.goBack()}
          >
              <Image source={imagePath.icBack} />
          </TouchableOpacity>
      )
  }

  const handleChange = async (value) => {
      if (value.length >= 6) {
          try {
              let res = await actions.otpVerify({
                  otp: value,
                  user_id: data._id
              })
              console.log("api res",res)
          } catch (error) {
              console.log("error riased in verify api",error)
              alert(error?.message)
          }
      }
  }

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText={`${data?.selectedCountry?.dialCode} ${data?.phoneNumber}`}
        containerStyle={{ paddingHorizontal: 8 }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        isRight={false}
      />
      <HorizontalLine />

      <Text
        style={{
          ...styles.descStyle,
          marginVertical: moderateScaleVertical(24),
        }}
      >
        We have sent tou an SMS with a cpde the number above
      </Text>
      <Text style={styles.descStyle}>
        To complete your phone number verification, please enter the 6-digit
        activation code.
      </Text>

      <View style={{ marginHorizontal: moderateScaleVertical(16) }}>
        <OtpInputs
          handleChange={handleChange}
          numberOfInputs={6}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: moderateScaleVertical(42),
          }}
          inputStyles={styles.inputStyle}
        />

        <View style={{ marginTop: moderateScaleVertical(42) }}>
          <Text style={styles.bottomText}>Resend Code</Text>
        </View>
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default OtpVerification;

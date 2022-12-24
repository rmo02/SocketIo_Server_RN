//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import CountryPicker from "../../components/CountryPicker";
import HeaderComponent from "../../components/HeaderComponent";
import HorizontalLine from "../../components/HorizontalLine";
import WrapperContainer from "../../components/WrapperContainer";
import imagePath from "../../constatns/imagePath";
import RoundImage from "../../components/RoundImage";
import { moderateScale, textScale } from "../../styles/responsiveSize";
import fontFamily from "../../styles/fontFamily";
import colors from "../../styles/colors";
import TextInputComp from "../../components/TextInputComp";
import { androidCameraPermission } from '../../utils/permissons';
import ImagePicker from "react-native-image-crop-picker";

// create a component
const EditProfile = ({ navigation }) => {
  const [state, setState] = useState({
    image: "",
    name: "",
  });

  const { image, name } = state;

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const leftCustomView = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={imagePath.icBack} />
      </TouchableOpacity>
    );
  };

  const selectPhoto = async () => {
    const permissionsStatus = await androidCameraPermission();
    if(permissionsStatus){
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
    }
  };

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText="Edit Profile"
        containerStyle={{ paddingHorizontal: 8 }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        onPressRight={() => navigation.navigate(navigationStrings.EDIT_PROFILE)}
      />
      <HorizontalLine />
      <View style={{ margin: moderateScale(16) }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RoundImage onPress={() => selectPhoto()} />
          <Text style={styles.descStyle}>
            Enter your name anda add an optional profile picture
          </Text>
        </View>
      </View>
      <HorizontalLine />
      <TextInputComp placeholder="Your Name" />
      <HorizontalLine />
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  descStyle: {
    fontSize: textScale(14),
    fontFamily: fontFamily.blackFont,
    flex: 1,
    marginLeft: moderateScale(16),
    color: colors.grey,
  },
});

//make this component available to the app
export default EditProfile;

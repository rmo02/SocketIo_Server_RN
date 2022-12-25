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
import navigationStrings from "../../constatns/navigationStrings";
import HeaderComponent from "../../components/HeaderComponent";
import HorizontalLine from "../../components/HorizontalLine";
import WrapperContainer from "../../components/WrapperContainer";
import imagePath from "../../constatns/imagePath";
import RoundImage from "../../components/RoundImage";
import { moderateScale, textScale } from "../../styles/responsiveSize";
import fontFamily from "../../styles/fontFamily";
import colors from "../../styles/colors";
import TextInputComp from "../../components/TextInputComp";
import { androidCameraPermission } from "../../utils/permissons";
import ImagePicker from "react-native-image-crop-picker";
import styles from './styles';
import actions from '../../redux/actions'

// create a component
const EditProfile = ({ navigation, route }) => {

  const [state, setState] = useState({
    image: '',
    name: '',
})
const { image, name } = state

const { data } = route.params

const updateState = (data) => setState((state) => ({ ...state, ...data }))


console.log("datadata", data)

const leftCustomView = () => {
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
            <Image source={imagePath.icBack} />
        </TouchableOpacity>
    )
}

const selectPhoto = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus) {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(res => {
            console.log(res);
            updateState({ image: res.path })
        });
    }
}

const onDone = async () => {
    let apiData = {
        ...state,
        ...data
    }
    try {
        const res = await actions.signUp(apiData)
        console.log("api res signup", res)
        if (!!res?.data) {
            navigation.navigate(navigationStrings.OTP_VERIFICATION, { data: res?.data })
        }
    } catch (error) {
        console.log("error raised is signup api", error)
    }
}

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText="Edit Profile"
        containerStyle={{ paddingHorizontal: 8 }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        onPressRight={() => onDone()}
        rightTextStyle={{
          color: name.length > 3 ? colors.lightBlue : colors.grey,
          fontFamily: name.length > 3 ? fontFamily.bold : fontFamily.regular,
      }}
      rightPressActive={name.length < 3}
      />
      <HorizontalLine />
      <View style={{ margin: moderateScale(16) }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RoundImage onPress={() => selectPhoto()} image={image} />
          <Text style={styles.descStyle}>
            Enter your name anda add an optional profile picture
          </Text>
        </View>
      </View>
      <HorizontalLine />
      <TextInputComp
        placeholder="Your Name"
        onChangeText={(text) => updateState({ name: text })}
      />
      <HorizontalLine />
    </WrapperContainer>
  );
};


//make this component available to the app
export default EditProfile;

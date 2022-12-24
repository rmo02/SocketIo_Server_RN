//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import CountryPicker from "../../components/CountryPicker";
import HeaderComponent from "../../components/HeaderComponent";
import HorizontalLine from "../../components/HorizontalLine";
import WrapperContainer from "../../components/WrapperContainer";
import imagePath from "../../constatns/imagePath";
import styles from "./styles";
import navigationStrings from "../../constatns/navigationStrings";
import colors from '../../styles/colors';
import fontFamily from "../../styles/fontFamily";


// create a component
const PhoneNumber = ({navigation}) => {

  const [state, setState] = useState({
    selectedCountry: {
        "name": "Brazil",
        "dialCode": "+55",
        "isoCode": "BR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg"
    },
    phoneNumber: '',
})
const { selectedCountry, phoneNumber } = state

const updateState = (data) => setState((state) => ({ ...state, ...data }))

const fetchCountry = (data) => {
    updateState({ selectedCountry: data })
}

  const leftCustomView = () => {
    return(
      <TouchableOpacity
      onPress={()=> navigation.goBack()}>
        <Image source={imagePath.icBack}/>
      </TouchableOpacity>
    )
  }

  const onDone = () => {
    navigation.navigate(navigationStrings.EDIT_PROFILE, { data: state })
  }

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText="Enter Your Number"
        containerStyle={{ paddingHorizontal: 8 }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        onPressRight={onDone}
        rightTextStyle={{color: phoneNumber.length > 8 ? colors.lightBlue : colors.grey,
          fontFamily:  phoneNumber.length > 8 ? fontFamily.bold : fontFamily.regular,
        }}
        rightPressActive={phoneNumber.length < 8}
      />
      <Text style={styles.descStyle}>
        Rchats will send and sms message to verify tour phone number
      </Text>
      <HorizontalLine />
      <CountryPicker value={selectedCountry?.name} fetchCountry={fetchCountry} />

      <View style={{ flexDirection: "row", alignItems: "center",borderBottomWidth: 0.7, paddingLeft:10}}>
        <Text style={styles.dialCodeStyle}>{selectedCountry?.dialCode}</Text>
        <View style={{flex:1}}>
        <TextInput
        keyboardType="phone-pad"
          placeholder="Enter your phone number"
          style={styles.inputStyle}
          onChangeText={text => updateState({phoneNumber: text})}
        />
        </View>
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default PhoneNumber;

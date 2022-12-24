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


// create a component
const PhoneNumber = ({navigation}) => {
  const [selectCountry, setSelectCountry] = useState({
    name: "Brazil",
    dialCode: "+55",
    isoCode: "BR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
  });

  const fetchCountry = (data) => {
    console.log("country data", data);
    setSelectCountry(data);
  };

  const leftCustomView = () => {
    return(
      <TouchableOpacity
      onPress={()=> navigation.goBack()}>
        <Image source={imagePath.icBack}/>
      </TouchableOpacity>
    )
  }

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText="Enter Your Number"
        containerStyle={{ paddingHorizontal: 8 }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        onPressRight={()=> navigation.navigate(navigationStrings.EDIT_PROFILE)}
      />
      <Text style={styles.descStyle}>
        Rchats will send and sms message to verify tour phone number
      </Text>
      <HorizontalLine />
      <CountryPicker value={selectCountry?.name} fetchCountry={fetchCountry} />

      <View style={{ flexDirection: "row", alignItems: "center",borderBottomWidth: 0.7, paddingLeft:10}}>
        <Text style={styles.dialCodeStyle}>{selectCountry?.dialCode}</Text>
        <View style={{flex:1}}>
        <TextInput
        keyboardType="phone-pad"
          placeholder="Enter your phone number"
          style={styles.inputStyle}
        />
        </View>
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default PhoneNumber;

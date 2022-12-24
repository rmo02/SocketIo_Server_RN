import React, { Fragment } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";
import { moderateScale, textScale } from "../styles/responsiveSize";

// import { Container } from './styles';

const TextInputComp = ({
    placeholder="",
    inputStyle={},
    ...props
}) => {
  return(
  <Fragment>
    <TextInput
      placeholder={placeholder}
      style={{...styles.inputStyle, ...inputStyle}}
      {...props}
    />
  </Fragment>
  )
};

const styles = StyleSheet.create({
    inputStyle: {
        padding:moderateScale(12),
        borderBottomColor: colors.grey,
        fontFamily:fontFamily.regular,
        fontSize: textScale(16),
        height: moderateScale(42),
    }
})

export default TextInputComp;

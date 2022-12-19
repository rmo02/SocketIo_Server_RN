import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { height, moderateScale, moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    logoStyle: {
        height: 480,
        height: 380,
        alignSelf:'center'

    },
    headingStyle: {
        fontSize: textScale(32),
        fontFamily: fontFamily.bold,
        alignSelf:'center'
    },
    descStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.regular,
        textAlign: 'center',
        marginTop: moderateScaleVertical(16)
    },
    agreeStyle: {
        fontSize: textScale(20),
        fontFamily: fontFamily.bold,
        marginTop: moderateScaleVertical(24),
        color: colors.blue,
        alignSelf:'center'
    }
})

export default styles
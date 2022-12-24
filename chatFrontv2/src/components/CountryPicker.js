//import liraries
import React, { Fragment, useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import imagePath from "../constatns/imagePath";
import colors from "../styles/colors";
import Modal from "react-native-modal";
import HeaderComponent from "./HeaderComponent";
import countries from "./countries";
import HorizontalLine from "./HorizontalLine";
import fontFamily from "../styles/fontFamily";
import { textScale } from "../styles/responsiveSize";


// create a component
const CountryPicker = ({ fetchCountry = () => {}, value = "" }) => {
  const [data, setData] = useState(countries);

  const [showModal, setShowModal] = useState(false);

  const renderItem = useCallback(
    ({ item, index }) => {
      let isSelected = value == item.name;
      return (
        <TouchableOpacity
          style={{ marginHorizontal: 16, flexDirection:'row' }}
          activeOpacity={0.7}
          onPress={() => onSelectCountry(item)}
        >
          <Text
            style={{
              ...styles.nameStyle,
              fontFamily: isSelected ? fontFamily.bold : fontFamily.regular,
              color: isSelected ? colors.lightBlue : colors.black,
            }}
          >
            {item?.name} ({item?.dialCode})
          </Text>
        </TouchableOpacity>
      );
    },
    [data]
  );

  const onSelectCountry = (item) => {
    fetchCountry(item);
    setShowModal(false);
  };

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        activeOpacity={0.7}
        style={styles.container}
      >
        <Text style={styles.valueStyle}>{value}</Text>
        <Image source={imagePath.icForward} />
      </TouchableOpacity>
      <Modal
        style={{ backgroundColor: colors.white, margin: 0 }}
        isVisible={showModal}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <HeaderComponent
            onPressRight={() => setShowModal(false)}
            centerText="Select your country"
          />
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              ItemSeparatorComponent={() => (
                <HorizontalLine lineStyle={{ marginVertical: 12 }} />
              )}
              ListHeaderComponent={() => <View style={{ height: 20 }} />}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </Fragment>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.8,
    borderBottomColor: colors.grey,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  valueStyle: {
    color: colors.lightBlue,
    fontFamily: fontFamily.bold,
    fontSize: textScale(18),
  },
  nameStyle: {
    color: colors.lightBlue,
    fontFamily: fontFamily.bold,
    fontSize: textScale(16),
  },
});

//make this component available to the app
export default React.memo(CountryPicker);

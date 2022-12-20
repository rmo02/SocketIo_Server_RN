//import liraries
import React, { Fragment, useState } from "react";
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
import countries from  './countries';
import HorizontalLine from './HorizontalLine';

// create a component
const CountryPicker = () => {
  const [data, setData] = useState(countries)

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginHorizontal:16}}>
        <Text>{item?.name} ({item?.dialCode})</Text>
      </View>

    )
  }

  return (
    <Fragment>
      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        <Text>Brazil</Text>
        <Image source={imagePath.icForward} />
      </TouchableOpacity>
      <Modal
        style={{ backgroundColor: colors.white, margin: 0 }}
        isVisible={true}
      >
        <SafeAreaView style={{ flex: 1 }}>
        <HeaderComponent centerText='Select your country'/>
          <View>
            <FlatList 
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={()=> <HorizontalLine lineStyle={{marginVertical:12}}/>}
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
});

//make this component available to the app
export default CountryPicker;

//import liraries
import React, { Component, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import navigationStrings from "../../constatns/navigationStrings";
import HeaderComponent from "../../components/HeaderComponent";
import HorizontalLine from "../../components/HorizontalLine";
import WrapperContainer from "../../components/WrapperContainer";
import imagePath from "../../constatns/imagePath";
import colors from "../../styles/colors";
import styles from "./styles";

// create a component
const Chats = ({ navigation }) => {
  const [data, setData] = useState([]);

  const leftCustomView = () => {
    return (
      <TouchableOpacity>
        {data.length > 0 ? <Text>Edit</Text> : <View style={{ height: 20 }} />}
        <Text style={styles.headingSyle}>Chats</Text>
      </TouchableOpacity>
    );
  };

  const onPressRight = () => {
    navigation.navigate(navigationStrings.USERS)
 }

 const renderItem = useCallback(({ item, index }) => {
    return (
        <View>
            <Text>Flat item</Text>

        </View>
    )
}, [data])

  const listEmptyComponent = useCallback(() => {
    return (
      <View style={styles.listEmptyStyle}>
        <View style={{}}>
          <Text style={styles.commStyle}>
            Tap on
            <Image source={imagePath.icEdit} />{" "}
            <Text style={styles.commStyle}>
              Int the top right corner to start a new chat.
            </Text>
          </Text>
        </View>
        <Text
          style={{
            ...styles.commStyle,
            color: colors.grey,
            marginTop: moderateScaleVertical(16),
          }}
        >
          You can chat with contacts who have Chatbes installed and signup on
          their phone.
        </Text>
      </View>
    );
  }, [data]);

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        rightPressActive={false}
        centerText={``}
        containerStyle={{ paddingHorizontal: 8 }}
        leftCustomView={leftCustomView}
        isLeftView={true}
        rightImg={imagePath.icEdit}
        onPressRight={onPressRight}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </WrapperContainer>
  );
};

//make this component available to the app
export default Chats;

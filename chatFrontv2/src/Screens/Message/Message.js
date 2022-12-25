import React, { useCallback, useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import RoundImage from "../../components/RoundImage";
import WrapperContainer from "../../components/WrapperContainer";
import imagePath from "../../constatns/imagePath";
import colors from "../../styles/colors";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";

// import { Container } from './styles';

const Message = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);
  const { data } = route.params;

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderActions = useCallback(()=>{
    return(
        <TouchableOpacity style={{marginLeft:moderateScale(8), marginBottom: moderateScaleVertical(8)}}>
            <Image source={imagePath.icPlus}/>
        </TouchableOpacity>
    )
  })

  return (
    <View style={{flex:1}}>
      <SafeAreaView>
      <View style={styles.flexView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image source={imagePath.icBack} />
          </TouchableOpacity>
          <View style={styles.nameView}>
            <RoundImage size={40} image={data?.profileImage} />
            <Text style={styles.nameTextStyle}>{data?.name}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}></View>
        <TouchableOpacity>
          <Image source={imagePath.icVideo} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: moderateScale(12) }}>
          <Image source={imagePath.icCalls} />
        </TouchableOpacity>
      </View>
      </SafeAreaView>

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderActions={renderActions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal:moderateScale(16),
    paddingVertical:moderateScaleVertical(8),
    borderBottomColor:colors.grey,
    borderBottomWidth:0.5
  },
  nameView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: moderateScale(8),
  },
  nameTextStyle: {
    fontSize: textScale(16),
    marginLeft: moderateScale(8),
  },
});

export default Message;

//import liraries
import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import HorizontalLine from "../../components/HorizontalLine";
import RoundImage from '../../components/RoundImage';
import WrapperContainer from '../../components/WrapperContainer';
import imagePath from '../../constatns/imagePath';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import styles from './styles';
import navigationStrings from "../../constatns/navigationStrings";



const Users = ({ navigation }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await actions.fetchUsers()
            console.log("res fetch users", res)
            if (!!res?.data) {
                setData(res.data.users)
            }
        } catch (error) {
            console.log("error raised during fetch user", error)
        }
    }



    const onPressRight = () => {
        navigation.goBack()
    }

    const onPressItem = useCallback((item) => {
        navigation.navigate(navigationStrings.MESSAGE, { data: item})
    }, [])


    
    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => onPressItem(item)} activeOpacity={0.7} style={styles.headerStyle}>
                <RoundImage
                    image={item?.profileImage}
                    size={40}
                />
                <Text style={styles.userName}>{item?.name}</Text>
            </TouchableOpacity>
        )
    }, [data])

    const listEmptyComponent = useCallback(() => {
        return (
            <View style={styles.listEmptyStyle}>
                <Text>No User Found</Text>
            </View>
        )
    }, [data])

    const listHeaderComponent = useCallback(() => {
        return (
            <View style={styles.headerStyle}>
                <RoundImage
                    image={imagePath.icGroup}
                    isStatic={true}
                    size={40}
                />
                <Text style={styles.newGroupText}>New Group</Text>

            </View>
        )
    }, [data])

    return (
        <WrapperContainer
            containerStyle={{ paddingHorizontal: 0 }}
        >
            <HeaderComponent
                rightPressActive={false}
                centerText='New Chat'
                containerStyle={{ paddingHorizontal: 8 }}
                rightText='Cancel'
                rightTextStyle={{ color: colors.lightBlue }}
                onPressRight={onPressRight}
            />

            <FlatList
                data={data}
                renderItem={renderItem}
                ListEmptyComponent={listEmptyComponent}
                contentContainerStyle={{ flexGrow: 1 }}
                ListHeaderComponent={listHeaderComponent}
                ItemSeparatorComponent={() => <HorizontalLine />}

            />


        </WrapperContainer>
    );
};

export default Users;
import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Context } from '../context/BlogContext'
import Icon from 'react-native-vector-icons/Entypo'

const ShowScreen = ({ route, navigation }) => {
    const { id } = route.params
    const { state } = useContext(Context)

    const detail = state.find(post => post.id === id)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: detail.id })}>
                    <Icon name="edit" style={styles.icon} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.detail}>
            <View>
                <Text style={styles.title}>{detail.title}</Text>
                <Text style={styles.description}>{detail.description}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    detail: {
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 2,
        padding: 10,
        height: 200,
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    description: {
        fontSize: 20,
    },
    icon: {
        fontSize: 30,
        color: "green",
    }
})

export default ShowScreen

import React, { useContext, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import Icon from "react-native-vector-icons/EvilIcons"
import { useNavigation } from '@react-navigation/native'

const indexScreem = () => {
    const { state, deleteBlogPost } = useContext(Context)

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <Icon name="plus" style={styles.addIcon} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={post => post.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Icon name="trash" style={styles.trashIcon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        borderWidth: 2,
        padding: 10,
        margin: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 20
    },
    trashIcon: {
        fontSize: 40,
        color: "red"
    },
    addIcon: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        marginRight: 10
    }
})

export default indexScreem

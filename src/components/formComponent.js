import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const formComponent = ({ onSubmite, initialValue }) => {

    const [title, setTitle] = useState(initialValue.title);
    const [description, setDescription] = useState(initialValue.description);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blog</Text>
            <TextInput
                placeholder='title'
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.titleDesc}
            />
            <TextInput
                placeholder='description'
                value={description}
                onChangeText={text => setDescription(text)}
                style={styles.titleDesc}
            />
            <TouchableOpacity onPress={() => onSubmite(title, description)}>
                <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

formComponent.defaultProps = {
    initialValue: { title: "", description: "" },
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 5,
    },
    title: {
        fontSize: 40,
        textAlign: "center",
    },
    titleDesc: {
        padding: 10,
        fontSize: 30,
        borderWidth: 2,
        margin: "auto",
        width: 300,
        borderRadius: 10,
    },
    button: {
        width: 300,
    },
    save: {
        fontSize: 40,
        backgroundColor: "gray",
        width: 200,
        margin: "auto",
        borderRadius: 10,
        paddingHorizontal: 5,
        textAlign: "center",
    }
})

export default formComponent;
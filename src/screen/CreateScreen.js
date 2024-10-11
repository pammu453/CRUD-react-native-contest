import React, { useContext } from 'react'
import { Context } from '../context/BlogContext';
import FormComponent from '../components/formComponent';

const CreateScreen = ({ navigation }) => {
    const { addBlogPosts } = useContext(Context)

    return <FormComponent
        onSubmite={
            (title, description) => {
                addBlogPosts(title, description, () => navigation.navigate("Index"))
            }}
    />
}

export default CreateScreen

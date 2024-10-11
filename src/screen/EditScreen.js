import { Context } from '../context/BlogContext'
import FormComponent from '../components/formComponent';
import { useContext } from 'react';

const EditScreen = ({ route, navigation }) => {
    const { state, updateBlogPost } = useContext(Context)
    const { id } = route.params

    const filtredPost = state.find(post => post.id === id)

    return <FormComponent
        onSubmite={(title, description) => {
            updateBlogPost(title, description, id, () => navigation.pop())
        }}
        initialValue={{ title: filtredPost.title, description: filtredPost.description }}
    />
}

export default EditScreen
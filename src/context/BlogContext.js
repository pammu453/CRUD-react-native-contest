import createDataContext from './createDataContext'

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return [...state, {
                id: Math.floor(Math.random() * 999) + 1,
                title: action.payload.title,
                description: action.payload.description,
            }]
        case "DELETE":
            return state.filter(post => post.id != action.payload)
        case "UPDATE":
            return state.map((post) =>
                post.id === action.payload.id
                    ? { ...post, title: action.payload.title, description: action.payload.description }
                    : post
            );
        default:
            return state
    }
}

const addBlogPosts = dispatch => {
    return (title, description, callback) => {
        dispatch({ type: "ADD", payload: { title, description } })
        callback()
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: "DELETE", payload: id })
    }
}

const updateBlogPost = dispatch => {
    return (title, description, id, callback) => {
        dispatch({ type: "UPDATE", payload: { title, description, id } })
        callback()
    }
}

export const { Context, Provider } = createDataContext(
    reducer,
    { addBlogPosts, deleteBlogPost, updateBlogPost },
    [{ title: "Hello", description: "There", id: 123 }]
)
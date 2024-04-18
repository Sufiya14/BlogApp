
export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_BLOG':
            return {
                blogs: state.blogs.filter(blog => {
                    return blog.id !== action.payload
                })
            }
        case 'ADD_BLOG':
            return {
                blogs: [action.payload, ...state.blogs]
            }
        case 'EDIT_BLOG':
            const updated = action.payload;
            const upadatedBlog = state.blogs.map(
                blog => {
                    if (blog.id === updated.id) {
                        return updated;
                    }
                    return blog;
                })
            return {
                blogs: upadatedBlog
            }
        case 'EDIT_LIKE':
            const updatedlike = action.payload;
            const upadatedlikes = state.blogs.map(
                blog => {
                    if (blog.id === updatedlike.id) {
                        return updatedlike;
                    }
                    return blog;
                })
            return {
                blogs: upadatedlikes
            }
        default:
            return state;
    }
}
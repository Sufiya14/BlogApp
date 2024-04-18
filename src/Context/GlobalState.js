import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';


//initial state
const initialState = {
    blogs: null
};
if (localStorage["blogList"]!=null){
    initialState.blogs= JSON.parse(localStorage["blogList"]);
}
else{
    initialState.blogs=null;
}

//create context

export const GlobalContext = createContext(initialState);

//create provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions

    const RemoveBlog = (id) => {
        dispatch({
            type: 'REMOVE_BLOG',
            payload: IDBRequest
        })

    }

    const AddBlog = (blog) => {
        dispatch({
            type: 'ADD_BLOG',
            payload: blog
        })
        
    }

    const EditBlog = (blog) => {
        dispatch({
            type: 'EDIT_BLOG',
            payload: blog
        })
        
    }

    const EditLike = (blog) => {
        dispatch({
            type: 'EDIT_LIKE',
            payload: blog
        })
        
    }

    return (
        <GlobalContext.Provider value={{ 
            blogs: state.blogs,
            RemoveBlog,
            AddBlog,
            EditBlog,
            EditLike
         }}>
            {children}
        </GlobalContext.Provider>
    )
}


import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({route, navigation}) => {

    const { state, editBlogPost } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

    console.log(route.params.id)
    return <BlogPostForm 
                initialValues={{title: blogPost.title, content: blogPost.content}} 
                onSubmit={(title, content) => {
                    editBlogPost(blogPost.id, title, content, () => navigation.goBack())
                }}
            />
}

const styles = StyleSheet.create({

})

export default EditScreen
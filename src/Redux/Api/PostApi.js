import axios from "axios"




export const getPost = async (token, id) => {
    try {
        const res = await axios.request({
            method: 'GET',

            url: (!id) ? `http://localhost:8080/get-posts` : `http://localhost:8080/get-posts?id=${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        console.log(res)
        const posts = res.data

        return posts


    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getFriendPosts = async (token) => {
    try {

        const res = await axios.get("http://localhost:8080/get-friends-posts", {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const posts = res.data;
        console.log(res);
        return posts
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const uploadPost = async (token, postData) => {
    try {
        const res = await axios.post("http://localhost:8080/upload-post",
            postData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
        const message = res.data.message;
        console.log(message);
        return message
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const updatePost = async (token, postData) => {
    try {
        console.log(postData)
        const res = await axios.patch("http://localhost:8080/update-post",
            postData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const message = res.data.message;
        console.log(message);
        return message;
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}

export const deletePost = async (token, id) => {
    try {
        console.log(id);
        const res = await axios.delete(`http://localhost:8080/delete-post/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const message = res.data.message;
        console.log(message);
        return message;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getPostById = async (token, id) => {
    try {
        console.log(id);
        const res = await axios.get(`http://localhost:8080/post/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const post = res.data;
        console.log(res);
        return post;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}
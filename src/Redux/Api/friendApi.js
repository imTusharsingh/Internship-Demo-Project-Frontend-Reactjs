import axios from "axios";



export const sendFriendRequest = async (token, id) => {
    try {
        console.log(id);
        const res = await axios.post("http://localhost:8080/send-friend-request",
            { recieverId: id },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )


        console.log(res);
        const message = res.data.message;
        return message
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}


export const getFriendRequestList = async (token) => {
    try {
        const res = await axios.get("http://localhost:8080/get-friend-request",
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        console.log(res);
        const requests = res.data.requests;
        return requests
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getFriendRequestSentList = async (token) => {
    try {
        const res = await axios.get("http://localhost:8080/get-friend-request-sent",
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        console.log(res);
        const requests = res.data.requests;
        return requests
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getFriendsList = async (token) => {
    try {
        const res = await axios.get("http://localhost:8080/get-friends",
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        console.log(res);
        const friends = res.data;
        return friends
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const acceptFriendRequest = async (token, id) => {
    try {
        console.log(id)
        const res = await axios.patch("http://localhost:8080/accept-friend-request",
            { id },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        console.log(res);
        const message = res.data.message;
        return message
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const rejectFriendRequest = async (token, id) => {
    try {
        console.log(id)
        const res = await axios.delete(`http://localhost:8080/reject-friend-request/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        console.log(res);
        const message = res.data.message;
        return message
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const removeFriendRequest = async (token, id) => {
    try {
        console.log(id)
        const res = await axios.delete(`http://localhost:8080/remove-friend-request/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        console.log(res);
        const message = res.data.message;
        return message
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const removeFriend = async (token, id) => {
    try {
        console.log(id)
        const res = await axios.patch(`http://localhost:8080/remove-friend`,
            { id },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        console.log(res);
        const message = res.data.message;
        return message;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}


import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import FriendCard from '../component/FriendCard'

import { useSelector, useDispatch } from "react-redux"
import { getRequestListRequest } from '../Redux/FRIEND/getFriendRequestList/action'

const Friendrequest = () => {
    const dispatch = useDispatch()
    const friendrequest = useSelector(state => state.friendRequestList)
    useEffect(() => {
        dispatch(getRequestListRequest())
    }, [dispatch])

    return (

        <>
            <Grid container spacing={1} >
                {(friendrequest.friendRequests.length > 0) ?
                    <FriendCard friends={friendrequest.friendRequests} /> :
                    <div><h4>No Friend Requests</h4></div>
                }
            </Grid>
        </>
    )
}

export default Friendrequest
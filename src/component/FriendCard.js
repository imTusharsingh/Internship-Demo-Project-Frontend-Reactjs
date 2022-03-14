import { Button, Card, Grid, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { acceptFriendRequest } from "../Redux/FRIEND/acceptFriendRequest/action"
import { rejectFriendRequest } from "../Redux/FRIEND/rejectFriendRequest/action"
import { removeFriendRequest } from "../Redux/FRIEND/removeFriend/action"

const useStyles = makeStyles((theme) => ({
    cardActtion: {

        display: 'flex',
        flexDirection: "column",
        gap: "8px",
        margin: theme.spacing(1)


    },
    actionButton: {
        width: "100%",
        margin: "0px"
    }
}))
const FriendCard = ({ isFriend, friends }) => {
    const classes = useStyles()
    const action = useSelector(state => state.acceptFriend)
    const dispatch = useDispatch()

    const confirmFriend = (id) => {
        dispatch(acceptFriendRequest(id))
    }
    const rejectFriend = (id) => {
        dispatch(rejectFriendRequest(id))
    }
    // const viewFriend = (id) => {
    //     dispatch(acceptFriendRequest(id))
    // }
    const removeFriend = (id) => {
        dispatch(removeFriendRequest(id))
    }


    return (
        <>

            {
                friends.map(data => {
                    return (
                        <Grid item md={3} sm={4} xs={12} key={data._id}>
                            <Card >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="200"
                                    image={(data.profileImg) ? `http://localhost:8080/${data.profileImg}` : "https://www.bing.com/th?id=OIP.poUweqDE6DdgwR3xvkOnEAHaHa&w=105&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"}

                                />
                                <CardContent>
                                    <Typography variant="body1" color="text.primary">
                                        {(isFriend) ? data.name : data.senderId.name}
                                    </Typography>
                                </CardContent>
                                <div className={classes.cardActtion} >
                                    {isFriend ?
                                        <>
                                            <Link to={`/profile?_id=${data._id}`}>
                                                <Button variant='contained' className={classes.actionButton} >View</Button>
                                            </Link>
                                            <Button variant='contained' color='warning' className={classes.actionButton} onClick={() => removeFriend(data._id)} >Remove</Button>

                                        </> :
                                        <>
                                            <Button variant='contained' className={classes.actionButton} onClick={() => { confirmFriend(data._id) }}>Confirm</Button>
                                            <Button variant='contained' color='warning' className={classes.actionButton} onClick={() => { rejectFriend(data._id) }}>Reject</Button>

                                        </>}

                                </div>
                            </Card>
                        </Grid>
                    )

                })}
        </>
    )



}

export default FriendCard
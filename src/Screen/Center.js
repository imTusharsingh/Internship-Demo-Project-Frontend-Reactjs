
import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getFriendsPostRequest } from '../Redux/POST/getFriendPost/action'
import PostCard from '../component/PostCard'
import PostSkeleton from '../component/PostSkeleton'


const useStyles = makeStyles((theme) => ({

    root: {
        position: "relative",


        backgroundColor: "#ffffff",
        boxShadow: 1,
        margin: theme.spacing(.5),
        borderRadius: theme.shape.borderRadius * 2,
        padding: theme.spacing(2),

    }
}))
const Center = () => {
    const classes = useStyles()




    const posts = useSelector(state => state.friendPosts)

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getFriendsPostRequest())
    }, [dispatch])

    posts.posts.sort((a, b) => {
        let da = new Date(a.createdAt),
            db = new Date(b.createdAt);
        return db - da;
    });



    return (
        <>
            <div className={classes.root} >



                {posts && posts.loading ? <><PostSkeleton /><PostSkeleton /><PostSkeleton /><PostSkeleton /></> :
                    (posts.posts.length > 0) ?
                        posts.posts.map((post) => {
                            return (
                                <PostCard post={post} key={post._id} />
                            )
                        })
                        : <div>
                            <p>No Post Available</p>
                            <span>Add Friends To See Posts</span>
                        </div>
                }


            </div>
        </>
    )
}

export default Center
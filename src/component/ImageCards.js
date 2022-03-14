import { ImageList, ImageListItem } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';



const ImageCards = ({ userPost, _id }) => {

    return (


        <ImageList sx={{ width: "100%", overflowY: "unset" }} cols={4} rowHeight={164} >

            {userPost.posts.map(post => {
                return (

                    <Link to={_id ? `/Posts?id=${_id}` : "/Posts"} >
                        <ImageListItem key={post.id}  >

                            <img
                                src={`http://localhost:8080/${post.postImage}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`http://localhost:8080/${post.postImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={post.caption}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </Link>

                )
            })}
        </ImageList>



    )
}

export default ImageCards
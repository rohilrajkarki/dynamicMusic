import styled from 'styled-components'
import Post from './BlogPortion/Post/Post'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Postitems = styled.div`
    flex: 9;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/api/posts");
            setPosts(res.data)
        }
        fetchPosts();
    }, [])
    return (
        <Postitems>
            <Link to="/write">
                <button>Add Post</button>
            </Link>
            {posts.map((item) => (
                <Post post={item} key={item._id} />
            ))}
        </Postitems>
    )
}

export default Posts        
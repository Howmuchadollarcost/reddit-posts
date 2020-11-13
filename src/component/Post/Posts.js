import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';

const PostsContainer = styled.div`
    column-count: 3;
    @media (max-width: 800px){
        column-count: 1;
    }

`

export default function Posts({ posts }) {
    return (
        <PostsContainer>
            {
                posts.length > 0 && posts.map(post => {
                    if (post.data.url_overridden_by_dest) {
                        let title = post.data.title;
                        let imageUrl =  post.data.url_overridden_by_dest;
                        let imgSrc = imageUrl.replace(/amp;/gi, '');
                        let commentLink = post.data.permalink;
                        return <Post key={post.data.created} title={title} imgSrc={imgSrc} commentLink={commentLink} />
                    }

                })
            }
        </PostsContainer>
    )
}



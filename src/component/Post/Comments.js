import React, { useState } from 'react';
import styled from 'styled-components';
import marked from 'marked';

marked.setOptions({
    breaks: true,
    gfm: true
});

const renderMarkdown = new marked.Renderer();


const CommentsContainer = styled.div`
    margin: 1em 0;
`

const Comments = ({ comments }) => {
    return (
        <CommentsContainer>
            {
                comments.map(comment => {
                    return <Comment key={comment.data.created} comment={comment.data.body} />
                })
            }
        </CommentsContainer>
    )
}

export default Comments;

const CommentText = styled.p`
    padding: 15px 5px 15px 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    align-items:center;
    color: #2e2e2e;
    margin: 10px 0;
    border-radius: 3px;
    font-size: 1.1rem;
    font-family:Verdana, Arial, Helvetica, sans-serif;
`

const Comment = ({ comment }) => {
    return (
        <CommentText  dangerouslySetInnerHTML={{__html:marked(comment, {renderer: renderMarkdown})}}></CommentText>
    )
}
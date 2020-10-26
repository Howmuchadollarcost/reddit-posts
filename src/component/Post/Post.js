import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Loading from '../Loading';
import Comments from './Comments';
import LazyImage from './LazyImage';


const PostWrap = styled.div`
    margin: 0.5em;
    text-align:center;
    border: 1px solid #eee;
    border-radius: 5px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
`

const PostTitle = styled.h4`
        background-color:#12121a;
        color:#fff;
        height:auto;
        font-size: 1.4rem;
        margin: 0;
        padding: 2rem;
        line-height: 1.35;
        font-weight: 200;
        letter-spacing: -.08rem;
        font-family: monospace;
        flex: 1;
`

const PostTop = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;

    @media (max-width: 480px){
        flex-direction:column;
    }
`

const ShowComments = styled.button`
    background: transparent;
    display: inline-block;
    color: #555;
    font-size: 11px;
    text-align:center;
    font-weight: 600;
    line-height:38px;
    letter-spacing:1px;
    text-decoration:none;
    white-space:nowrap;
    padding: 0 30px;
    text-transform: uppercase;
    outline:none;
    cursor: pointer;
    &:active{
      color: #eee;
  }
`



const Post = ({ title, imgSrc, commentLink}) => {
    const [showModal, setShowModal] = useState(false);

    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);


    const handleModal = (e) => {
        setShowModal(!showModal)
        fetchData();
    }

    const fetchData = async () => {
        setLoading(true);
        const commentURL = `https://www.reddit.com${commentLink}.json`
        const response = await fetch(commentURL);
        const json = await response.json();
        const commentsArray = json[1].data.children.slice(1, 11);
        setComments(commentsArray);
        setLoading(false);
    }

    return (
        <PostWrap>
            <PostTop>
                <PostTitle>{title && title}</PostTitle>
                <ShowComments onClick={handleModal}>Comments</ShowComments>
                <Modal
                    isOpen={showModal}
                    contentLabel="Something"
                >
                    <ShowComments onClick={handleModal}>Close</ShowComments>
                    {
                        loading ? <Loading /> : <Comments comments={comments} />
                    }
                </Modal>
            </PostTop>
            {/* <img src={imgSrc && imgSrc} /> */}
            <LazyImage src={imgSrc} />
        </PostWrap>
    )
}

export default Post;

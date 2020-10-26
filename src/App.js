import React, { useState } from 'react';
import Button from './component/Button';
import Posts from './component/Post/Posts';
import Loading from './component/Loading';
import styled from 'styled-components';

const bptAPI = `https://www.reddit.com/r/blackpeopletwitter/.json`;
const miAPI = `https://www.reddit.com/r/mildlyinteresting/.json`;

const Container = styled.div`
    width: 100%;
    margin:10px auto;
    font-size: 1.5em;

`
const ButtonContainer = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    gap: 5px;

    @media (max-width:420px)  {
        display: block;
        padding: 10px;
    }
`
const Results = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content:center;
`

const ToTheTop = styled.button`
    background: transparent; 
    display: inline-block;
    height: 38px;
    color: #555;
    font-size: 11px;
    text-align:center;
    font-weight: 600;
    line-height:38px;
    letter-spacing:1px;
    text-decoration:none;
    white-space:nowrap;
    padding: 0 30px;
    border: 1px solid #bbb;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom:1rem;
    outline:none;
    &:active{
        color: #eee;
    }

`

export default function App() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);


    const fetchData = async (e) => {
        setLoading(true);
        if (e.target.innerHTML === "/blackpeopletwitter") {
            const response = await fetch(bptAPI);
            const json = await response.json();
            setPosts(json.data.children)
            setLoading(false);
        } else {
            const response = await fetch(miAPI);
            const json = await response.json();
            setPosts(json.data.children)
            setLoading(false);
        }
    }

    return (
        <Container>
            <ButtonContainer>
                <Button onClick={fetchData} name="/blackpeopletwitter" color="black" id="bpt" />
                <Button onClick={fetchData} name="/mildlyinteresting" color="white" id="mi" />
            </ButtonContainer>

            <Results>
                {
                    loading ? <Loading /> : <Posts posts={posts} />
                }
            </Results>

            <div className="bottom__button">
                {
                    (!loading && posts.length > 0) &&
                    <ToTheTop onClick={() => {window.scrollTo(0,0)}}>⬆️ To The Top</ToTheTop>
                }
            </div>
        </Container>
    )
}

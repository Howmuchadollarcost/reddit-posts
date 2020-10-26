import React from 'react';
import styled, { keyframes } from 'styled-components';


const spin = keyframes`
    100% {
        transform: rotate(360deg)
        }
`


const Spinner = styled.div`
    margin-top: 20px;
    border: 8px solid lighten(#000, 5%);
    border-right: 8px solid #555;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    animation: ${spin} 1s linear infinite;

`


export default function Loading() {
    return (
        <Spinner />
    )
}
